'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import Image from 'next/image';
import styles from './styles/hero-section-with-video.module.css';

const HeroSectionWithVideo = ({ data }) => {
  const topContent = data.topContent;

  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className={`banner-container w-full bg-cover bg-center bg-no-repeat ${styles['banner-height']}`}>
        <div className="absolute inset-0">
          <Image
            src="/images/kreado-top-bg.webp"
            alt="Background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-fill"
            unoptimized
          />
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/50 via-white/8 via-white/3 to-transparent"></div>
        </div>

        <div className="relative z-10 pt-16 md:pt-20 lg:pt-24">
          <CustomButton 
            variant="KREADO" 
            href={getButtonLink()}
            className="block mx-auto mt-8 sm:mt-0 bg-indigo-100/90 hover:bg-indigo-50 text-indigo-900 font-semibold px-4 md:px-6 rounded-full shadow-sm text-sm h-8 flex items-center gap-2"
          >
            {topContent.buttonText}
          </CustomButton>
        </div>

        <div className="relative z-10 pt-8 md:pt-6 mb-10 md:mb-8 px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white">
            {topContent.title}
          </h2>
          {topContent.description && (
            <p className="text-center text-base md:text-lg mt-2 md:mt-3 text-white/90 max-w-3xl mx-auto">
              {topContent.description}
            </p>
          )}
          {topContent.desc && (
            <p className="text-center text-sm md:text-base mt-2 md:mt-3 text-white/80 max-w-2xl mx-auto">
              {topContent.desc}
            </p>
          )}
        </div>

        <div className={`relative w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 ${styles['video-container']}`}>
          <div className="flex justify-center">
            <div className={`w-full md:max-w-[800px] max-w-[580px] ${styles['video-wrapper']}`}>
              <div className="bg-white/80 rounded-xl shadow-lg overflow-hidden backdrop-blur-lg border border-indigo-100/20">
                <div className={styles['video-aspect-ratio']}>
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="https://www.kreadoai.com/img/home/newHome/video/brand-video-en.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-white/50 via-white/8 via-white/3 to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSectionWithVideo;