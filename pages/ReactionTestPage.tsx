
import React from 'react';
import { Page } from '../types';
import { useReactionTest } from '../hooks/useReactionTest';
import { quizzes } from '../data/quizzes';

interface Props {
  navigate: (p: Page) => void;
}

const ReactionTestPage: React.FC<Props> = ({ navigate }) => {
  const { phase, lastMs, round, totalRounds, startRound, handleClick, nextRound, getFinalStats, reset } = useReactionTest(5);
  const quiz = quizzes.find(q => q.id === 'rapid-response-iq')!;

  const stats = getFinalStats();

  return (
    <main 
      className={`relative z-[90] h-screen w-screen flex flex-col items-center justify-center transition-colors duration-75 cursor-crosshair select-none ${
        phase === 'ready' ? 'acid-overlay' : 'bg-background-dark'
      }`}
      onClick={phase === 'idle' ? startRound : handleClick}
    >
      {/* Background Dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-white/20 rounded">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(round / totalRounds) * 100}%` }}></div>
          </div>
          <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${phase === 'ready' ? 'text-black' : 'text-primary'}`}>
            Phase {String(round).padStart(2, '0')} / {String(totalRounds).padStart(2, '0')}
          </span>
        </div>
        <div className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase ${phase === 'ready' ? 'text-black' : 'text-primary/60'}`}>
          Subject: MS-4921
        </div>
      </div>

      {/* Main Content Area */}
      {phase === 'idle' && (
        <div className="text-center group">
          <span className="material-icons text-9xl text-primary mb-12 mx-auto animate-pulse select-none">
            {quiz.icon}
          </span>
          <h1 className="font-syne text-6xl md:text-8xl font-extrabold text-primary mb-8 animate-pulse italic">READY?</h1>
          <p className="font-mono text-xs text-primary/40 tracking-[0.4em] uppercase">Tap anywhere to begin diagnostic</p>
        </div>
      )}

      {phase === 'waiting' && (
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-primary/20 border-t-primary rounded-full animate-spin mb-8 mx-auto"></div>
          <p className="font-syne text-3xl md:text-5xl font-bold text-primary italic uppercase">Wait for Green...</p>
        </div>
      )}

      {phase === 'ready' && (
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/40 blur-[60px] rounded-full animate-pulse-fast"></div>
          <h1 className="relative font-syne text-[96px] md:text-[140px] leading-none font-extrabold text-black tracking-tighter animate-pulse-fast">
            CLICK!
          </h1>
        </div>
      )}

      {phase === 'clicked' && (
        <div className="text-center">
          <h1 className="font-syne text-[96px] md:text-[140px] text-primary leading-none font-extrabold tracking-tighter mb-8">
            {lastMs}ms
          </h1>
          <button 
            onClick={(e) => { e.stopPropagation(); nextRound(); }}
            className="px-12 py-4 bg-primary text-background-dark font-black uppercase tracking-widest rounded-sm hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Next Matrix
          </button>
        </div>
      )}

      {phase === 'result' && stats && (
        <div className="text-center max-w-xl p-12 bg-surface-dark/40 border border-primary/20 backdrop-blur-xl rounded-lg">
          <span className="font-mono text-xs text-primary/60 uppercase tracking-[0.4em] mb-4 block">Reflex Threshold Decoded</span>
          <h1 className="font-syne text-6xl font-extrabold text-white italic mb-8 uppercase">Matrix Result</h1>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <span className="text-[10px] font-mono text-primary/40 uppercase block mb-1">Average Response</span>
              <span className="text-4xl font-syne text-primary">{stats.avg}ms</span>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-primary/40 uppercase block mb-1">Peak Reflex</span>
              <span className="text-4xl font-syne text-acid">{stats.best}ms</span>
            </div>
          </div>
          <div className="space-y-4 mb-12">
            <div className="flex justify-between items-end">
              <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">Efficiency Percentile</span>
              <span className="text-primary font-mono text-lg">{stats.pct}%</span>
            </div>
            <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary shadow-[0_0_10px_#00e5ff]" style={{ width: `${stats.pct}%` }}></div>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={(e) => { e.stopPropagation(); reset(); }}
              className="flex-1 py-4 border border-primary/30 text-primary font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-primary/5"
            >
              Retake Test
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigate({ name: 'home' }); }}
              className="flex-1 py-4 bg-primary text-background-dark font-bold uppercase text-xs tracking-widest rounded-sm hover:brightness-110"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer Status */}
      {(phase !== 'result') && (
        <footer className="absolute bottom-12 w-full flex justify-center">
          <div className={`px-4 py-2 backdrop-blur-sm border rounded flex items-center space-x-3 ${phase === 'ready' ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}>
            <div className={`w-2 h-2 rounded-full animate-ping ${phase === 'ready' ? 'bg-black' : 'bg-primary'}`}></div>
            <span className={`text-[11px] font-mono font-medium tracking-[0.3em] uppercase ${phase === 'ready' ? 'text-black' : 'text-primary'}`}>
              Latency Measurement Active
            </span>
          </div>
        </footer>
      )}

      {/* Side Decorators */}
      <div className={`absolute top-1/2 left-10 -translate-y-1/2 flex flex-col space-y-2 opacity-30 ${phase === 'ready' ? 'text-black' : 'text-primary'}`}>
        <div className={`w-1 h-8 ${phase === 'ready' ? 'bg-black' : 'bg-primary'}`}></div>
        <div className={`w-1 h-2 ${phase === 'ready' ? 'bg-black' : 'bg-white/20'}`}></div>
        <div className={`w-1 h-2 ${phase === 'ready' ? 'bg-black' : 'bg-white/20'}`}></div>
      </div>
      <div className={`absolute top-1/2 right-10 -translate-y-1/2 flex flex-col space-y-2 opacity-30 ${phase === 'ready' ? 'text-black' : 'text-primary'}`}>
        <div className={`w-1 h-2 ${phase === 'ready' ? 'bg-black' : 'bg-white/20'}`}></div>
        <div className={`w-1 h-2 ${phase === 'ready' ? 'bg-black' : 'bg-white/20'}`}></div>
        <div className={`w-1 h-8 ${phase === 'ready' ? 'bg-black' : 'bg-primary'}`}></div>
      </div>
    </main>
  );
};

export default ReactionTestPage;
