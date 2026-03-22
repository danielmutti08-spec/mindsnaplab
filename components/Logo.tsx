import React from 'react';

interface Props {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<Props> = ({ onClick, className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-8 h-8 text-xl',
    lg: 'w-12 h-12 text-3xl'
  };

  return (
    <div onClick={onClick} className={`flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <div className={`${iconSizeClasses[size]} bg-primary flex items-center justify-center rounded-sm`}>
        <span className="material-icons text-background-dark font-bold">psychology</span>
      </div>
      <span className={`font-display ${sizeClasses[size]} font-extrabold tracking-tighter text-white`}>
        Mind<span className="text-primary">Snap</span>Lab
      </span>
    </div>
  );
};

export default Logo;
