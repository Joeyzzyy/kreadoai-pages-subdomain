'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const TitleSection = ({ data, author }) => {
  return (
    <div className="relative z-10 py-12 md:py-16 flex items-center justify-center">
      <header className="header w-full">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          {data?.title && (
            <h1 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color} mb-4`}>
              {data.title}
            </h1>
          )}
          {data?.subtitle && (
            <h2 className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.fontWeight} ${fontStyles.subtitle.color} mb-6`}>
              {data.subtitle}
            </h2>
          )}
          {author && (
            <div className="mt-3">
              <span className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
                Author：{author}
              </span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default TitleSection;