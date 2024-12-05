'use client';
import React from 'react';

const KeyResultsWithImage = ({ data }) => {
  const comparisons = data.bottomContent;
  return (
    <div className="flex justify-center py-8 md:py-12 bg-white">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1">
          {comparisons.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-2">
                {item.percentage}
              </div>
              <p className="text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="hidden md:block w-1/2">
          <img 
            src="/images/kreado-header-menu.webp"
            alt="Achievement"
            className="w-full h-auto object-contain"
            style={{ maxHeight: 'calc(100% + 2rem)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithImage;