'use client';
import React, { useState, useRef } from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/textStyles';

const HeroSectionWithVideo = ({ data }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const topContent = data.topContent;
  
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="relative py-12 md:py-16">
      <div className="w-full bg-white">
        <div className="relative z-10 pt-8 md:pt-12 mb-8 md:mb-12 px-4">
          <h2 className={`text-center ${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
            {topContent.title}
          </h2>
          {topContent.description && (
            <p className={`text-center ${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} mt-3 max-w-3xl mx-auto`}>
              {topContent.description}
            </p>
          )}
          
          <div className="mt-8">
            <CustomButton 
              variant="KREADO" 
              href={getButtonLink()}
              className="block mx-auto border-2 border-[#3374FF] text-[#3374FF] hover:bg-[#3374FF] hover:text-white font-medium px-6 md:px-8 rounded-md text-sm h-10 flex items-center gap-2 transition-colors duration-200"
            >
              {topContent.buttonText}
            </CustomButton>
          </div>
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 mb-12 md:mb-16">
          <div className="flex justify-center">
            <div className="w-full md:max-w-[800px] max-w-[580px] relative">
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 p-2 bg-black/80 hover:bg-black text-white rounded-md transition-colors z-50 cursor-pointer"
                aria-label={isMuted ? "取消静音" : "静音"}
                type="button"
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
              <div className="bg-white rounded-md shadow-sm overflow-hidden border border-black/10">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={topContent.videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithVideo;
