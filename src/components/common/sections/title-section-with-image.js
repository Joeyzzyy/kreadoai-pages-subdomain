'use client';
import React from 'react';
import authorStyles from '../../styles/textStyles';

const TitleSectionWithImage = ({ data, author }) => {
  const styles = authorStyles[author];
  const leftContent = data?.leftContent || {};
  const rightContent = data?.rightContent || {};
  
  return (
    <div className="relative z-10 min-h-[50vh] flex items-center">
      <header className="header w-full">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* 左侧内容区域 */}
            <div className="w-full md:w-1/2">
              {data?.title && (
                <h1 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color} mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient text-4xl md:text-5xl lg:text-6xl`}>
                  {data.title}
                </h1>
              )}
              {data?.subtitle && (
                <h2 className={`${styles.h2.fontSize} ${styles.h2.fontWeight} ${styles.h2.color} mb-8 leading-tight max-w-xl`}>
                  {data.subtitle}
                </h2>
              )}
              
              <div className="flex gap-8">
                {author && leftContent.author && (
                  <div className="mt-4">
                    <span className={`${styles.paragraph.fontSize} ${styles.paragraph.color} block mb-1 text-gray-600`}>
                      WRITTEN BY
                    </span>
                    <span className={`${styles.paragraph.fontSize} ${styles.paragraph.color} text-gray-600`}>
                      {leftContent.author}
                    </span>
                  </div>
                )}
                
                {leftContent.publishDate && (
                  <div className="mt-4">
                    <span className={`${styles.paragraph.fontSize} ${styles.paragraph.color} block mb-1 text-gray-600`}>
                      PUBLISHED ON
                    </span>
                    <span className={`${styles.paragraph.fontSize} ${styles.paragraph.color} text-gray-600`}>
                      {leftContent.publishDate}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* 右侧图片区域 */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              {rightContent.image && (
                <div className="relative w-full h-[75%]">
                  <img 
                    src={rightContent.image}
                    alt={data?.title || 'Featured image'}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TitleSectionWithImage;