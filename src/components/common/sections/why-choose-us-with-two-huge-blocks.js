'use client';
import React, { useState } from 'react';
import CustomButton from './widget-custom_button';
import authorStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const WhyChooseUsWithTwoHugeBlocks = ({ data, author }) => {
  const styles = authorStyles[author];

  // 获取图片源地址
  const getImageSrc = (imagePath, index) => {
    // KREADO 作者使用特定的演示图片
    return `/images/kreado-demo-pic${index + 1}.webp`;

    // 其他作者使用原有的图片验证逻辑
    // return (imagePath && validImages[imagePath]) ? imagePath : '/images/placeholder.webp';
  };

  // 获取作者对应的workbench链接
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const { topContent, bottomContent } = data;
  return (
    <div className="flex flex-col items-center bg-blue-500/1">
      {/* 顶部标题区域 */}
      <div className="w-full md:w-[70%] text-center mt-4 md:mt-8 py-4 md:py-8 px-4">
        <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color} mb-4 md:mb-6`}>
          {topContent.title}
        </h2>
        <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color} max-w-3xl mx-auto`}>
          {topContent.subtitle}
        </p>
      </div>

      {/* 循环渲染底部内容区域 */}
      {bottomContent.map((content, index) => (
        <div key={index} className="w-full md:w-[70%] flex flex-col md:flex-row py-4 md:py-8 mb-8 md:mb-16 px-4">
          {index % 2 === 0 ? (
            <>
              <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{content.title}</h3>
                <p className="mb-6 md:mb-8" style={{ color: 'rgb(55, 83, 117)' }}>{content.content}</p>
                <div className="w-fit">
                  <CustomButton variant={author} href={getButtonLink()}>
                    {content.buttonText}
                  </CustomButton>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={getImageSrc(content.image, 0)}
                  alt="Business Growth" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <img 
                  src={getImageSrc(content.image, 1)}
                  alt="Business Innovation" 
                  className="w-full h-full object-cover rounded-lg mb-6 md:mb-0"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center order-1 md:order-2 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{content.title}</h3>
                <p className="mb-6 md:mb-8" style={{ color: 'rgb(55, 83, 117)' }}>{content.content}</p>
                <div className="w-fit">
                  <CustomButton variant={author} href={getButtonLink()}>
                    {content.buttonText}
                  </CustomButton>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUsWithTwoHugeBlocks;