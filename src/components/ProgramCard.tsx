import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface ProgramCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onNotify?: () => void;
  buttonText?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  onNotify,
  buttonText = "Notify Me"
}) => {
  return (
    <Card className="bg-[#1B1B1B] border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex items-start space-x-3 mb-4">
          {icon && (
            <div className="flex-shrink-0 w-8 h-8 bg-[#AEFBD0] rounded-lg flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm mb-6 flex-1">
          {description}
        </p>
        
        <div className="mt-auto">
          <Button 
            onClick={onNotify}
            variant="outline"
            size="sm"
            className="w-full border-white text-white hover:bg-white hover:text-[#1B1B1B]"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};
