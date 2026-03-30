
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Page } from '../types';
import { quizzes } from '../data/quizzes';
import Navbar from '../components/Navbar';
import { incrementQuizCompletions } from '../utils/stats';

interface Props { navigate: (p: Page) => void; }

type Phase = 'intro' | 'showing' | 'input' | 'correct' | 'wrong' | 'result';

export function MemoryGamePage({ navigate }: Props) {
  const GRID           = 4; // 4x4
  const TOTAL_CELLS    = GRID * GRID;
  const [level, setLevel]         = useState(1);
  const [phase, setPhase]         = useState<Phase>('intro');
  const [pattern, setPattern]     = useState<number[]>([]);   // indici celle illuminate
  const [userInput, setUserInput] = useState<number[]>([]);
  const [score, setScore]         = useState(0);
  const [mistakes, setMistakes]   = useState(0);
  const MAX_MISTAKES = 3;
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const quiz = quizzes.find(q => q.id === 'memory-matrix')!;

  // Genera pattern casuale per il livello corrente (level + 2 celle)
  const generatePattern = useCallback(() => {
    const count = Math.min(level + 2, TOTAL_CELLS - 2);
    const cells = Array.from({ length: TOTAL_CELLS }, (_, i) => i);
    const shuffled = cells.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [level, TOTAL_CELLS]);

  const startRound = useCallback(() => {
    const p = generatePattern();
    setPattern(p);
    setUserInput([]);
    setPhase('showing');
    // Mostra pattern per (1.5s + level * 0.2s), poi nasconde
    const showTime = 1500 + level * 200;
    timeoutRef.current = setTimeout(() => setPhase('input'), showTime);
  }, [generatePattern, level]);

  const handleCellClick = (idx: number) => {
    if (phase !== 'input') return;
    if (userInput.includes(idx)) return;

    const newInput = [...userInput, idx];
    setUserInput(newInput);

    // Controlla se questo click è sbagliato
    if (!pattern.includes(idx)) {
      setMistakes(m => m + 1);
      setPhase('wrong');
      timeoutRef.current = setTimeout(() => {
        if (mistakes + 1 >= MAX_MISTAKES) {
          incrementQuizCompletions('memory-matrix');
          setPhase('result');
        } else {
          startRound(); // riprova stesso livello
        }
      }, 1200);
      return;
    }

    // Se ha selezionato tutte le celle corrette
    if (newInput.filter(i => pattern.includes(i)).length === pattern.length) {
      setScore(s => s + level * 10);
      setPhase('correct');
      timeoutRef.current = setTimeout(() => {
        setLevel(l => l + 1);
        startRound();
      }, 1000);
    }
  };

  // Cleanup timeout
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const cellState = (idx: number): 'hidden' | 'lit' | 'selected' | 'correct' | 'wrong' => {
    if (phase === 'showing' && pattern.includes(idx)) return 'lit';
    if (phase === 'correct' && pattern.includes(idx)) return 'correct';
    if (phase === 'wrong') {
      if (userInput[userInput.length - 1] !== undefined &&
          userInput[userInput.length - 1] === idx) return 'wrong';
      if (userInput.includes(idx) && pattern.includes(idx)) return 'selected';
    }
    if (userInput.includes(idx)) return 'selected';
    return 'hidden';
  };

  return (
    <div className="min-h-screen bg-[#0f2123] text-white font-display flex flex-col items-center justify-center relative">
      <Navbar navigate={navigate} />
      {/* Scanlines */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50 mt-20" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-40" />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-[#0f2123]/80 backdrop-blur-md z-[60]">
        <button onClick={() => navigate({ name: 'quiz-list' })}
          className="flex items-center gap-2 text-primary/60 hover:text-primary font-mono text-xs uppercase tracking-widest transition-colors">
          <span className="material-icons text-sm">arrow_back</span> Back
        </button>
        <span className="font-mono text-xs text-primary/40 uppercase tracking-widest">Memory Matrix</span>
        <div className="flex gap-8 font-mono text-xs">
          <span className="text-primary/60">LEVEL <span className="text-primary">{level}</span></span>
          <span className="text-primary/60">SCORE <span className="text-primary">{score}</span></span>
          <span className="text-danger/60">ERRORS <span className="text-danger">{mistakes}/{MAX_MISTAKES}</span></span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
      {phase === 'intro' && (
        <div className="text-center max-w-md">
          <span className="material-icons text-8xl text-primary mb-8 mx-auto animate-bounce select-none">
            {quiz.icon}
          </span>
          <span className="font-mono text-primary text-xs uppercase tracking-[0.3em] block mb-4">Memory Matrix // Protocol</span>
          <h1 className="font-syne text-5xl font-extrabold uppercase mb-6">Remember<br/>the Grid</h1>
          <p className="text-primary/60 font-mono text-sm leading-relaxed mb-12">
            A pattern of cells will light up briefly.<br/>
            Reproduce the pattern by clicking the correct cells.<br/>
            {MAX_MISTAKES} mistakes and the test ends.
          </p>
          <button onClick={startRound}
            className="px-12 py-4 bg-primary text-[#0f2123] font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm">
            BEGIN SCAN →
          </button>
        </div>
      )}

      {phase !== 'intro' && phase !== 'result' && (
        <div className="flex flex-col items-center gap-8">
          {/* Status label */}
          <div className="font-mono text-xs uppercase tracking-[0.3em] h-6">
            {phase === 'showing' && <span className="text-primary animate-pulse">Memorize the pattern...</span>}
            {phase === 'input'   && <span className="text-primary/60">Select {pattern.length - userInput.length} more cells</span>}
            {phase === 'correct' && <span className="text-[#39FF14]">✓ Correct! Level {level + 1} incoming...</span>}
            {phase === 'wrong'   && <span className="text-danger">✗ Wrong cell — {MAX_MISTAKES - mistakes - 1} chances left</span>}
          </div>

          {/* GRIGLIA 4x4 */}
          <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}>
            {Array.from({ length: TOTAL_CELLS }, (_, idx) => {
              const state = cellState(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleCellClick(idx)}
                  disabled={phase !== 'input'}
                  className={`w-16 h-16 border transition-all duration-150 relative rounded-sm ${
                    state === 'lit'      ? 'bg-primary border-primary shadow-[0_0_20px_rgba(0,229,255,0.6)]'
                    : state === 'selected' ? 'bg-primary/40 border-primary'
                    : state === 'correct'  ? 'bg-[#39FF14]/40 border-[#39FF14]'
                    : state === 'wrong'    ? 'bg-danger/40 border-danger'
                    : 'bg-white/5 border-primary/20 hover:border-primary/50 hover:bg-primary/10'
                  }`}
                />
              );
            })}
          </div>

          {/* Difficulty indicator */}
          <div className="flex gap-1">
            {Array.from({ length: pattern.length }, (_, i) => (
              <div key={i}
                className={`w-2 h-2 rounded-full ${
                  i < userInput.filter(u => pattern.includes(u)).length
                    ? 'bg-primary' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {phase === 'result' && (
        <div className="text-center max-w-md">
          <span className="font-mono text-danger text-xs uppercase tracking-[0.3em] block mb-4">Test Terminated</span>
          <h1 className="font-syne text-6xl font-extrabold uppercase mb-2">Level {level}</h1>
          <p className="font-mono text-primary text-3xl mb-2">{score} pts</p>
          <p className="text-primary/40 font-mono text-sm mb-12">
            You reached level {level} before {MAX_MISTAKES} mistakes
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setLevel(1); setScore(0); setMistakes(0); startRound(); }}
              className="px-8 py-4 bg-primary text-[#0f2123] font-bold uppercase tracking-widest rounded-sm">
              Retake Test
            </button>
            <button onClick={() => navigate({ name: 'home' })}
              className="px-8 py-4 border border-primary/40 text-primary font-mono uppercase tracking-widest hover:border-primary transition-all rounded-sm">
              Return to Home
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
