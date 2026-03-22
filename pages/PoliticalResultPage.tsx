
import React from 'react';
import { Page } from '../types';
import { getQuizCompletions, formatParticipants } from '../utils/stats';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

interface Props {
  navigate: (p: Page) => void;
  economic: number;
  social: number;
  label: string;
  description: string;
}

const PoliticalResultPage: React.FC<Props> = ({ navigate, economic, social, label, description }) => {
  const completions = getQuizCompletions('political-compass');
  const statsText = completions > 0 
    ? `Based on ${completions} local completions.`
    : "Be the first to record this result locally.";

  // Coordinate Calculation:
  // Container is 500x500px as per HTML. Center is 250,250.
  // Each unit (-10 to 10) is 25px.
  // X = 250 + (economic * 25)
  // Y = 250 - (social * 25)  // Y axis in HTML goes down, social + means up
  const dotX = 250 + (economic * 25);
  const dotY = 250 - (social * 25);

  return (
    <div className="bg-background-dark text-slate-200 min-h-screen relative selection:bg-primary/30 font-display">
      <Navbar navigate={navigate} />

      <main className="max-w-7xl mx-auto px-6 py-12 relative z-[70] mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Compass Graph */}
          <div className="relative group">
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-primary/60 tracking-[0.2em] uppercase">Visual Diagnostic Matrix // Ver. 4.2.0</div>
            <div className="relative w-[500px] h-[500px] bg-slate-900/40 border border-primary/20 overflow-hidden shadow-2xl shadow-primary/5">
              {/* Quadrant Backgrounds */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="quadrant-authoritarian-left border-r border-b border-primary/10 flex items-start justify-start p-4">
                  <span className="text-[9px] uppercase tracking-widest text-left-red/40 font-bold">Authoritarian Left</span>
                </div>
                <div className="quadrant-authoritarian-right border-b border-primary/10 flex items-start justify-end p-4">
                  <span className="text-[9px] uppercase tracking-widest text-right-blue/40 font-bold">Authoritarian Right</span>
                </div>
                <div className="quadrant-libertarian-left border-r border-primary/10 flex items-end justify-start p-4">
                  <span className="text-[9px] uppercase tracking-widest text-lib-green/40 font-bold">Libertarian Left</span>
                </div>
                <div className="quadrant-libertarian-right flex items-end justify-end p-4">
                  <span className="text-[9px] uppercase tracking-widest text-yellow-500/30 font-bold">Libertarian Right</span>
                </div>
              </div>
              <div className="absolute inset-0 compass-grid"></div>
              {/* Axes */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/30"></div>
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/30"></div>
              {/* Labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Authoritarian</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Libertarian</div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Left</div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Right</div>

              {/* USER DOT */}
              <div 
                className="absolute w-4 h-4 bg-primary rounded-full user-dot-glow z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2" 
                style={{ left: dotX, top: dotY }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center font-mono text-[10px] text-primary/40 uppercase tracking-widest">
              <span>XY_COORD_LOCK: TRUE</span>
              <span>RENDER_MODE: VECTOR_LAB</span>
              <span>TIMESTAMP: 2024.10.24</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex-1 max-w-md space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-primary"></span>
                <span className="text-xs font-mono tracking-widest text-primary uppercase">Classification Result</span>
              </div>
              <h1 className="text-5xl font-heading text-white leading-none uppercase italic">{label}</h1>
              <div className="mt-4 flex items-center gap-4 text-sm font-mono">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded">Economic: {economic}</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded">Social: {social}</span>
              </div>
            </div>

            <div className="p-6 bg-slate-900/40 border border-primary/10 border-l-2 border-l-primary space-y-4 rounded-lg">
              <p className="text-slate-400 leading-relaxed text-sm">
                {description}
              </p>
              <div className="pt-4 border-t border-primary/10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Libertarian Percentile</span>
                  <span className="text-primary font-mono text-lg leading-none">68%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary user-dot-glow w-[68%]"></div>
                </div>
                <p className="mt-2 text-[10px] text-slate-500 italic">{statsText}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/40 border border-primary/10 rounded-lg">
                <div className="text-[10px] uppercase text-slate-500 mb-1">Social Orientation</div>
                <div className="text-white font-medium">{social < 0 ? 'Collectivist' : 'Individualist'}</div>
              </div>
              <div className="p-4 bg-slate-900/40 border border-primary/10 rounded-lg">
                <div className="text-[10px] uppercase text-slate-500 mb-1">Economic Mode</div>
                <div className="text-white font-medium">{economic < 0 ? 'Socialist' : 'Market-Driven'}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <button className="w-full bg-primary text-background-dark py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
                <span className="material-symbols-outlined text-sm">download</span>
                Export Lab Report (PDF)
              </button>
              <button 
                onClick={() => navigate({ name: 'home' })}
                className="w-full border border-primary/20 text-primary/80 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-primary/5 transition-all"
              >
                Return to Directory
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-12 py-8 border-t border-primary/5 text-center">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em]">MindSnapLab Laboratory Division © 2024 // All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default PoliticalResultPage;
