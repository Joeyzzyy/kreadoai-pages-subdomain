'use client';
import React from 'react';

const KeyResultsWithThreeCards = ({ data }) => {
  const title = data.title;
  const comparisons = data.bottomContent;
  
  const isChinese = (str) => {
    return /[\u4e00-\u9fa5]/.test(str);
  };
  
  const buttonText = isChinese(title) ? "查看案例" : "Read Case Study";
  
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-indigo-50 p-8 rounded-lg flex flex-col h-full items-center text-center">
              <img 
                src="/images/kreado-logo.webp"
                alt={`${item.competitorName} logo`}
                className="h-10 object-contain mb-10"
              />
              
              <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-2">
                {item.percentage}
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {item.metric}
              </p>
              
              <p className="text-gray-700 flex-grow mb-6">
                {item.description}
              </p>

              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                {buttonText}
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithThreeCards;