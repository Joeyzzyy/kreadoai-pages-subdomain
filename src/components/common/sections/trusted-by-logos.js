'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import fontStyles from '../../../styles/textStyles';

const TrustedByLogos = ({ logos }) => {
  const pathname = usePathname();
  const [position, setPosition] = useState(0);
  console.log('logos', logos);
  
  const getHeadingText = () => {
    const pathParts = pathname.split('/');
    const lang = pathParts[1] === 'zh' ? 'zh' : 'en';
    return lang === 'zh' ? '我们的客户有...' : 'We are trusted by...';
  };

  useEffect(() => {
    const itemWidth = 128;
    const totalWidth = itemWidth * logos.length;
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev - 1;
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, [logos.length]);

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative z-10 py-12 md:py-36 overflow-hidden">
      <h2 className={`text-center mb-8 ${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
        {getHeadingText()}
      </h2>
      
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      <div className="relative mx-auto" style={{ width: '80%' }}>
        <div className="flex items-center justify-center overflow-hidden">
          <div 
            className="flex items-center gap-8"
            style={{
              transform: `translateX(${position}px)`,
              transition: 'none',
            }}
          >
            {tripleLogos.map((logoPath, index) => (
              <div
                key={`${logoPath}-${index}`}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src={logoPath}
                  alt={`we are trusted by ${index + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default TrustedByLogos;