import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'secondary' | 'muted';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'default'
}) => {
  const backgroundClasses = {
    default: 'bg-zinc-950',
    secondary: 'bg-zinc-900',
    muted: 'bg-zinc-900/50',
  };
  
  return (
    <section 
      id={id}
      className={`py-32 md:py-40 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};