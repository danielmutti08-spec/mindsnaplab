
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getQuizById } from '../data/quizzes';
import { calculateIQFromScore } from '../utils/iqScoring';
import { Page } from '../types';
import { sanitizeHTML } from '../utils/security';

interface Props { navigate: (p: Page) => void; }

export function IQTestPage({ navigate }: Props) {
  const TOTAL_TIME = 40 * 60; // 40 minuti
  const quiz = getQuizById('iq-test-professional');
  
  const [index, setIndex]       = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers]   = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [phase, setPhase]       = useState<'intro' | 'test' | 'result'>('intro');
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const finishTest = useCallback(() => {
    clearInterval(timerRef.current);
    setPhase('result');
  }, []);

  // Timer
  useEffect(() => {
    if (phase !== 'test') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { finishTest(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase, finishTest]);

  if (!quiz) return <div className="text-primary font-mono p-8">FATAL ERROR: TEST_NOT_FOUND</div>;

  const question = quiz.questions[index];
  const progress = Math.round(((index + 1) / 48) * 100);

  const startTest = () => { setPhase('test'); setTimeLeft(TOTAL_TIME); };

  const selectAndNext = (answerId: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: answerId }));
    if (index < 47) {
      setIndex(i => i + 1);
      setSelected(null);
    } else {
      finishTest();
    }
  };

  const skipQuestion = () => {
    if (index < 47) { setIndex(i => i + 1); setSelected(null); }
    else { finishTest(); }
  };

  const calculateResult = () => {
    const correct = quiz.questions.filter(q =>
      q.answers.find(a => a.id === answers[q.id])?.correct
    ).length;

    return calculateIQFromScore(correct);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2,'0')}`;
  };

  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-[#080B0F] text-white font-display flex items-center justify-center relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50" />
        <div className="grid-overlay fixed inset-0 pointer-events-none z-40" />
        
        <div className="text-center max-w-2xl px-8 relative z-10">
          {quiz.icon && (
            <span className="material-icons text-8xl text-primary mb-8 mx-auto animate-bounce select-none">
              {quiz.icon}
            </span>
          )}
          <span className="font-mono text-primary text-xs uppercase tracking-[0.3em] block mb-4">
            Cognitive Assessment // Mensa-Style
          </span>
          <h1 className="font-syne text-6xl font-extrabold uppercase mb-6">
            Professional IQ<br/>Assessment
          </h1>
          <p className="text-primary/60 font-mono text-sm leading-relaxed mb-12">
            48 questions covering 8 cognitive domains.<br/>
            40 minutes total.<br/>
            Matrices, Number Series, Verbal Analogies, Logic.<br/>
            This test measures <strong className="text-primary">general fluid intelligence (g)</strong>.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 p-6 rounded mb-12 text-left">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Instructions</h3>
            <ul className="text-sm text-primary/70 space-y-2 font-mono leading-relaxed">
              <li>→ You will face 8 different types of cognitive challenges</li>
              <li>→ Some are visual, some are numerical or verbal</li>
              <li>→ No penalty for wrong answers — guess if unsure</li>
              <li>→ Difficulty increases progressively</li>
              <li>→ Timer is strict — test ends at 0:00</li>
            </ul>
          </div>

          <button onClick={startTest}
            className="px-16 py-5 bg-primary text-[#080B0F] font-bold uppercase tracking-widest text-lg hover:bg-white transition-all rounded-sm">
            Begin Assessment →
          </button>
          <p className="mt-6 font-mono text-[10px] text-primary/30">
            PROTOCOL ID: IQ-MTX-V1.0 // CERTIFIED CULTURE-FAIR
          </p>
        </div>
      </div>
    );
  }

  if (phase === 'test') {
    return (
      <div className="min-h-screen bg-[#0f2123] text-white font-display relative overflow-hidden">
        <div className="scanlines fixed inset-0 pointer-events-none z-50" />
        <div className="grid-overlay fixed inset-0 pointer-events-none z-40" />

        {/* Header */}
        <div className="h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-[#0f2123]/80 backdrop-blur-md relative z-[60]">
          <div className="flex items-center gap-3">
            {quiz.icon && (
              <span className="material-icons text-2xl select-none text-primary">
                {quiz.icon}
              </span>
            )}
            <span className="font-mono text-xs text-primary/60 uppercase">Professional IQ Assessment</span>
          </div>
          <div className="flex gap-12 font-mono text-xs">
            <span className="text-primary/60">
              QUESTION <span className="text-primary">{index + 1}</span> / 48
            </span>
            <span className={timeLeft < 60 ? 'text-danger animate-pulse' : 'text-primary'}>
              ⏱ {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-[3px] bg-primary/10 relative z-[60]">
          <div className="h-full bg-gradient-to-r from-primary to-[#39FF14] transition-all duration-300"
            style={{ width: `${progress}%` }} />
        </div>

        {/* Main */}
        <main className="flex flex-col items-center justify-center py-12 px-8 min-h-[calc(100vh-64px-3px)] relative z-10">
          
          {/* Question Content */}
          <div className="mb-12 p-8 border border-primary/20 bg-background-dark/40 rounded shadow-2xl w-full max-w-4xl text-center">
            {question.text && <p className="text-primary/60 font-mono text-sm uppercase mb-4">{question.text}</p>}
            {question.matrixSVG ? (
              <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: sanitizeHTML(question.matrixSVG) }} />
            ) : (
              <div className="py-12">
                <h2 className="text-3xl md:text-4xl font-syne uppercase text-white tracking-tight">{question.question}</h2>
              </div>
            )}
          </div>

          {/* Answers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {question.answers.map((ans, i) => (
              <button
                key={ans.id}
                onClick={() => selectAndNext(ans.id)}
                className="relative p-6 border border-primary/20 bg-surface-dark/40 hover:border-primary hover:bg-primary/10 transition-all rounded cursor-pointer group flex items-center justify-center min-h-[120px]"
              >
                <div className="absolute top-2 left-2 w-6 h-6 border border-primary/30 rounded-full flex items-center justify-center text-[10px] font-mono text-primary/60 group-hover:border-primary group-hover:text-primary">
                  {['A','B','C','D','E','F'][i]}
                </div>
                {ans.svg ? (
                  <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(ans.svg) }} />
                ) : (
                  <span className="text-lg font-bold group-hover:text-primary transition-colors">{ans.text}</span>
                )}
              </button>
            ))}
          </div>

          {/* Skip */}
          <button onClick={skipQuestion}
            className="mt-12 px-8 py-3 border border-primary/20 text-primary/40 hover:text-primary hover:border-primary font-mono text-xs uppercase tracking-widest transition-all">
            Skip Question
          </button>
        </main>
      </div>
    );
  }

  // RESULT
  const result = calculateResult();
  
  return (
    <div className="min-h-screen bg-[#080B0F] text-white font-display flex items-center justify-center p-8 relative overflow-hidden">
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-40" />
      
      <div className="text-center max-w-2xl relative z-10">
        <div className="mb-8 inline-block p-12 border-2 border-primary/30 rounded-full bg-primary/5 relative"
          style={{ boxShadow: '0 0 50px rgba(0,229,255,0.2)' }}>
          <span className="font-syne text-8xl font-extrabold text-primary leading-none">{result.iq}</span>
          <div className="absolute -top-2 -right-2 px-3 py-1 bg-primary text-background-dark text-[10px] font-bold uppercase tracking-widest rounded-sm">
            IQ SCORE
          </div>
        </div>
        
        <h1 className="font-syne text-5xl font-extrabold uppercase mb-4 italic tracking-tighter">Cognitive Profile Decoded</h1>
        <p className="font-mono text-primary/60 text-lg mb-2 uppercase tracking-widest">
          {Object.keys(answers).length} / 48 answered · {result.percentile}th percentile
        </p>
        <p className="font-mono text-primary/40 text-sm mb-12 uppercase">
          Rarity: {result.rarity} people
        </p>

        {/* Bell curve visualization */}
        <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mb-12">
          <div className="flex justify-between items-center mb-6">
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Population Distribution</span>
            <span className="font-mono text-xs text-primary/60">You: {result.iq}</span>
          </div>
          
          {/* Curva */}
          <div className="relative h-32 flex items-end justify-center gap-1">
            {[5,12,20,30,40,45,40,30,20,12,5].map((h, i) => {
              const iqVal = 70 + (i * 7.5);
              const isUserBar = result.iq >= iqVal && result.iq < iqVal + 7.5;
              return (
                <div key={i} 
                  className={`flex-1 transition-all duration-1000 ${isUserBar ? 'bg-primary shadow-[0_0_15px_#00e5ff]' : 'bg-primary/10'}`}
                  style={{ height: `${h}%` }} 
                />
              );
            })}
          </div>
          
          <div className="flex justify-between font-mono text-[10px] text-primary/40 mt-4 border-t border-primary/10 pt-2">
            <span>70</span><span>85</span><span>100</span><span>115</span><span>130</span><span>145</span>
          </div>
        </div>

        {/* Interpretation */}
        <div className="bg-white/[0.02] border-l-2 border-primary p-6 mb-12 text-left">
          <p className="text-primary/70 font-mono text-sm leading-relaxed">
            {result.iq >= 130 ? '🔥 Exceptional intelligence — top 2% of population. Strong pattern recognition and abstract reasoning. Your neural architecture demonstrates superior fluid intelligence.'
            : result.iq >= 115 ? '⚡ Above average intelligence — better pattern recognition than 84% of people. You possess robust cognitive flexibility and analytical depth.'
            : result.iq >= 85  ? '◆ Average intelligence — within normal range (68% of population). Your cognitive processing is consistent with standard baseline metrics.'
            : '◇ Below average — consider retaking when well-rested. Fluid intelligence can be improved with practice and optimal physiological conditions.'}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button onClick={() => navigate({ name: 'home' })}
            className="px-12 py-4 bg-primary text-[#080B0F] font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm">
            Return to Home
          </button>
          <button onClick={() => { setPhase('intro'); setIndex(0); setAnswers({}); }}
            className="px-10 py-4 border border-primary/40 text-primary hover:border-primary transition-all uppercase tracking-widest rounded-sm">
            Retake Test
          </button>
        </div>

        <p className="mt-12 font-mono text-[10px] text-primary/30 leading-relaxed max-w-lg mx-auto uppercase tracking-widest">
          ⚠ This is an informal estimate based on pattern recognition only (fluid intelligence).<br/>
          For official IQ testing, consult a licensed psychologist.<br/>
          Test-retest reliability: ±3-5 points.
        </p>
      </div>
    </div>
  );
}
