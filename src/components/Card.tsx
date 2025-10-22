import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`rounded-2xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`p-8 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`flex flex-col space-y-2 p-8 pb-0 ${className}`}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}>
      {children}
    </h3>
  );
};