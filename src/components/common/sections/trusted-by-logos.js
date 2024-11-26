'use client';
import React, { useEffect, useState } from 'react';

const TrustedByLogos = ({ logos = [1, 2, 3, 4, 5, 6] }) => {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const itemWidth = 128; // logo宽度(96px) + 间距(32px)
    const totalWidth = itemWidth * logos.length;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev - 1;
        // 当第一组完全移出视图时，重置位置
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20);
    
    return () => clearInterval(interval);
  }, [logos.length]);

  // 创建三组logo以确保无缝滚动
  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative z-10 py-8 md:py-12 overflow-hidden">
      {/* 左侧渐变遮罩 */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      
      {/* 显示区域容器 */}
      <div className="relative mx-auto" style={{ width: '512px' }}>
        <div className="flex items-center justify-center overflow-hidden">
          {/* 滚动容器 */}
          <div 
            className="flex items-center gap-8"
            style={{
              transform: `translateX(${position}px)`,
              transition: 'none',
            }}
          >
            {tripleLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <span className="text-3xl font-bold text-gray-700">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 右侧渐变遮罩 */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
};

export default TrustedByLogos;