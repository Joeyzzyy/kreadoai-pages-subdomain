'use client';
import React from 'react';

const TitleContent = ({ title, subtitle, author }) => {
  const containsChinese = (str) => /[\u4e00-\u9fa5]/.test(str);
  const isChinese = containsChinese(title);
  
  // 根据是否包含中文设置不同的样式类
  const titleClasses = isChinese
    ? "text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight text-center"
    : "text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight text-left";

  const subtitleClasses = isChinese
    ? "text-lg md:text-xl mb-6 text-gray-700 leading-relaxed text-center"
    : "text-lg md:text-xl mb-6 text-gray-700 leading-relaxed text-left";

  const authorClasses = isChinese
    ? "flex items-center text-gray-600 justify-center"
    : "flex items-center text-gray-600 justify-start";

  return (
    <div className="relative z-10 pt-20 min-h-[50vh] flex items-center">
      <header className="header w-full">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className={titleClasses}>
            {title}
          </h1>
          {subtitle && (
            <h2 className={subtitleClasses}>
              {subtitle}
            </h2>
          )}
          {author && (
            <div className={authorClasses}>
              <span className="text-base">
                {isChinese ? "作者:" : "Author:"}{author}
              </span>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default TitleContent;