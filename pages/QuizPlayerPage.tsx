
import React, { useEffect, useState } from 'react';
import { Page, Quiz } from '../types';
import { getQuizById } from '../data/quizzes';
import { useQuiz } from '../hooks/useQuiz';
import Navbar from '../components/Navbar';
import { calcPersonality, calcTrivia, calcPolitical } from '../utils/scoring';
import { calculateIQFromScore } from '../utils/iqScoring';
import { logSecurityEvent, checkRateLimit } from '../utils/security';
import { incrementQuizCompletions } from '../utils/stats';

interface Props {
  navigate: (p: Page) => void;
  quizId: string;
}

const QuizPlayerPage: React.FC<Props> = ({ navigate, quizId }) => {
  const quiz = getQuizById(quizId);
  if (!quiz) {
    return (
      <div className="h-screen flex items-center justify-center text-primary font-mono">
        FATAL ERROR: QUIZ_ID_NOT_FOUND
      </div>
    );
  }

  const { 
    question, index, isLast, progress, qLabel, selected, confirmed, 
    select, commit, next, answerState, session 
  } = useQuiz(quiz);

  const [time, setTime] = useState(2712); // Mock 45:12 in seconds

  useEffect(() => {
    const timer = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleCommit = () => {
    if (!checkRateLimit('quiz_answer', 10, 5000)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { action: 'commit_answer' });
      return;
    }
    commit();
  };

  const handleFinalize = () => {
    logSecurityEvent('QUIZ_COMPLETED', { quizId: quiz.id });
    incrementQuizCompletions(quiz.id);
    if (quiz.type === 'personality') {
      const resultData = calcPersonality(quiz, session);
      navigate({ name: 'result', quizId: quiz.id, resultData });
    } else if (quiz.type === 'trivia') {
      const resultData = calcTrivia(quiz, session);
      navigate({ name: 'result', quizId: quiz.id, resultData });
    } else if (quiz.type === 'political') {
      const result = calcPolitical(quiz, session);
      navigate({ name: 'political-result', ...result });
    } else if (quiz.type === 'iq-test') {
      const correct = quiz.questions.filter(q =>
        q.answers.find(a => a.id === session.answers[q.id])?.correct
      ).length;
      const resultData = calculateIQFromScore(correct);
      navigate({ name: 'result', quizId: quiz.id, resultData });
    }
  };

  const handleNext = () => {
    if (!selected) return;
    handleCommit();
    if (isLast) {
      setTimeout(handleFinalize, 100);
    } else {
      setTimeout(next, 100);
    }
  };

  return (
    <div className="relative z-[70] h-screen flex flex-col text-white font-display">
      <Navbar navigate={navigate} />
      {/* Top Bar */}
      <header className="h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-background-dark/80 backdrop-blur-md mt-20">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate({ name: 'home' })}
            className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
          >
            <span className="material-icons text-lg">arrow_back</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Back to Home</span>
          </button>
          <div className="h-6 w-px bg-primary/10"></div>
          <div className="flex items-center gap-4">
            {quiz.icon ? (
              <span className="material-icons text-primary text-2xl select-none">{quiz.icon}</span>
            ) : (
              <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xs font-mono font-bold">MS</span>
              </div>
            )}
            <h1 className="uppercase tracking-widest text-xs font-medium text-primary/60">Neural Analysis: {quiz.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-tighter text-primary/40 leading-none">Progress</span>
            <span className="text-primary font-mono text-xl leading-none">{qLabel}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-tighter text-danger/40 leading-none">Time Remaining</span>
            <span className="text-danger font-mono text-xl leading-none tracking-wider">{formatTime(time)}</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-[3px] bg-primary/10">
        <div className="h-full progress-gradient transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Main Interface */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary/40 uppercase tracking-[0.4em] mb-4 block animate-pulse">Analyzing response patterns...</span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight uppercase">
            {question.text}
          </h2>
        </div>

        {/* Answer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {question.answers.map((ans, i) => {
            const state = answerState(ans.id);
            return (
              <button 
                key={ans.id}
                onClick={() => select(ans.id)}
                className={`relative group flex items-stretch text-left rounded transition-all duration-300 ${
                  state === 'selected' ? 'border-2 border-primary bg-primary/5 shadow-[0_0_20px_rgba(0,229,255,0.1)]'
                  : state === 'correct' ? 'border-2 border-acid bg-acid/5'
                  : state === 'wrong'   ? 'border-2 border-danger bg-danger/5'
                  : 'border border-white/10 bg-surface-dark/40 hover:bg-surface-dark/80 glow-hover'
                }`}
              >
                <div className={`w-16 border-r flex items-center justify-center transition-colors ${
                  state === 'selected' ? 'border-primary/30 bg-primary/10' : 'border-white/10 group-hover:bg-primary/5'
                }`}>
                  <span className={`font-mono text-2xl ${state === 'selected' ? 'text-primary' : 'text-white/40 group-hover:text-primary/60'}`}>
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                </div>
                <div className="p-8">
                  <p className={`text-xl font-medium transition-colors ${
                    state === 'selected' ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {ans.text}
                  </p>
                  {state === 'selected' && (
                    <span className="text-[10px] font-mono text-primary/40 uppercase mt-4 block tracking-widest">Parameter Selected</span>
                  )}
                </div>
                {state === 'selected' && (
                  <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-16 flex items-center gap-8 h-20">
          {selected && (
            <button 
              onClick={handleNext}
              className="px-12 py-5 bg-primary text-background-dark font-black uppercase tracking-[0.2em] rounded-lg hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all animate-in fade-in zoom-in duration-300"
            >
              {isLast ? 'See Results' : 'Next Question'}
            </button>
          )}
        </div>
      </main>

      {/* Footer Data */}
      <footer className="h-12 border-t border-white/5 bg-background-dark/80 backdrop-blur-md flex items-center justify-between px-8 text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em]">
        <div className="flex gap-6">
          <span>System: Neural_V4.0.2</span>
          <span>Signal: High_Fidelity</span>
          <span>User_ID: TEST_SUBJECT_882</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-primary/40"></div>
            <div className="w-1 h-3 bg-primary/40"></div>
            <div className="w-1 h-3 bg-primary/40"></div>
            <div className="w-1 h-3 bg-primary/10"></div>
            <div className="w-1 h-3 bg-primary/10"></div>
          </div>
          <span>Sync Latency: 12ms</span>
        </div>
      </footer>

      {/* Decorative Circles */}
      <div className="fixed bottom-20 right-8 pointer-events-none opacity-20">
        <div className="w-32 h-32 border border-primary/10 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
          <div className="w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
            <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPlayerPage;
