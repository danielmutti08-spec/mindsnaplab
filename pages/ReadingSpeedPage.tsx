
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';

interface Props {
  navigate: (p: Page) => void;
}

const ReadingSpeedPage: React.FC<Props> = ({ navigate }) => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number | null>(null);
  
  const text = `
    The concept of neuroplasticity, once a fringe theory in neuroscience, has become a cornerstone of our understanding of the human brain. It refers to the brain's ability to reorganize itself by forming new neural connections throughout life. This process allows the neurons in the brain to compensate for injury and disease and to adjust their activities in response to new situations or to changes in their environment.

    Neuroplasticity occurs in the brain under two primary conditions: during normal brain development when the immature brain first begins to process sensory information, and as an adaptive mechanism to compensate for lost function or maximize remaining functions in the event of brain injury.

    The environment plays a key role in influencing plasticity. If the environment is enriched, providing plenty of opportunities for learning and physical activity, the brain tends to develop more robust neural networks. Conversely, a deprived environment can lead to a reduction in synaptic density.

    In the context of cognitive testing, understanding one's reading speed is not just about how fast one can process words, but how efficiently the brain can decode complex information under time pressure. High-speed reading requires a synchronized effort between the visual cortex, the language centers in the left hemisphere, and the executive functions of the prefrontal cortex.

    As you read this text, your brain is performing millions of calculations per second, translating photons hitting your retina into semantic meaning. The faster this translation occurs without loss of comprehension, the higher your cognitive throughput.
  `;

  const wordCount = text.trim().split(/\s+/).length;

  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
  };

  const handleFinish = () => {
    if (startTime) {
      const endTime = Date.now();
      const durationInMinutes = (endTime - startTime) / 60000;
      const calculatedWpm = Math.round(wordCount / durationInMinutes);
      setWpm(calculatedWpm);
      setFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display flex flex-col pt-20">
      <header className="h-16 border-b border-primary/10 flex items-center justify-between px-8 fixed top-0 w-full bg-background-dark/80 backdrop-blur-md z-50">
        <button 
          onClick={() => navigate({ name: 'home' })}
          className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors group"
        >
          <span className="material-icons text-lg">arrow_back</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Abort Protocol</span>
        </button>
        <h1 className="uppercase tracking-widest text-xs font-medium text-primary/60">Neural Assessment: Reading Speed Test</h1>
        <div className="w-24"></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 max-w-4xl mx-auto w-full">
        {!started ? (
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="material-icons text-primary text-4xl">auto_stories</span>
            </div>
            <h2 className="text-4xl font-syne uppercase mb-6">Reading Throughput Analysis</h2>
            <p className="text-white/60 mb-10 leading-relaxed text-lg">
              This protocol measures your cognitive processing speed. You will be presented with a scientific text. 
              Read it at your natural pace. Click "FINISH" immediately after reading the last word.
            </p>
            <button 
              onClick={handleStart}
              className="px-12 py-4 bg-primary text-background-dark font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all"
            >
              Initialize Scan
            </button>
          </div>
        ) : !finished ? (
          <div className="w-full">
            <div className="mb-8 flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em]">Reading in Progress...</span>
              <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em]">Words: {wordCount}</span>
            </div>
            <div className="text-xl md:text-2xl leading-relaxed text-white/80 font-serif mb-12 select-none">
              {text.split('\n\n').map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </div>
            <div className="flex justify-center">
              <button 
                onClick={handleFinish}
                className="px-16 py-5 bg-acid text-background-dark font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(163,255,0,0.4)] transition-all"
              >
                Finish Reading
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="mb-12">
              <span className="text-xs font-mono text-primary/40 uppercase tracking-[0.4em] mb-4 block">Analysis Complete</span>
              <h2 className="text-6xl md:text-8xl font-syne uppercase text-primary mb-2">{wpm}</h2>
              <span className="text-xl font-syne uppercase tracking-widest text-white/60">Words Per Minute</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <h4 className="text-primary font-mono text-xs uppercase mb-2 tracking-widest">Performance Tier</h4>
                <p className="text-lg font-bold uppercase">
                  {wpm! > 400 ? 'Elite Processor' : wpm! > 300 ? 'High Throughput' : wpm! > 200 ? 'Standard Range' : 'Deep Analyzer'}
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                <h4 className="text-primary font-mono text-xs uppercase mb-2 tracking-widest">Cognitive Load</h4>
                <p className="text-lg font-bold uppercase">Optimal Sync</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => navigate({ name: 'home' })}
                className="px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-background-dark transition-all"
              >
                Return to Lab
              </button>
              <button 
                onClick={() => { setStarted(false); setFinished(false); setWpm(null); }}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Recalibrate
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="h-12 border-t border-white/5 bg-background-dark/80 backdrop-blur-md flex items-center justify-between px-8 text-[10px] font-mono text-primary/20 uppercase tracking-[0.2em]">
        <span>Protocol: READ_SPEED_V1.0</span>
        <span>Neural Sync: Active</span>
      </footer>
    </div>
  );
};

export default ReadingSpeedPage;
