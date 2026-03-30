
import React, { useEffect, useState, useRef } from 'react';
import { Page, Quiz } from '../types';
import { getQuizById } from '../data/quizzes';
import { useQuiz } from '../hooks/useQuiz';
import Navbar from '../components/Navbar';
import { calcPersonality, calcTrivia, calcPolitical, calcIQ } from '../utils/scoring';
import { logSecurityEvent, checkRateLimit } from '../utils/security';
import { incrementQuizCompletions } from '../utils/stats';

interface Props {
  navigate: (p: Page) => void;
  quizId: string;
}

const QuizPlayerPage: React.FC<Props> = ({ navigate, quizId }) => {
  const quiz = getQuizById(quizId);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    if (windowWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [index, windowWidth]);

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
      const resultData = calcIQ(quiz, session);
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

  const renderAnswerContent = (ans: any) => {
    if (ans.svg) {
      return <div dangerouslySetInnerHTML={{ __html: ans.svg }} />;
    }

    const text = ans.text?.toLowerCase() || '';
    const shape = ans.shape || (
      text.includes('circle') ? 'circle' :
      text.includes('square') ? 'square' :
      text.includes('triangle') ? 'triangle' :
      text.includes('diamond') ? 'diamond' :
      null
    );
    
    if (shape === 'circle') {
      return (
        <div className="flex flex-col items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="currentColor"/>
          </svg>
          <span className="text-[10px] uppercase tracking-widest opacity-40">{ans.text}</span>
        </div>
      );
    }
    if (shape === 'square') {
      return (
        <div className="flex flex-col items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="2" y="2" width="36" height="36" fill="currentColor"/>
          </svg>
          <span className="text-[10px] uppercase tracking-widest opacity-40">{ans.text}</span>
        </div>
      );
    }
    if (shape === 'triangle') {
      return (
        <div className="flex flex-col items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,2 38,38 2,38" fill="currentColor"/>
          </svg>
          <span className="text-[10px] uppercase tracking-widest opacity-40">{ans.text}</span>
        </div>
      );
    }
    if (shape === 'diamond') {
      return (
        <div className="flex flex-col items-center gap-2">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <polygon points="20,2 38,20 20,38 2,20" fill="currentColor"/>
          </svg>
          <span className="text-[10px] uppercase tracking-widest opacity-40">{ans.text}</span>
        </div>
      );
    }

    return ans.text;
  };

  return (
    <div className="relative z-[70] h-screen flex flex-col text-white font-display">
      <Navbar navigate={navigate} />
      {/* Top Bar */}
      {windowWidth < 768 ? (
        <header className="border-b border-primary/10 bg-background-dark/80 backdrop-blur-md mt-20 p-4 flex flex-col gap-4">
          <div className="flex justify-start">
            <button 
              onClick={() => navigate({ name: 'home' })}
              className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
            >
              <span className="material-icons text-lg">arrow_back</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Back to Home</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="uppercase tracking-widest text-[10px] font-medium text-primary/60">Neural Analysis: {quiz.title}</h1>
          </div>
          <div className="flex justify-end items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[8px] uppercase tracking-tighter text-primary/40 leading-none">Progress</span>
              <span className="text-primary font-mono text-sm leading-none">{qLabel}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] uppercase tracking-tighter text-danger/40 leading-none">Time Remaining</span>
              <span className="text-danger font-mono text-sm leading-none tracking-wider">{formatTime(time)}</span>
            </div>
          </div>
        </header>
      ) : (
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
      )}

      {/* Progress Bar */}
      <div className="w-full h-[3px] bg-primary/10">
        <div className="h-full progress-gradient transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Main Interface */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16" style={{ marginBottom: '1rem' }}>
          <span className="text-xs font-mono text-primary/40 uppercase tracking-[0.4em] mb-4 block animate-pulse">Analyzing response patterns...</span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight uppercase">
            {question.text}
          </h2>
          
          {/* Numerical Sequence / Stimulus */}
          {question.question && (
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="font-mono text-2xl md:text-3xl text-primary tracking-[0.2em] break-all" style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                {question.question}
              </p>
            </div>
          )}

          {/* Matrix SVG (Visual IQ) */}
          {question.matrixSVG && (
            <div className="mt-8 flex justify-center" dangerouslySetInnerHTML={{ __html: question.matrixSVG }} />
          )}

          {/* Reading Passage */}
          {question.readingPassage && (
            <div className="mt-8 p-6 bg-surface-dark/40 border border-white/10 rounded-lg max-w-3xl mx-auto text-left">
              <p className="font-mono text-sm text-white/70 leading-relaxed whitespace-pre-wrap italic">
                {question.readingPassage}
              </p>
            </div>
          )}

          {windowWidth < 375 && (
            <div className="mt-8 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-tighter text-danger/40 leading-none">Time Remaining</span>
              <span className="text-danger font-mono text-xl leading-none tracking-wider">{formatTime(time)}</span>
            </div>
          )}
        </div>

        {/* Answer Grid */}
        <div ref={optionsRef} className="w-full flex flex-col items-center">
          {question.type === 'likert' ? (
            <div className="flex flex-col items-center w-full max-w-4xl">
              {quiz.type === 'political' ? (
                <div 
                  style={{ 
                    display: 'flex', 
                    flexDirection: windowWidth < 768 ? 'column' : 'row', 
                    gap: '8px',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  {[
                    { label: 'STRONGLY DISAGREE', value: -2 },
                    { label: 'DISAGREE', value: -1 },
                    { label: 'NEUTRAL', value: 0 },
                    { label: 'AGREE', value: 1 },
                    { label: 'STRONGLY AGREE', value: 2 },
                  ].map((opt) => {
                    const ans = question.answers.find(a => (a as any).value === opt.value);
                    const ansId = ans ? ans.id : (opt.value === 0 ? 'neutral' : `val_${opt.value}`);
                    const isSelected = selected === ansId;
                    
                    return (
                      <button
                        key={opt.label}
                        onClick={() => select(ansId)}
                        className={`flex-1 px-4 py-4 text-xs font-bold uppercase tracking-widest border transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(0,229,255,0.2)]' 
                            : 'border-white/10 bg-surface-dark/40 text-white/60 hover:border-primary/40 hover:text-white'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <>
                  <div className="flex justify-between w-full mb-8 px-4">
                    {question.answers.map((ans) => {
                      const isSelected = selected === ans.id;
                      return (
                        <button
                          key={ans.id}
                          onClick={() => select(ans.id)}
                          className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-2 transition-all flex items-center justify-center ${
                            isSelected 
                              ? 'border-primary bg-primary/20 shadow-[0_0_30px_rgba(0,229,255,0.3)] scale-110' 
                              : 'border-white/10 bg-surface-dark/40 hover:border-primary/40'
                          }`}
                        >
                          <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full transition-all ${isSelected ? 'bg-primary' : 'bg-white/10'}`} />
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between w-full px-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-primary/40">
                    <span>Strongly Disagree</span>
                    <span>Strongly Agree</span>
                  </div>
                </>
              )}
            </div>
          ) : (
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
                        {['A', 'B', 'C', 'D', 'E', 'F'][i]}
                      </span>
                    </div>
                    <div className="p-8">
                      <div className={`text-xl font-medium transition-colors ${
                        state === 'selected' ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {renderAnswerContent(ans)}
                      </div>
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
          )}
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
