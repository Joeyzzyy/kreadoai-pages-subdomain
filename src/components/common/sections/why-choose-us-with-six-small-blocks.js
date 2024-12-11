'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const WhyChooseUsWithSixSmallBlocks = ({ data }) => {
  const { topContent, bottomContent } = data;
  const { emoji, title, subTitle } = topContent;

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white via-indigo-100 to-white pb-12 md:pb-16">
      <div className="w-full md:w-[85%] lg:w-[70%] text-center mt-4 md:mt-8 p-4 md:p-8">
        <div className="text-6xl md:text-8xl mb-4 md:mb-6">{emoji}</div>
        <h2 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color} mb-4 md:mb-6`}>
          {title}
        </h2>
        <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} text-lg md:text-xl max-w-3xl mx-auto`}>
          {subTitle}
        </p>
      </div>

      <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-4 md:p-8">
        {bottomContent.map((module, index) => (
          <div key={index} className="flex gap-4 md:gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 md:w-16 h-12 md:h-16 flex-shrink-0">
              <span className="text-3xl md:text-4xl">{module.icon}</span>
            </div>
            <div>
              <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-2`}>
                {module.title}
              </h3>
              <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                {module.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsWithSixSmallBlocks;