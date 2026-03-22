import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface Props {
  navigate: (p: Page) => void;
  className?: string;
  activePage?: string;
}

const Navbar: React.FC<Props> = ({ navigate, className = "", activePage = "" }) => {
  const navItems = [
    { id: 'home', label: 'Home', action: () => navigate({ name: 'home' }) },
    { id: 'quiz-list', label: 'All Tests', action: () => navigate({ name: 'quiz-list' }) },
    { id: 'personality', label: 'Personality', action: () => navigate({ name: 'quiz-list', categoryId: 'personality' }) },
    { id: 'cognitive', label: 'Cognitive', action: () => navigate({ name: 'quiz-list', categoryId: 'cognitive' }) },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[70] glass-nav border-b border-primary/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo onClick={() => navigate({ name: 'home' })} />
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`text-sm font-medium transition-colors uppercase tracking-widest cursor-pointer ${
                activePage === item.id ? 'text-primary' : 'hover:text-primary text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
    </nav>
  );
};

export default Navbar;
