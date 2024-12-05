'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import authorStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';
import Image from 'next/image';

const CallToAction = ({ data }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="relative overflow-x-hidden">
      <div 
        className="banner-container w-full relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          minHeight: 'min(400px, 45vh)', 
          height: 'clamp(400px, 45vh, 600px)'
        }}
      >
        <Image
          src="/images/kreado-header-bg.png"
          alt="Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

        <div className="relative z-10 text-center max-w-3xl mx-auto py-8 md:py-16 px-4">
          <h2 className={`${authorStyles.h2.fontSize} ${authorStyles.h2.fontWeight} ${authorStyles.h2.color} mb-4 md:mb-8`}>
            {data.title}
          </h2>
          <p className={`${authorStyles.subtitle.fontSize} ${authorStyles.subtitle.color} mb-6 md:mb-10 px-4 leading-relaxed`}>
            {data.subTitle}
          </p>
          <CustomButton 
            href={getButtonLink()}
          >
            {data.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;