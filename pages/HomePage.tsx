
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { quizzes } from '../data/quizzes';
import { getTotalCompletions, getQuizCompletions, formatParticipants } from '../utils/stats';
import { shareResults } from '../utils/share';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

interface Props {
  navigate: (p: Page) => void;
}

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-background-dark/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-zinc-900 border border-primary/20 p-8 max-w-2xl w-full rounded-sm shadow-2xl shadow-primary/10 overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center mb-6 border-b border-primary/10 pb-4">
          <h3 className="text-xl font-bold uppercase italic tracking-widest text-primary">{title}</h3>
          <button onClick={onClose} className="text-white/40 hover:text-primary transition-colors">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="text-slate-300 leading-relaxed font-mono text-sm space-y-4">
          {children}
        </div>
        <div className="mt-8 pt-6 border-t border-primary/10 flex justify-end">
          <button onClick={onClose} className="bg-primary/10 border border-primary/30 text-primary px-6 py-2 uppercase text-xs font-bold tracking-widest hover:bg-primary/20 transition-all">
            Close Protocol
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC<Props> = ({ navigate }) => {
  const [totalCompletions, setTotalCompletions] = useState(0);
  const [modalType, setModalType] = useState<'how' | 'privacy' | null>(null);

  useEffect(() => {
    setTotalCompletions(getTotalCompletions());
  }, []);

  const categories = [
    { id: 'personality', title: 'Personality Tests', icon: 'fingerprint', desc: 'Discover your traits, behavior patterns, and psychological profile.', time: '12M' },
    { id: 'cognitive', title: 'Cognitive Tests', icon: 'settings_input_component', desc: 'Challenge your IQ, logic, memory, and reasoning abilities.', time: '8M' },
    { id: 'psychology', title: 'Behavioral Tests', icon: 'favorite', desc: 'Measure your stress response, reaction time, and adaptability.', time: '15M' },
    { id: 'trivia', title: 'Memory Matrix', icon: 'memory', desc: 'Short-term retention and long-term retrieval stress tests.', time: '10M' },
    { id: 'logic', title: 'Logic Protocols', icon: 'terminal', desc: 'Deductive reasoning and algorithmic problem-solving.', time: '20M' },
    { id: 'reaction', title: 'Speed Tests', icon: 'bolt', desc: 'Mental flexibility and context-switching proficiency.', time: '5M' },
  ];

  return (
    <div className="font-display text-white selection:bg-primary selection:text-black">
      <Navbar navigate={navigate} activePage="home" />

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">System Online: v2.0.48</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-8 uppercase italic tracking-tighter">
              How Sharp Is Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-acid relative">
                Mind?
                <span className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary to-acid/50 blur-sm"></span>
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
              Quantify your cognitive architecture through advanced neuro-metric analysis. Our Dark Lab protocols decode personality, logic, and rapid-response capabilities in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate({ name: 'quiz-list' })}
                className="bg-primary text-background-dark px-8 py-4 font-black uppercase tracking-tighter flex items-center gap-3 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all"
              >
                Begin Neural Scan
                <span className="material-icons">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigate({ name: 'reaction-test' })}
                className="border border-white/20 bg-white/5 px-8 py-4 font-black uppercase tracking-tighter flex items-center gap-3 hover:bg-white/10 transition-all"
              >
                Start Reaction Matrix
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            {/* Brain Visualization Mockup */}
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-full h-full border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              </div>
              <div className="absolute inset-4 flex items-center justify-center opacity-20">
                <div className="w-full h-full border border-primary/40 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <svg className="drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" height="320" viewBox="0 0 100 100" width="320">
                  <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="#00e5ff" strokeDasharray="2 2" strokeWidth="0.5"></path>
                  <path d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z" fill="none" stroke="#00e5ff" strokeWidth="1"></path>
                  <circle cx="50" cy="50" fill="#00e5ff" r="2"></circle>
                  <circle cx="40" cy="40" fill="#a3ff00" r="1.5"></circle>
                  <circle cx="60" cy="45" fill="#00e5ff" r="1.5"></circle>
                  <circle cx="55" cy="65" fill="#a3ff00" r="1.5"></circle>
                  <line stroke="#00e5ff" strokeWidth="0.2" x1="50" x2="40" y1="50" y2="40"></line>
                  <line stroke="#00e5ff" strokeWidth="0.2" x1="50" x2="60" y1="50" y2="45"></line>
                  <line stroke="#00e5ff" strokeWidth="0.2" x1="50" x2="55" y1="50" y2="65"></line>
                </svg>
                <div className="absolute top-10 right-0 px-3 py-1 rounded-sm text-[10px] animate-bounce bg-primary/10 border border-primary/30 font-mono">
                  IQ: 127
                </div>
                <div className="absolute bottom-20 -left-4 px-3 py-1 rounded-sm text-[10px] [animation-delay:0.5s] animate-bounce bg-primary/10 border border-primary/30 font-mono">
                  EQ: HIGH
                </div>
                <div className="absolute top-1/2 -right-10 px-3 py-1 rounded-sm text-[10px] [animation-delay:1s] animate-bounce bg-primary/10 border border-primary/30 font-mono">
                  LOGIC: 98%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metric Bar */}
        <section className="mt-24 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center md:items-start px-8 py-6 md:py-0">
              <span className="font-mono text-primary text-4xl font-bold mb-2">
                {totalCompletions === 0 ? '0' : totalCompletions.toLocaleString()}
              </span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Total Test Completions</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-8 py-6 md:py-0">
              <span className="font-mono text-primary text-4xl font-bold mb-2">50+</span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Available Tests</span>
            </div>
            <div className="flex flex-col items-center md:items-start px-8 py-6 md:py-0">
              <span className="font-mono text-primary text-4xl font-bold mb-2">12</span>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Avg Test Duration (min)</span>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-extrabold uppercase mb-4 italic">Featured Tests</h2>
              <p className="text-white/40 font-mono text-sm max-w-md uppercase">Popular assessments to get you started</p>
            </div>
            <div className="hidden lg:block text-right">
              <span className="font-mono text-[10px] text-primary/50 block mb-1 uppercase">Directory ID</span>
              <span className="font-mono text-sm text-primary">MS-7742-ALPHA</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => navigate({ name: 'quiz-list', categoryId: cat.id })}
                className="lab-card p-8 group cursor-pointer relative overflow-hidden bg-white/[0.02] border border-primary/10 transition-all hover:border-primary hover:bg-radial-gradient-to-tr hover:from-primary/10 hover:to-transparent"
              >
                <span className="material-icons text-primary/40 mb-6 group-hover:text-primary transition-colors text-4xl">{cat.icon}</span>
                <h3 className="text-xl font-bold uppercase mb-3">{cat.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{cat.desc}</p>
                <div className="flex justify-between items-center">
                  <div className="text-primary text-[10px] font-mono uppercase tracking-widest group-hover:underline underline-offset-4">
                    View Tests →
                  </div>
                  <span className="font-mono text-[10px] text-primary/40 uppercase">SCAN TIME: {cat.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Strip */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="material-icons text-primary">trending_up</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest italic">Trending Now</h2>
            <div className="flex-grow h-px bg-white/10 ml-4"></div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            <div className="min-w-[320px] bg-white/5 border border-white/10 p-6 rounded-sm hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-icons text-primary text-4xl select-none">
                    {quizzes.find(q => q.id === 'architect-persona')?.icon || ''}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-acid/20 text-acid rounded-sm">NEW PROTOCOL</span>
                </div>
                <h4 className="text-lg font-bold uppercase mb-2">The Architect Persona</h4>
                <p className="text-xs text-white/40 leading-relaxed">Structural thinking patterns and organizational logic mapping.</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-800"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-700"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-600"></div>
                </div>
                <span className="font-mono text-[10px] text-white/40 uppercase">
                  {formatParticipants(getQuizCompletions('architect-persona'))}
                </span>
              </div>
            </div>
            {/* Professional IQ Assessment */}
            <div 
              onClick={() => navigate({ name: 'iq-test' })}
              className="min-w-[320px] bg-white/5 border border-white/10 p-6 rounded-sm hover:border-primary/50 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-icons text-primary text-4xl select-none">
                    {quizzes.find(q => q.id === 'iq-test-professional')?.icon || ''}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/20 text-primary rounded-sm">CERTIFIED</span>
                </div>
                <h4 className="text-lg font-bold uppercase mb-2 group-hover:text-primary transition-colors">Professional IQ Assessment</h4>
                <p className="text-xs text-white/40 leading-relaxed">Comprehensive intelligence test: matrix puzzles, number series, analogies, logic problems.</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-800"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-700"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-600"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-500"></div>
                </div>
                <span className="font-mono text-[10px] text-white/40 uppercase">
                  {formatParticipants(getQuizCompletions('iq-test-professional'))}
                </span>
              </div>
            </div>
            {/* Rapid Response IQ */}
            <div className="min-w-[320px] bg-white/5 border border-white/10 p-6 rounded-sm hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="material-icons text-primary text-4xl select-none">
                    {quizzes.find(q => q.id === 'rapid-response-iq')?.icon || ''}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/20 text-primary rounded-sm">POPULAR</span>
                </div>
                <h4 className="text-lg font-bold uppercase mb-2">Rapid Response IQ</h4>
                <p className="text-xs text-white/40 leading-relaxed">Measure processing lag during high-stress decision matrices.</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-800"></div>
                  <div className="w-6 h-6 rounded-full border border-background-dark bg-zinc-700"></div>
                </div>
                <span className="font-mono text-[10px] text-white/40 uppercase">
                  {formatParticipants(getQuizCompletions('rapid-response-iq'))}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-background-dark pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-6 mb-6">
              <Logo size="sm" />
            </div>
            <p className="text-white/40 text-sm max-w-sm font-mono leading-relaxed">
              A proprietary neural testing environment for the modern architect. Data driven. Experimentally verified. 
            </p>
          </div>
          <div>
            <h5 className="text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 text-primary">Explore</h5>
            <ul className="space-y-4 text-sm text-white/40 uppercase tracking-widest font-medium">
              <li><button onClick={() => navigate({ name: 'quiz-list' })} className="hover:text-white transition-colors cursor-pointer text-left">All Tests</button></li>
              <li><button onClick={() => navigate({ name: 'quiz-list', categoryId: 'personality' })} className="hover:text-white transition-colors cursor-pointer text-left">Personality</button></li>
              <li><button onClick={() => navigate({ name: 'quiz-list', categoryId: 'cognitive' })} className="hover:text-white transition-colors cursor-pointer text-left">Cognitive</button></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 text-primary">Info</h5>
            <ul className="space-y-4 text-sm text-white/40 uppercase tracking-widest font-medium">
              <li><button onClick={() => setModalType('how')} className="hover:text-white transition-colors cursor-pointer text-left">How It Works</button></li>
              <li><button onClick={() => shareResults({ name: 'MindSnapLab', score: totalCompletions, label: 'Completions' })} className="hover:text-white transition-colors cursor-pointer text-left">Share Results</button></li>
              <li><button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">© 2024 MINDSNAPLAB NEURAL LABS. ALL SYSTEMS OPERATIONAL.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="font-mono text-[10px] text-white/40">LATENCY: 14MS</span>
            <span className="font-mono text-[10px] text-primary">ENCRYPTED: AES-256</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal 
        isOpen={modalType === 'how'} 
        onClose={() => setModalType(null)} 
        title="Protocol: How It Works"
      >
        <p>MindSnapLab utilizes advanced neuro-metric protocols to quantify cognitive architecture. Each test is designed to measure specific mental dimensions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-primary">Neural Scans:</span> Deep psychological profiling based on established behavioral models.</li>
          <li><span className="text-primary">Logic Protocols:</span> Algorithmic challenges that stress-test deductive reasoning.</li>
          <li><span className="text-primary">Reaction Matrix:</span> Real-time measurement of processing lag and context-switching flexibility.</li>
        </ul>
        <p>Results are calculated using proprietary weighting systems and stored locally on your device for maximum privacy.</p>
      </Modal>

      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Protocol: Privacy Vault"
      >
        <p>Your cognitive data is your own. MindSnapLab operates on a "Local First" architecture:</p>
        <div className="bg-primary/5 border-l-2 border-primary p-4 my-4">
          <p className="text-primary font-bold uppercase text-xs mb-2">Encryption Standard: AES-256 (Local)</p>
          <p className="text-xs">All test results and statistics are stored exclusively in your browser's <span className="font-bold">localStorage</span>.</p>
        </div>
        <p>We do not transmit your individual scores to any central server. The completion counts you see are aggregated locally. Clearing your browser cache will reset your laboratory history.</p>
        <p>No tracking cookies. No third-party data harvesting. Just science.</p>
      </Modal>
    </div>
  );
};

export default HomePage;
