'use client';
import React from 'react';
import CustomButton from './widget-custom_button';
import authorStyles from '../../styles/textStyles';
import buttonLinks from '../../config/buttonLinks';
import Image from 'next/image';

const CallToActionWithImage = ({ data, author }) => {
  const styles = authorStyles[author];
  const paragraphColorClass = 'text-white';

  const getButtonLinks = () => ({
    primary: buttonLinks.workbench || '#',
    demo: buttonLinks.demo || '#'
  });

  return (
    <div className="relative overflow-x-hidden">
      <div 
        className="banner-container w-full relative bg-cover bg-center bg-no-repeat"
        style={{ 
          minHeight: 'min(400px, 45vh)', 
          height: 'clamp(400px, 45vh, 600px)',
          backgroundImage: 'url(/images/kreado-cta-bg.webp)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

        <div className="relative z-10 container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-8 md:py-16 gap-8">
            <div className="w-full md:w-1/2 text-left">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${styles.h2.color} mb-6 leading-[1.1] tracking-normal pb-1`}>
                {data?.title || ''}
              </h2>
              <p className={`${styles.paragraph.fontSize} ${paragraphColorClass} mb-8 leading-relaxed`}>
                {data?.subtitle || data?.subTitle || ''}
              </p>
              <div className="flex flex-wrap gap-4">
                <CustomButton 
                  variant={author}
                  href={getButtonLinks().primary}
                >
                  {data?.buttonText || 'Get Started'}
                </CustomButton>
                <CustomButton 
                  variant={`${author}-outline`}
                  href={getButtonLinks().demo}
                >
                  Book Demo
                </CustomButton>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative aspect-video">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/kreado-demo-pic1.webp"
                  alt="Feature media"
                  fill
                  priority
                  className="object-cover rounded-tl-3xl clip-other-corners"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionWithImage;