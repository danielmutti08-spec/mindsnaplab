
import React, { useMemo } from 'react';
import { Page, PersonalityResult } from '../types';
import { shareOnX, shareOnWhatsApp, copyLink } from '../utils/share';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import { motion } from 'motion/react';

interface Props {
  navigate: (p: Page) => void;
  quizId: string;
  resultData: any;
}

const RadarChart = ({ stats }: { stats: { label: string; value: number }[] }) => {
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  const angleStep = (Math.PI * 2) / stats.length;

  const points = stats.map((stat, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (stat.value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 20) * Math.cos(angle),
      labelY: center + (radius + 20) * Math.sin(angle),
    };
  });

  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="flex justify-center my-8">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Grid lines */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
          <polygon
            key={scale}
            points={stats.map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const r = scale * radius;
              return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
            }).join(' ')}
            fill="none"
            stroke="rgba(0, 229, 255, 0.1)"
            strokeWidth="1"
          />
        ))}
        {/* Axis lines */}
        {stats.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="rgba(0, 229, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}
        {/* Data polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          points={polygonPoints}
          fill="rgba(0, 229, 255, 0.2)"
          stroke="rgba(0, 229, 255, 0.8)"
          strokeWidth="2"
        />
        {/* Labels */}
        {stats.map((stat, i) => {
          const p = points[i];
          return (
            <text
              key={i}
              x={p.labelX}
              y={p.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-primary/60 font-mono text-[8px] uppercase tracking-tighter"
            >
              {stat.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const ResultPage: React.FC<Props> = ({ navigate, quizId, resultData }) => {
  // resultData can be PersonalityResult or trivia stats
  const isPersonality = 'title' in resultData;
  const result: PersonalityResult = isPersonality ? resultData : {
    id: 'trivia',
    type: 'score',
    title: resultData.score >= 70 ? 'Superior Cognition' : 'Average Profile',
    subtitle: `Accuracy: ${resultData.score}% · ${resultData.correct}/${resultData.total} Correct`,
    description: resultData.score >= 70 
      ? "Your processing capacity exceeds normal baseline expectations. You demonstrate rapid cognitive alignment and robust pattern verification."
      : "Your profile shows standard baseline performance. Continued neural calibration is recommended for optimized response cycles.",
    icon: 'psychology',
    stats: [
      { label: 'Accuracy', value: resultData.score },
      { label: 'Processing', value: 85 },
      { label: 'Retention', value: 72 },
      { label: 'Focus', value: 90 },
    ]
  };

  const shareText = `I just decoded my cognitive architecture on MindSnapLab. Result: ${result.title}.`;

  return (
    <div className="bg-deep-black min-h-screen relative font-display text-white overflow-hidden selection:bg-primary/30">
      <Navbar navigate={navigate} />
      
      {/* Particle Background Area (Static Mockup) */}
      <div className="absolute top-0 left-0 w-full h-[40vh] pointer-events-none flex justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl h-full">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-primary rounded-full opacity-60"></div>
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-primary rounded-full opacity-40"></div>
          <div className="absolute top-40 right-1/4 w-1 h-1 bg-primary rounded-full opacity-50"></div>
          <div className="absolute top-10 right-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-30"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-primary rounded-full opacity-20"></div>
          <div className="absolute top-24 right-1/2 w-2 h-2 bg-primary rounded-full opacity-40"></div>
        </div>
      </div>

      <main className="relative z-[70] flex flex-col items-center justify-center min-h-screen p-6 py-20 mt-10">
        {/* Header Branding */}
        <div className="mb-12">
          <Logo size="md" />
        </div>

        {/* Result Card */}
        <div className="w-full max-w-3xl bg-background-dark/80 backdrop-blur-xl border border-primary/30 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.15)] overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            {/* Neural Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                <svg className="relative w-48 h-48 text-primary" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewBox="0 0 24 24">
                  <path d="M9.5 2a2.5 2.5 0 0 1 5 0M12 2v2M7 4.24a2.5 2.5 0 1 1-2.12 4.38M12 4c-3.31 0-6 2.69-6 6 0 2.5 1.5 4.5 3.5 5.5.5.5.5 1 .5 1.5v2h4v-2c0-.5 0-1 .5-1.5 2-1 3.5-3 3.5-5.5 0-3.31-2.69-6-6-6Z"></path>
                  <path d="M12 10a2 2 0 1 1-2 2"></path>
                  <path d="M16.24 7.76a2.5 2.5 0 1 1-4.38-2.12"></path>
                  <path d="M12 22v-2M15 18H9M17 10h1M6 10H5M12 7V6M12 14v-1"></path>
                  <circle className="fill-primary" cx="12" cy="10" r="1.5"></circle>
                </svg>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2 mb-10">
              <h1 className="font-syne text-5xl md:text-6xl text-white cyan-glow-text leading-tight uppercase tracking-tight">
                {result.title}
              </h1>
              {result.subtitle && (
                <p className="font-mono text-primary text-lg tracking-widest uppercase opacity-80">
                  {result.subtitle}
                </p>
              )}
            </div>

            {/* Stats */}
            {quizId === 'multiple-intelligences-gardner' || quizId === 'five-dominant-traits-ocean' ? (
              <RadarChart stats={result.stats || []} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left border-t border-primary/10 pt-10">
                {result.stats?.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="font-mono text-xs text-primary uppercase tracking-widest">{stat.label}</span>
                      <span className="font-mono text-sm text-white">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/40 to-primary transition-all duration-1000 ease-out" 
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 text-slate-400 text-sm leading-relaxed max-w-xl mx-auto font-light">
              {result.description}
            </div>

            {quizId === 'dark-triad-index' && (
              <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20 rounded-sm text-left">
                <div className="flex items-center gap-2 mb-3 text-red-400">
                  <span className="material-icons text-sm">warning</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Disclaimer</span>
                </div>
                <p className="text-red-400/70 text-xs leading-relaxed italic">
                  This assessment is for informational purposes only and does not constitute a clinical diagnosis. High scores on these traits do not necessarily indicate a personality disorder. For a professional evaluation, please consult a licensed mental health professional.
                </p>
              </div>
            )}

            {quizId === 'professional-iq-assessment' && (
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-sm text-left">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span className="material-icons text-sm">info</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">IQ Disclaimer</span>
                </div>
                <p className="text-primary/70 text-xs leading-relaxed italic">
                  This test provides an informal estimate of fluid intelligence based on pattern recognition and logic. IQ scores can vary based on many factors including environment, health, and test-taking conditions. For an official IQ score, a supervised clinical assessment is required.
                </p>
              </div>
            )}

            {result.recommendation && (
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-sm text-left">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span className="material-icons text-sm">lightbulb</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Recommendation</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{result.recommendation}"
                </p>
              </div>
            )}
          </div>

          {/* Share Section */}
          <div className="bg-primary/5 border-t border-primary/10 p-8">
            <div className="flex flex-col items-center gap-6">
              <span className="font-mono text-[10px] text-primary/60 uppercase tracking-[0.3em]">Broadcast Results</span>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => shareOnX(shareText)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all rounded text-xs uppercase tracking-widest text-white"
                >
                  <span className="material-icons text-sm">share</span> X
                </button>
                <button 
                  onClick={() => shareOnWhatsApp(shareText)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all rounded text-xs uppercase tracking-widest text-white"
                >
                  <span className="material-icons text-sm">chat</span> WhatsApp
                </button>
                <button 
                  onClick={() => copyLink(shareText)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all rounded text-xs uppercase tracking-widest text-white"
                >
                  <span className="material-icons text-sm">content_copy</span> Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={() => navigate({ name: 'quiz-list' })}
            className="px-8 py-4 bg-primary text-background-dark font-bold uppercase tracking-widest hover:bg-white transition-all rounded-sm flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
          >
            <span className="material-icons">apps</span>
            Browse More Tests
          </button>
          <button 
            onClick={() => navigate({ name: 'home' })}
            className="px-8 py-4 border border-primary/40 text-primary hover:border-primary hover:bg-primary/10 transition-all uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
          >
            <span className="material-icons">home</span>
            Return to Home
          </button>
          <button 
            onClick={() => navigate({ name: 'quiz-player', quizId })}
            className="px-8 py-4 border border-primary/20 text-primary/60 hover:text-primary hover:border-primary/40 transition-all uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
          >
            <span className="material-icons">refresh</span>
            Retake Test
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="h-px w-12 bg-primary/20"></div>
          <p className="font-mono text-[10px] text-primary/30 uppercase tracking-widest">
            Cognitive Matrix ID: MS-8922-LAB-7
          </p>
        </div>
      </main>

      {/* Decorative Blur BG */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default ResultPage;
