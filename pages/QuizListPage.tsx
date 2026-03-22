
import React, { useState, useEffect } from 'react';
import { Page, Quiz } from '../types';
import { quizzes } from '../data/quizzes';
import { getQuizCompletions, formatParticipants } from '../utils/stats';

interface Props {
  navigate: (p: Page) => void;
  categoryId?: string;
}

const QuizListPage: React.FC<Props> = ({ navigate, categoryId }) => {
  const [activeFilter, setActiveFilter] = useState<string>(categoryId || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [completions, setCompletions] = useState<Record<string, number>>({});

  useEffect(() => {
    if (categoryId) {
      setActiveFilter(categoryId);
    }
  }, [categoryId]);

  useEffect(() => {
    const updateCompletions = () => {
      const counts: Record<string, number> = {};
      quizzes.forEach(q => {
        counts[q.id] = getQuizCompletions(q.id);
      });
      setCompletions(counts);
    };

    updateCompletions();
    window.addEventListener('storage_update', updateCompletions);
    return () => window.removeEventListener('storage_update', updateCompletions);
  }, []);

  const filteredQuizzes = quizzes.filter(q => {
    const matchesCategory = activeFilter === 'all' || q.categoryId === activeFilter.toLowerCase();
    const matchesSearch = searchQuery === '' || 
                          q.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          q.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const tabs = [
    { id: 'all',         label: 'ALL'         },
    { id: 'personality', label: 'PERSONALITY' },
    { id: 'cognitive',   label: 'COGNITIVE'   },
    { id: 'political',   label: 'POLITICAL'   },
    { id: 'behavioral',  label: 'BEHAVIORAL'  },
    { id: 'memory',      label: 'MEMORY'      },
    { id: 'game',        label: 'GAMES'       },
  ];

  return (
    <div className="text-white font-display min-h-screen bg-background-dark">
      <header className="relative pt-20 pb-12 px-8 max-w-7xl mx-auto">
        <div 
          onClick={() => navigate({ name: 'home' })}
          className="mb-8 cursor-pointer inline-flex items-center gap-2 group"
        >
          <span className="material-icons text-primary/40 group-hover:text-primary transition-colors">arrow_back</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary/40 group-hover:text-primary">Back to Home</span>
        </div>
        <div className="flex justify-between items-end border-l-2 border-primary pl-8">
          <div>
            <p className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-2">Subject Database // Alpha-V2</p>
            <h1 className="font-syne text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none tracking-tighter">
              All <span className="text-primary cyan-glow-text">Quizzes</span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-mono text-primary/60 text-[10px] leading-tight">
              LATENCY: 14MS<br/>
              STATUS: OPERATIONAL<br/>
              ENCRYPTION: AES-256
            </p>
          </div>
        </div>
      </header>

      {/* Sticky Filter & Search Bar */}
      <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-y border-primary/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center">
          <nav className="flex overflow-x-auto no-scrollbar font-mono text-sm">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-8 py-5 border-b-2 transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeFilter === tab.id 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-transparent text-white/40 hover:text-primary'
                }`}
              >
                {activeFilter === tab.id && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>}
                {tab.label}
              </button>
            ))}
          </nav>
          <div className="flex-grow flex items-center border-l border-primary/20 pl-4 pr-8 py-4 md:py-0">
            <div className="relative w-full group">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-primary group-focus-within:glow-text">search</span>
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-primary placeholder:text-primary/30 font-mono text-sm pl-12" 
                placeholder="QUERY DATABASE..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-focus-within:w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Counter dinamico */}
        <p className="font-mono text-[10px] text-primary/40 uppercase tracking-widest mb-8">
          {filteredQuizzes.length} modules found // filter: {activeFilter.toUpperCase()}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuizzes.length === 0 ? (
            <div className="col-span-3 text-center py-24">
              <p className="font-mono text-primary/40 text-sm uppercase tracking-widest">
                No modules found for this query
              </p>
            </div>
          ) : (
            filteredQuizzes.map((quiz) => (
              <QuizCard 
                key={quiz.id}
                quiz={quiz}
                completions={completions[quiz.id] || 0}
                onClick={() => {
                  if (quiz.type === 'reaction') {
                    navigate({ name: 'reaction-test' });
                  } else if (quiz.type === 'memory-game') {
                    navigate({ name: 'memory-game' });
                  } else if (quiz.type === 'sequence-game') {
                    navigate({ name: 'sequence-game' });
                  } else if (quiz.type === 'iq-test') {
                    navigate({ name: 'iq-test' });
                  } else if (quiz.id === 'reading-speed-test') {
                    navigate({ name: 'reading-speed' });
                  } else {
                    navigate({ name: 'quiz-player', quizId: quiz.id });
                  }
                }}
              />
            ))
          )}
        </div>

        <div className="mt-24 text-center">
          <p className="mt-8 font-mono text-[10px] text-primary/30 tracking-widest uppercase">End of Visible Registry // System Version 4.0.2</p>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-primary/40 font-mono text-[10px]">
        <div>© 2024 MINDSNAPLAB LABORATORIES. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="hover:text-primary transition-colors cursor-pointer">PRIVACY_PROTOCOL</a>
          <a className="hover:text-primary transition-colors cursor-pointer">USER_TERMS</a>
          <a className="hover:text-primary transition-colors cursor-pointer">DATA_ENCRYPTION</a>
        </div>
      </footer>
    </div>
  );
};

// QUIZ CARD COMPONENT
// Fix: Use React.FC to explicitly define the component as a React Functional Component,
// which correctly types standard React props like 'key' in TypeScript.
const QuizCard: React.FC<{ quiz: Quiz; completions: number; onClick: () => void }> = ({ quiz, completions, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-neutral-dark border border-primary/20 p-6 rounded transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] cursor-pointer"
    >
      {quiz.icon && (
        <span className="material-icons text-primary/40 group-hover:text-primary transition-colors text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 select-none">
          {quiz.icon}
        </span>
      )}
      <div className="flex justify-between items-start mb-6">
        <span className="font-mono text-[10px] tracking-widest text-primary border border-primary/40 px-2 py-0.5 rounded uppercase">
          {quiz.categoryId}
        </span>
        <span className="font-mono text-[10px] text-primary/40">ID: {quiz.id.slice(0, 6).toUpperCase()}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{quiz.title}</h3>
      <p className="text-primary/60 text-sm leading-relaxed mb-6 font-light">{quiz.description}</p>
      <div className="flex items-center gap-4 text-xs font-mono text-primary/80 mb-6">
        <span className="flex items-center gap-1.5"><i className="material-icons text-[14px]">timer</i> {quiz.estimatedMinutes} MIN</span>
        <span className="flex items-center gap-1.5">
          <i className="material-icons text-[14px]">quiz</i> 
          {quiz.questions && quiz.questions.length > 0 ? quiz.questions.length : '—'} Qs
        </span>
        {quiz.tag && (
          <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded">
            {quiz.tag}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-primary/10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
            {formatParticipants(completions)}
          </span>
        </div>
        <span className="material-icons text-primary/40 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/40 group-hover:border-primary"></div>
    </div>
  );
};

export default QuizListPage;
