'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';
import { gradients } from './shared-gradient-styles';

const TitleSectionWithImage = ({ data, author, date }) => {
  const containsChinese = (text) => {
    return /[\u4e00-\u9fa5]/.test(text);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const isChineseTitle = containsChinese(data?.title || '');
  const authorLabel = isChineseTitle ? '作者' : 'WRITTEN BY';
  const dateLabel = isChineseTitle ? '发布日期' : 'PUBLISHED ON';

  return (
    <div className={`relative z-10 pt-24 pb-12 md:pt-32 md:pb-16 flex items-center ${gradients.medium.secondary}`}>
      <header className="w-full">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* 左侧内容区域 */}
            <div className="w-full md:w-1/2">
              {data?.title && (
                <h1 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color} mb-4`}>
                  {data.title}
                </h1>
              )}
              {data?.subTitle && (
                <h2 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} ${fontStyles.h3.color} mb-6`}>
                  {data.subTitle}
                </h2>
              )}
              
              <div className="flex gap-8">
                <div>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} block mb-1 font-medium`}>
                    {authorLabel}
                  </span>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {author}
                  </span>
                </div>
                
                <div>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} block mb-1 font-medium`}>
                    {dateLabel}
                  </span>
                  <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                    {formatDate(date)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* 右侧图片区域 */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full pt-[75%]">
                <img 
                  src={data?.rightContent?.imageUrl}
                  alt={data?.rightContent?.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>  
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TitleSectionWithImage;