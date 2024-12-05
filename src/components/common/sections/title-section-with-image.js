'use client';
import React from 'react';
import authorStyles from '../../../styles/textStyles';

const TitleSectionWithImage = ({ data, author, date }) => {
  // 添加判断中文的函数
  const containsChinese = (text) => {
    return /[\u4e00-\u9fa5]/.test(text);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // 根据标题语言决定标签文本
  const isChineseTitle = containsChinese(data?.title || '');
  const authorLabel = isChineseTitle ? '作者' : 'WRITTEN BY';
  const dateLabel = isChineseTitle ? '发布日期' : 'PUBLISHED ON';

  return (
    <div className="relative z-10 min-h-[80vh] pt-20 pb-8 flex items-center bg-gradient-to-b from-[#EBEDFF] to-[#FAF8FF]">
      <header className="header w-full">
        <div className="w-[70%] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* 左侧内容区域 */}
            <div className="w-full md:w-1/2">
              {data?.title && (
                <h1 className={`${authorStyles.h1.fontSize} ${authorStyles.h1.fontWeight} ${authorStyles.h1.color} mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient text-3xl md:text-4xl lg:text-5xl`}>
                  {data.title}
                </h1>
              )}
              {data?.subTitle && (
                <h2 className={`${authorStyles.h2.fontSize} ${authorStyles.h2.fontWeight} ${authorStyles.h2.color} mb-8 leading-tight max-w-xl text-sm md:text-base lg:text-lg`}>
                  {data.subTitle}
                </h2>
              )}
              
              <div className="flex gap-8">
                <div className="mt-4">
                  <span className={`${authorStyles.paragraph.fontSize} ${authorStyles.paragraph.color} block mb-1 text-gray-600 text-xs md:text-sm`}>
                    {authorLabel}
                  </span>
                  <span className={`${authorStyles.paragraph.fontSize} ${authorStyles.paragraph.color} text-gray-600 text-xs md:text-sm`}>
                    {author}
                  </span>
                </div>
                
                <div className="mt-4">
                  <span className={`${authorStyles.paragraph.fontSize} ${authorStyles.paragraph.color} block mb-1 text-gray-600 text-xs md:text-sm`}>
                    {dateLabel}
                  </span>
                  <span className={`${authorStyles.paragraph.fontSize} ${authorStyles.paragraph.color} text-gray-600 text-xs md:text-sm`}>
                    {formatDate(date)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* 右侧图片区域 */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-full h-[75%]">
                <img 
                  src='/images/kreado-demo-pic1.webp'
                  alt={data?.title || 'Featured image'}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>  
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TitleSectionWithImage;