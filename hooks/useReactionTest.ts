
import { useState, useRef, useCallback } from 'react';

export type ReactionPhase = 'idle' | 'waiting' | 'ready' | 'clicked' | 'result';

export function useReactionTest(totalRounds = 5) {
  const [phase, setPhase]   = useState<ReactionPhase>('idle');
  const [times, setTimes]   = useState<number[]>([]);
  const [lastMs, setLastMs] = useState<number | null>(null);
  const [round, setRound]   = useState(0);
  const t0     = useRef<number>(0);
  const timeout = useRef<any>(null);

  const startRound = useCallback(() => {
    setPhase('waiting');
    setLastMs(null);
    const delay = 2000 + Math.random() * 4000;
    timeout.current = setTimeout(() => {
      t0.current = Date.now();
      setPhase('ready');
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (phase === 'waiting') {
      clearTimeout(timeout.current);
      setPhase('idle'); // Too early — reset
      return;
    }
    if (phase === 'ready') {
      const ms = Date.now() - t0.current;
      setLastMs(ms);
      setTimes(prev => [...prev, ms]);
      setRound(r => r + 1);
      setPhase('clicked');
    }
  }, [phase]);

  const nextRound = useCallback(() => {
    if (round >= totalRounds) {
      setPhase('result');
    } else {
      startRound();
    }
  }, [round, totalRounds, startRound]);

  const reset = useCallback(() => {
    setPhase('idle');
    setTimes([]);
    setLastMs(null);
    setRound(0);
  }, []);

  const getFinalStats = useCallback(() => {
    if (!times.length) return null;
    const avg  = Math.round(times.reduce((a,b) => a+b, 0) / times.length);
    const best = Math.min(...times);
    // Percentile approssimativo (media umana ~250ms)
    const pct  = Math.min(99, Math.max(1, Math.round(100 - (avg / 5))));
    return { times, avg, best, pct };
  }, [times]);

  return { phase, lastMs, round, totalRounds, startRound, handleClick, nextRound, getFinalStats, reset };
}
