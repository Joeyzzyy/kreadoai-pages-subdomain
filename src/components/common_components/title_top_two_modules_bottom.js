'use client';
import React, { useState, useEffect } from 'react';
import { checkImage } from '../../utils/imageUtils';
import CustomButton from './custom_button';
import authorStyles from '../../styles/textStyles';
import buttonLinks from '../../config/buttonLinks';

const TitleTopTwoModulesDown = ({ section, author }) => {
  const styles = authorStyles[author];

  const [validImages, setValidImages] = useState({});

  useEffect(() => {
    const validateImages = async () => {
      const imageValidations = {};
      for (const content of section.bottomContent) {
        if (content.image) {
          const isValid = await checkImage(content.image);
          imageValidations[content.image] = isValid;
        }
      }
      setValidImages(imageValidations);
    };
    validateImages();
  }, [section.bottomContent]);

  // 获取图片源地址
  const getImageSrc = (imagePath, index) => {
    // KREADO 作者使用特定的演示图片
    return `/images/kreado-demo-pic${index + 1}.png`;

    // 其他作者使用原有的图片验证逻辑
    // return (imagePath && validImages[imagePath]) ? imagePath : '/images/placeholder.png';
  };

  // 获取作者对应的workbench链接
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const { topContent, bottomContent } = section;
  return (
    <div className="flex flex-col items-center bg-blue-500/1">
      {/* 顶部标题区域 */}
      <div className="w-[70%] text-center mt-8 py-8">
        <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color} mb-6`}>
          {topContent.title}
        </h2>
        <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color} max-w-3xl mx-auto`}>
          {topContent.subtitle}
        </p>
      </div>

      {/* 循环渲染底部内容区域 */}
      {bottomContent.map((content, index) => (
        <div key={index} className="w-[70%] flex py-8 mb-16">
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 pr-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">{content.title}</h3>
                <p className="mb-8" style={{ color: 'rgb(55, 83, 117)' }}>{content.content}</p>
                <div className="w-fit">
                  <CustomButton variant={author} href={getButtonLink()}>
                    {content.buttonText}
                  </CustomButton>
                </div>
              </div>
              <div className="w-1/2">
                <img 
                  src={getImageSrc(content.image, 0)}
                  alt="Business Growth" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2">
                <img 
                  src={getImageSrc(content.image, 1)}
                  alt="Business Innovation" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6">{content.title}</h3>
                <p className="mb-8" style={{ color: 'rgb(55, 83, 117)' }}>{content.content}</p>
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

export default TitleTopTwoModulesDown;