'use client';
import React, { useState } from 'react';
import fontStyles from '../../../styles/textStyles';

const FAQTwoColumnsWithBigTitle = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isChineseContent = (content) => {
    return /[\u4e00-\u9fa5]/.test(content[0]?.question);
  };

  return (
    <div className="flex justify-center bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="w-full md:w-[70%] flex flex-col md:flex-row items-start gap-8">
        {/* 左侧标题区域 */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl font-bold mb-4 text-gray-700">
            {isChineseContent(data.bottomContent) ? '常见问题' : 'FAQs'}
          </h2>
          <p className="text-lg text-black mb-4">
            {isChineseContent(data.bottomContent) ? 'AI驱动的内容创作从未如此简单' : 'AI-powered video creation made simple'}
          </p>
        </div>

        {/* 右侧FAQ列表 */}
        <div className="w-full md:w-2/3">
          {data.bottomContent.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                className="w-full py-5 flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-black flex items-center">
                  <span className="mr-2">{index + 1}.</span>
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                className={`transform-gpu overflow-hidden transition-all duration-300 ease-out
                  ${openIndex === index 
                    ? 'h-auto scale-y-100 opacity-100' 
                    : 'h-0 scale-y-95 opacity-0'
                  }`}
              >
                <div className="pb-5">
                  <p className="text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQTwoColumnsWithBigTitle;