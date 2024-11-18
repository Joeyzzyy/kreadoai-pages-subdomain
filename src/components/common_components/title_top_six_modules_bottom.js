'use client';

import React from 'react';

const TitleTopSixModulesDown = ({ author, section }) => {
  const { topContent, bottomContent } = section;
  const { emoji, title, subtitle } = topContent;

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-[70%] text-center mt-8 py-8">
        <div className="text-8xl mb-6">{emoji}</div>
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="w-[70%] grid grid-cols-2 gap-12 py-12">
        {bottomContent.map((module, index) => (
          <div key={index} className="flex gap-6">
            <div className="w-16 h-16 flex-shrink-0">
              <span className="text-4xl">{module.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600">{module.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleTopSixModulesDown;