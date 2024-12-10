'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const HowItWorksWithWorkflow = ({ data, author }) => {
  const { bottomContent, topContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };
  
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
            {topContent.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          {bottomContent.map((block, index) => (
            <React.Fragment key={block.number}>
              <div className="flex flex-col items-center text-center w-full md:w-[28%] mb-8 md:mb-0">
                <div className="text-4xl md:text-5xl font-bold mb-4 text-[#3374FF]">
                  {block.number}
                </div>
                <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} px-4`}>
                  {block.content}
                </p>
              </div>
              
              {index < bottomContent.length - 1 && (
                <div className="hidden md:block text-[#3374FF] text-3xl font-bold">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center">
          <CustomButton 
            variant={author} 
            href={getButtonLink()}
            className="inline-flex items-center px-6 h-10 border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            {topContent.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithWorkflow;