'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';
import { gradients } from './shared-gradient-styles';

const HowItWorksWithWorkflow = ({ data, author }) => {
  const { bottomContent, topContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };
  
  return (
    <div className={`${gradients.medium.primary} py-12 md:py-16`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
            {topContent.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch mb-12">
          {bottomContent.map((block, index) => (
            <React.Fragment key={block.number}>
              <div className={`
                flex flex-col items-center text-center w-full md:w-[28%] mb-8 md:mb-0
                p-6 rounded-xl
                bg-gradient-to-br from-white/50 to-white/30
                backdrop-blur-sm
                hover:shadow-lg hover:scale-105
                transition-all duration-300
              `}>
                <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {block.number}
                </div>
                <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.color} px-4`}>
                  {block.content}
                </h3>
              </div>
              
              {index < bottomContent.length - 1 && (
                <div className="hidden md:flex items-center justify-center self-stretch text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
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
            className="inline-flex items-center px-6 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap"
          >
            {topContent.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithWorkflow;