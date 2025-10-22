import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface EventCardProps {
  title: string;
  location: string;
  date: string;
  description?: string;
  isUpcoming?: boolean;
  onRegister?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  date,
  description,
  isUpcoming = false,
  onRegister
}) => {
  return (
    <Card className="h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              {title}
            </h3>
            <p className="text-[#44C5AC] font-medium mb-1">{location}</p>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
          {isUpcoming && (
            <span className="bg-[#AEFBD0] text-[#1B1B1B] px-2 py-1 rounded-full text-xs font-medium">
              Upcoming
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-gray-300 text-sm mb-4 flex-1">
            {description}
          </p>
        )}
        
        <div className="mt-auto">
          <Button 
            onClick={onRegister}
            size="sm"
            className="w-full"
          >
            Register
          </Button>
        </div>
      </div>
    </Card>
  );
};
