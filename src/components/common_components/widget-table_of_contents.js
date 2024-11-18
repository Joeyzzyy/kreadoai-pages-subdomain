'use client';

import React, { useState, useEffect } from 'react';

const TableOfContents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // 获取所有标题元素
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5');
    const headingsData = Array.from(elements).map(element => ({
      title: element.textContent,
      level: parseInt(element.tagName.charAt(1)),
      id: element.id
    }));
    setHeadings(headingsData);
  }, []);

  // 根据标题级别返回样式
  const getHeadingStyles = (level) => {
    const styles = {
      1: 'text-lg font-bold text-gray-900 hover:bg-blue-50',
      2: 'text-base font-semibold text-gray-800 hover:bg-blue-50',
      3: 'text-sm font-medium text-gray-700 hover:bg-blue-50',
      4: 'text-sm text-gray-600 hover:bg-blue-50',
      5: 'text-sm text-gray-500 hover:bg-blue-50'
    };
    return styles[level] || '';
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* 优化后的浮动按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
        text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={(e) => {
            // 检查点击事件是否发生在遮罩层上
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div 
            className="fixed right-4 bottom-16 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-4 
            w-96 max-h-[80vh] overflow-y-auto border border-gray-200 transition-all duration-300 animate-slideIn
            z-50"
          >
            <h3 className="text-lg font-bold mb-3 text-gray-800 border-b pb-2">Heading List</h3>
            <div className="space-y-1">
              {headings.map((heading, index) => (
                <div
                  key={index}
                  className={`block ${getHeadingStyles(heading.level)} 
                  transition-colors duration-200 rounded-md cursor-default`}
                  style={{ 
                    paddingLeft: `${(heading.level - 1) * 1.5}rem`,
                    paddingTop: '0.375rem',
                    paddingBottom: '0.375rem',
                    paddingRight: '0.5rem',
                  }}
                >
                  <span className="inline-block px-1.5 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500 mr-2">
                    H{heading.level}
                  </span>
                  {heading.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;