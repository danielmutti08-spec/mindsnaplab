
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Page } from '../types';
import { quizzes } from '../data/quizzes';

interface Props { navigate: (p: Page) => void; }
type Phase = 'intro' | 'showing' | 'input' | 'correct' | 'wrong' | 'result';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';

export function SequenceGamePage({ navigate }: Props) {
  const [level, setLevel]       = useState(1);
  const [phase, setPhase]       = useState<Phase>('intro');
  const [sequence, setSequence] = useState<string[]>([]);
  const [showing, setShowing]   = useState<number>(-1); // indice del char mostrato
  const [userSeq, setUserSeq]   = useState<string[]>([]);
  const [score, setScore]       = useState(0);
  const [lives, setLives]       = useState(3);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const quiz = quizzes.find(q => q.id === 'sequence-snap')!;
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const seqLength = level + 2; // livello 1 = 3 chars, livello 5 = 7 chars

  const generateSequence = useCallback(() => {
    return Array.from({ length: seqLength }, () =>
      CHARS[Math.floor(Math.random() * CHARS.length)]
    );
  }, [seqLength]);

  const showSequence = useCallback((seq: string[]) => {
    setPhase('showing');
    setShowing(-1);
    let idx = 0;
    // Mostra ogni char per 600ms, con 200ms di buio tra l'uno e l'altro
    intervalRef.current = setInterval(() => {
      if (idx >= seq.length) {
        clearInterval(intervalRef.current);
        setShowing(-1);
        timeoutRef.current = setTimeout(() => setPhase('input'), 400);
        return;
      }
      setShowing(idx);
      idx++;
    }, 800);
  }, []);

  const startRound = useCallback(() => {
    const seq = generateSequence();
    setSequence(seq);
    setUserSeq([]);
    showSequence(seq);
  }, [generateSequence, showSequence]);

  const handleInput = useCallback((char: string) => {
    if (phase !== 'input') return;
    const newSeq = [...userSeq, char];
    const pos = newSeq.length - 1;

    if (char !== sequence[pos]) {
      // Sbagliato
      const newLives = lives - 1;
      setLives(newLives);
      setPhase('wrong');
      timeoutRef.current = setTimeout(() => {
        if (newLives <= 0) { setPhase('result'); return; }
        startRound();
      }, 1200);
      return;
    }

    setUserSeq(newSeq);
    if (newSeq.length === sequence.length) {
      // Completo e corretto
      setScore(s => s + level * 15);
      setPhase('correct');
      timeoutRef.current = setTimeout(() => {
        setLevel(l => l + 1);
        startRound();
      }, 1000);
    }
  }, [phase, userSeq, sequence, lives, level, startRound]);

  useEffect(() => () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
  }, []);

  // Tastiera: A-Z e 0-9
  const keyboardRows = [
    'ABCDEFGHIJ'.split(''),
    'KLMNPQRSTU'.split(''),
    'VWXYZ01234'.split(''),
    '56789'.split(''),
  ];

  return (
    <div className="min-h-screen bg-[#080B0F] text-white font-display flex flex-col items-center justify-center relative overflow-hidden">
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />
      <div className="grid-overlay fixed inset-0 pointer-events-none z-40" />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 border-b border-primary/10 flex items-center justify-between px-8 bg-[#080B0F]/80 backdrop-blur-md z-[60]">
        <button onClick={() => navigate({ name: 'quiz-list' })}
          className="flex items-center gap-2 text-primary/60 hover:text-primary font-mono text-xs uppercase tracking-widest transition-colors">
          <span className="material-icons text-sm">arrow_back</span> Back
        </button>
        <span className="font-mono text-xs text-primary/40 uppercase tracking-widest">Sequence Snap</span>
        <div className="flex gap-8 font-mono text-xs">
          <span className="text-primary/60">LVL <span className="text-primary">{level}</span></span>
          <span className="text-primary/60">PTS <span className="text-primary">{score}</span></span>
          <span className="flex tracking-tighter">
            {'◆'.repeat(lives)}{'◇'.repeat(Math.max(0, 3 - lives))}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
      {phase === 'intro' && (
        <div className="text-center max-w-md">
          <span className="material-icons text-8xl text-primary mb-8 mx-auto animate-bounce select-none">
            {quiz.icon}
          </span>
          <span className="font-mono text-primary text-xs uppercase tracking-[0.3em] block mb-4">Working Memory // Protocol</span>
          <h1 className="font-syne text-5xl font-extrabold uppercase mb-6">Sequence<br/>Snap</h1>
          <p className="text-primary/60 font-mono text-sm leading-relaxed mb-12">
            A sequence of characters will flash one at a time.<br/>
            Reproduce them in the correct order.<br/>
            3 lives. How far can you go?
          </p>
          <button onClick={startRound}
            className="px-12 py-4 bg-primary text-[#080B0F] font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm">
            START PROTOCOL →
          </button>
        </div>
      )}

      {(phase === 'showing' || phase === 'input' || phase === 'correct' || phase === 'wrong') && (
        <div className="flex flex-col items-center gap-10 w-full max-w-lg px-8">

          {/* Status */}
          <div className="font-mono text-xs uppercase tracking-[0.3em] h-6 text-center">
            {phase === 'showing' && <span className="text-primary animate-pulse">Memorize the sequence...</span>}
            {phase === 'input'   && <span className="text-primary/60">Reproduce {sequence.length} characters</span>}
            {phase === 'correct' && <span className="text-[#39FF14]">✓ Perfect sequence — advancing...</span>}
            {phase === 'wrong'   && <span className="text-danger">✗ Wrong character — {lives} lives left</span>}
          </div>

          {/* Display centrale — mostra il char corrente o dots */}
          <div className="w-40 h-40 border border-primary/30 flex items-center justify-center relative bg-surface-dark/40 rounded-sm">
            {phase === 'showing' && showing >= 0 ? (
              <span className="font-syne text-8xl font-extrabold text-primary"
                style={{ textShadow: '0 0 30px rgba(0,229,255,0.8)' }}>
                {sequence[showing]}
              </span>
            ) : (
              <span className="font-mono text-primary/20 text-2xl uppercase tracking-widest">
                {phase === 'input' ? 'INPUT' : '...'}
              </span>
            )}
            {/* Corner decorators */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/60" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/60" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/60" />
          </div>

          {/* Progress dots */}
          <div className="flex gap-2">
            {sequence.map((_, i) => (
              <div key={i} className={`w-2 h-2 transition-all rounded-full ${
                phase === 'showing' && i <= showing ? 'bg-primary'
                : i < userSeq.length ? 'bg-primary'
                : 'bg-primary/20'
              }`} />
            ))}
          </div>

          {/* Tastiera */}
          {phase === 'input' && (
            <div className="flex flex-col items-center gap-2 w-full overflow-x-auto no-scrollbar">
              {keyboardRows.map((row, ri) => (
                <div key={ri} className="flex gap-2">
                  {row.map(char => (
                    <button
                      key={char}
                      onClick={() => handleInput(char)}
                      className="w-10 h-10 md:w-12 md:h-12 border border-primary/30 font-mono font-bold text-sm
                        hover:border-primary hover:bg-primary/10 hover:text-primary
                        transition-all duration-150 active:scale-95 active:bg-primary/20 rounded-sm"
                    >
                      {char}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {phase === 'result' && (
        <div className="text-center max-w-md">
          <span className="font-mono text-danger text-xs uppercase tracking-[0.3em] block mb-4">Protocol Failed — Out of Lives</span>
          <h1 className="font-syne text-6xl font-extrabold uppercase mb-2">Level {level}</h1>
          <p className="font-mono text-primary text-3xl mb-2">{score} pts</p>
          <p className="text-primary/40 font-mono text-sm mb-12">
            Best sequence length: {sequence.length} characters
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setLevel(1); setScore(0); setLives(3); startRound(); }}
              className="px-8 py-4 bg-primary text-[#080B0F] font-bold uppercase tracking-widest rounded-sm">
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
