'use client';
import React, { useState } from 'react';
import fontStyles from '../../../styles/textStyles';

const FAQTwoColumnsWithSmallTitle = ({ data, author }) => {
  // 添加展开/收起状态控制
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isChineseContent = (content) => {
    return /[\u4e00-\u9fa5]/.test(content[0]?.question);
  };

  return (
    <div className="flex justify-center bg-white py-8 md:py-12">
      <div className="w-[95%] md:w-[70%] flex flex-col md:flex-row items-start gap-8">
        {/* 左侧标题区域 */}
        <div className="w-full md:w-1/3">
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-900 rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {isChineseContent(data.bottomContent) ? '常见问题解答' : 'Frequently asked questions'}
          </h2>
        </div>

        {/* 右侧FAQ列表 */}
        <div className="w-full md:w-2/3">
          {data.bottomContent.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-blue-50/50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : 'rotate-90'
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
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700">
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

export default FAQTwoColumnsWithSmallTitle;