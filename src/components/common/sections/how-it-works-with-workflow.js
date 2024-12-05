'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import authorStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const HowItWorksWithWorkflow = ({ data, author }) => {
  const { bottomContent, topContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };
  
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-white py-12">
      <div className="w-full md:w-[70%] px-4">
        <div className="text-center mt-4 md:mt-8 py-4 md:py-8">
          <h2 className={`${authorStyles.h1.fontSize} ${authorStyles.h1.fontWeight} ${authorStyles.h1.color}`}>
            {topContent.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12">
          {bottomContent.map((block, index) => (
            <React.Fragment key={block.number}>
              <div className="flex flex-col items-center text-center w-full md:w-[28%] mb-8 md:mb-0">
                <div className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'rgb(22 93 255)' }}>{block.number}</div>
                <p className={`text-sm px-2 md:px-4 mt-2 md:mt-4 ${authorStyles.paragraph.color}`}>
                  {block.content}
                </p>
              </div>
              
              {index < bottomContent.length - 1 && (
                <div className="hidden md:block bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text text-4xl font-bold mt-6">
                  ⇒
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mb-12">
          <CustomButton variant={author} href={getButtonLink()}>
            {topContent.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithWorkflow;