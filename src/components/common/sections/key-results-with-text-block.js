'use client';
import React from 'react';

const KeyResultsWithTextBlock = ({ data }) => {
  const { title, leftContent, rightContent } = data;
  
  const hasChinese = (str) => /[\u4e00-\u9fa5]/.test(str);
  
  const titleAlignment = hasChinese(title) ? 'text-center' : 'text-left';
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-[400px_1fr] gap-8 relative z-10">
        <div className="bg-gray-50 p-8 rounded-lg sticky top-24 h-fit">
          <h3 className="text-xl font-bold mb-6">Key Results</h3>
          {leftContent.map((result, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {result.percentage}%
              </div>
              <p className="text-sm text-gray-600">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-y-auto max-h-[600px]">
          <header className="header">
            <div className="max-w-4xl pr-4">
              <h2 className={`text-xl md:text-2xl font-bold mb-8 text-gray-900 leading-tight ${titleAlignment}`}>
                {title}
              </h2>
            </div>
          </header>

          <main className="main-content mt-8">
            <article className="article max-w-4xl pr-4">
              {rightContent.map((content, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                    {content.content.contentTitle}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {content.content.contentText}
                  </p>
                </div>
              ))}
            </article>            
          </main>
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithTextBlock;