
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import HomePage from './pages/HomePage';
import QuizListPage from './pages/QuizListPage';
import QuizPlayerPage from './pages/QuizPlayerPage';
import ResultPage from './pages/ResultPage';
import PoliticalResultPage from './pages/PoliticalResultPage';
import ReactionTestPage from './pages/ReactionTestPage';
import { MemoryGamePage } from './pages/MemoryGamePage';
import { SequenceGamePage } from './pages/SequenceGamePage';
import { IQTestPage } from './pages/IQTestPage';
import ReadingSpeedPage from './pages/ReadingSpeedPage';
import { checkSessionExpiry, generateCSRFToken } from './utils/security';

export default function App() {
  const [page, setPage] = useState<Page>({ name: 'home' });

  useEffect(() => {
    // Initialize session activity
    if (!localStorage.getItem('last_activity')) {
      localStorage.setItem('last_activity', Date.now().toString());
    }

    // Initialize CSRF token if not present
    if (!sessionStorage.getItem('csrf_token')) {
      sessionStorage.setItem('csrf_token', generateCSRFToken());
    }

    // Periodic session check
    const interval = setInterval(() => {
      if (!checkSessionExpiry()) {
        // Session expired, could redirect or show alert
        console.warn('Session expired due to inactivity');
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="scanlines"></div>
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      
      {page.name === 'home' && <HomePage navigate={navigate} />}
      {page.name === 'quiz-list' && <QuizListPage navigate={navigate} categoryId={page.categoryId} />}
      {page.name === 'quiz-player' && <QuizPlayerPage navigate={navigate} quizId={page.quizId} />}
      {page.name === 'result' && <ResultPage navigate={navigate} quizId={page.quizId} resultData={page.resultData} />}
      {page.name === 'political-result' && (
        <PoliticalResultPage 
          navigate={navigate} 
          economic={page.economic} 
          social={page.social} 
          label={page.label} 
          description={page.description} 
        />
      )}
      {page.name === 'reaction-test' && <ReactionTestPage navigate={navigate} />}
      {page.name === 'memory-game' && <MemoryGamePage navigate={navigate} />}
      {page.name === 'sequence-game' && <SequenceGamePage navigate={navigate} />}
      {page.name === 'iq-test' && <IQTestPage navigate={navigate} />}
      {page.name === 'reading-speed' && <ReadingSpeedPage navigate={navigate} />}
    </div>
  );
}
