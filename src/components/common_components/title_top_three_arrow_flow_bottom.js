'use client';
import React from 'react';
import CustomButton from './custom_button';
import authorStyles from '../../styles/textStyles';
import buttonLinks from '../../config/buttonLinks';

const TitleTopThreeFlowDown = ({ section, author }) => {
  console.log('hhh current author:', author);
  const styles = authorStyles[author];
  const { bottomContent, topContent } = section;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };
  
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-white py-12">
      <div className="w-[70%]">
        <div className="text-center mt-8 py-8">
          <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color}`}>
            {topContent.title}
          </h2>
        </div>

        <div className="flex justify-between items-start mb-12">
          {bottomContent.map((block, index) => (
            <React.Fragment key={block.number}>
              <div className="flex flex-col items-center text-center w-[28%]">
                <div className="text-6xl font-bold mb-4" style={{ color: 'rgb(22 93 255)' }}>{block.number}</div>
                <p className={`text-sm px-4 mt-4 ${styles.paragraph.color}`}>
                  {block.content}
                </p>
              </div>
              
              {index < bottomContent.length - 1 && (
                <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text text-4xl font-bold mt-6">
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

export default TitleTopThreeFlowDown;