'use client';
import React from 'react';
import authorStyles from '../../../styles/textStyles';

const TitleSection = ({ data, author }) => {
  const styles = authorStyles[author];  // 获取对应的样式
  
  return (
    <div className="relative z-10 min-h-[40vh] flex items-center justify-center">
      <header className="header w-full">
        <div className="w-[80%] mx-auto text-center">
          {data?.title && (
            <h1 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color} mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient`}>
              {data.title}
            </h1>
          )}
          {data?.subtitle && (
            <h2 className={`${styles.h2.fontSize} ${styles.h2.fontWeight} ${styles.h2.color} mb-8 leading-relaxed`}>
              {data.subtitle}
            </h2>
          )}
          {author && (
            <div className="mt-4">
              <span className={`${styles.paragraph.fontSize} ${styles.paragraph.color}`}>
                Author: {author}
              </span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default TitleSection;