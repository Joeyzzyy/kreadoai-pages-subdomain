'use client';
import React from 'react';

const ArticleContent = ({ data }) => {
  const { title, bottomContent } = data;
  
  const hasChinese = (str) => /[\u4e00-\u9fa5]/.test(str);
  
  const titleAlignment = hasChinese(title) ? 'text-center' : 'text-left';
  
  return (
    <div className="relative z-10">
      <header className="header pt-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-xl md:text-2xl font-bold mb-8 text-gray-900 leading-tight ${titleAlignment}`}>
            {title}
          </h2>
        </div>
      </header>

      <main className="main-content mt-8">
        <article className="article max-w-4xl mx-auto px-4">
          {bottomContent.map((content, index) => (
            <div key={index} className="mb-10 last:mb-0">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">{content.content.contentTitle}</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {content.content.contentText}
              </p>
            </div>
          ))}
        </article>            
      </main>
    </div>
  );
};

export default ArticleContent;