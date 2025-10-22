import React from 'react';
import { Card } from './Card';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  onReadMore?: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  excerpt,
  image,
  imageAlt,
  onReadMore
}) => {
  return (
    <Card>
      <div className="flex flex-col h-full">
        {image && (
          <div className="mb-4">
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="w-full h-48 object-cover rounded-t-2xl"
            />
          </div>
        )}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>
        
        <button
          onClick={onReadMore}
          className="text-[#44C5AC] hover:text-[#087B66] font-medium text-sm transition-colors duration-200 focus-ring rounded px-1 py-1 text-left"
        >
          Read more →
        </button>
      </div>
    </Card>
  );
};
