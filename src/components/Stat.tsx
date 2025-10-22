import React from 'react';

interface StatProps {
  number: string;
  label: string;
  className?: string;
}

export const Stat: React.FC<StatProps> = ({
  number,
  label,
  className = ''
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-[#44C5AC] mb-2">
        {number}
      </div>
      <div className="text-white font-medium">
        {label}
      </div>
    </div>
  );
};
