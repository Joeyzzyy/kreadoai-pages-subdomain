'use client';

import React from 'react';
import buttonLinks from '../../ui/button/links';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';

const HowItWorksWithThreeBlocks = ({ data, author }) => {
  const { leftContent, rightContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const getModuleStyle = (index) => {
    const styles = [
      'bg-white border-[#3374FF]',
      'bg-white border-[#3374FF]',
      'bg-white border-[#3374FF]'
    ];
    return styles[index] || styles[0];
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* 左侧内容 */}
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            <div className="text-3xl md:text-4xl mb-6">{leftContent.icon}</div>
            <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
              {leftContent.title}
            </h2>
            <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mb-6`}>
              {leftContent.subtitle}
            </p>
            <div>
              <CustomButton 
                variant={author} 
                href={getButtonLink()}
                className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                {leftContent.buttonText}
              </CustomButton>
            </div>
          </div>

          {/* 右侧模块 */}
          <div className="w-full md:w-3/5 flex flex-col gap-4">
            {rightContent.map((module, index) => (
              <div 
                key={index} 
                className={`
                  p-6
                  rounded-lg
                  border
                  transition-all
                  duration-200
                  hover:shadow-sm
                  ${getModuleStyle(index)}
                `}
              >
                <div className="text-2xl mb-4 text-[#3374FF]">{module.icon}</div>
                <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-2`}>
                  {module.title}
                </h3>
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                  {module.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithThreeBlocks;