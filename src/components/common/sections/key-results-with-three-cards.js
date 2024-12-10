'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const KeyResultsWithThreeCards = ({ data }) => {
  const title = data.title;
  const comparisons = data.bottomContent;
  
  const isChinese = (str) => {
    return /[\u4e00-\u9fa5]/.test(str);
  };
  
  const buttonText = isChinese(title) ? "查看案例" : "Read Case Study";
  
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} text-center`}>
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 hover:border-[#3374FF]/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <img 
                  src={item.competitorLogo}
                  alt={item.competitorLogoAlt}
                  className="h-8 object-contain mb-8"
                />
                
                <div className="text-5xl md:text-6xl font-bold text-[#3374FF] mb-2">
                  {item.percentage}
                </div>
                
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} mb-4`}>
                  {item.metric}
                </p>
                
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} mb-6`}>
                  {item.description}
                </p>

                <button className="inline-flex items-center text-[#3374FF] hover:text-[#3374FF]/80 font-medium transition-colors duration-200">
                  {buttonText}
                  <svg 
                    className="w-4 h-4 ml-1" 
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithThreeCards;