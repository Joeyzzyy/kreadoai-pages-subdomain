'use client';

import React from 'react';
import buttonLinks from '../../ui/button/links';
import CustomButton from './widget-custom_button';

const HowItWorksWithThreeBlocks = ({ data, author }) => {
  const { leftContent, rightContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const getModuleStyle = (index) => {
    const styles = {
      0: 'from-[#2563EB]/50 via-[#3B82F6]/40 to-[#60A5FA]/50 hover:from-[#2563EB]/60 hover:via-[#3B82F6]/50 hover:to-[#60A5FA]/60',
      1: 'from-[#7C3AED]/50 via-[#8B5CF6]/40 to-[#C084FC]/50 hover:from-[#7C3AED]/60 hover:via-[#8B5CF6]/50 hover:to-[#C084FC]/60',
      2: 'from-[#059669]/50 via-[#10B981]/40 to-[#34D399]/50 hover:from-[#059669]/60 hover:via-[#10B981]/50 hover:to-[#34D399]/60'
    };
    return styles[index] || styles[0];
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="w-full md:w-[80%] flex flex-col md:flex-row py-20 p-4">
        {/* 左侧内容 */}
        <div className="w-full md:w-2/5 p-6 md:p-20 flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="text-4xl md:text-6xl">{leftContent.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold">{leftContent.title}</h2>
          <p style={{ color: 'rgb(55, 83, 117)' }} className="text-lg md:text-xl">
            {leftContent.subtitle}
          </p>
          <div className="w-full md:w-auto">
            <CustomButton variant={author} href={getButtonLink()}>
              {leftContent.buttonText}
            </CustomButton>
          </div>
        </div>

        {/* 右侧模块 */}
        <div className="w-full md:w-3/5 p-4 md:p-10 flex flex-col justify-center gap-4 md:gap-6">
          {rightContent.map((module, index) => (
            <div 
              key={index} 
              className={`
                relative
                p-4 md:p-6 
                rounded-xl 
                backdrop-blur-xl
                bg-gradient-to-br ${getModuleStyle(index)}
                border-[0.5px] border-white/20
                shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]
                hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.2)]
                hover:scale-[1.02]
                transition-all
                duration-300
                overflow-hidden
                group
                flex-1
              `}
            >
              {/* 添加光晕效果 */}
              <div className="absolute -top-1/2 -left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:translate-x-4 transition-transform duration-700" />
              
              {/* 内容区域 */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-white">{module.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white text-shadow-sm">
                  {module.title}
                </h3>
                <p className="text-white/90 font-medium text-shadow-sm">
                  {module.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksWithThreeBlocks;