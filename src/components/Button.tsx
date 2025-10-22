import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/25',
    secondary: 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700',
    outline: 'border border-zinc-600 bg-transparent text-white hover:bg-zinc-900 hover:border-zinc-500 hover:shadow-xl hover:shadow-zinc-500/10',
    ghost: 'hover:bg-zinc-800 hover:text-white',
    link: 'text-emerald-400 underline-offset-4 hover:underline',
  };
  
  const sizeClasses = {
    sm: 'h-10 px-6 text-sm',
    md: 'h-12 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};