'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const KeyResultsWithImage = ({ data }) => {
  const dataSet = data.leftContent;
  const image = data.rightContent;
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* 左侧数据 */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {dataSet.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold text-[#3374FF] mb-3">
                    {item.percentage}
                  </div>
                  <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* 右侧图片 */}
          <div className="hidden md:block w-full md:w-1/2">
            <img 
              src={image.imageUrl}
              alt={image.imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithImage;