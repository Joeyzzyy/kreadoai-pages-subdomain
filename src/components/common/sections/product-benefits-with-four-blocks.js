'use client';

import React from 'react';
import CustomButton from './widget-custom_button';
import buttonLinks from '../../ui/button/links';
import fontStyles from '../../../styles/textStyles';
import { gradients } from './shared-gradient-styles';


const ProductBenefitsWithFourBlocksq = ({ data, author }) => {
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  const getModuleStyle = (colorKey) => {
    const styles = {
      blue: 'from-[#2563EB]/50 via-[#3B82F6]/40 to-[#60A5FA]/50 hover:from-[#2563EB]/60 hover:via-[#3B82F6]/50 hover:to-[#60A5FA]/60',
      purple: 'from-[#7C3AED]/50 via-[#8B5CF6]/40 to-[#C084FC]/50 hover:from-[#7C3AED]/60 hover:via-[#8B5CF6]/50 hover:to-[#C084FC]/60',
      green: 'from-[#059669]/50 via-[#10B981]/40 to-[#34D399]/50 hover:from-[#059669]/60 hover:via-[#10B981]/50 hover:to-[#34D399]/60',
      orange: 'from-[#EA580C]/50 via-[#F97316]/40 to-[#FB923C]/50 hover:from-[#EA580C]/60 hover:via-[#F97316]/50 hover:to-[#FB923C]/60'
    };
    return styles[colorKey] || styles.blue;
  };

  const styles = fontStyles[author];
  
  return (
    <div className={`flex justify-center ${gradients.medium.primary}`}>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-2/5 pr-4 md:pr-10 pt-4 pb-4 md:pt-10 md:pb-10 flex flex-col space-y-6 md:space-y-8">
          <h2 className={`text-center md:text-left ${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color}`}>
            {data.leftContent.title}
          </h2>
          <p className={`text-center md:text-left ${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
            {data.leftContent.description}
          </p>
          <div className="flex justify-center md:justify-start">
            <CustomButton variant={author} href={getButtonLink()}>
              {data.leftContent.buttonText}
            </CustomButton>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-4 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 content-start">
          {data.rightContent.map((module, index) => {
            const colors = ['blue', 'purple', 'green', 'orange'];
            const moduleColor = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`
                  relative
                  p-4 md:p-6 
                  rounded-xl 
                  backdrop-blur-xl
                  bg-gradient-to-br ${getModuleStyle(moduleColor)}
                  border-[0.5px] border-white/20
                  shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]
                  hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.2)]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  overflow-hidden
                  group
                `}
              >
                <div className="absolute -top-1/2 -left-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:translate-x-4 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <h3 className={`${fontStyles.h3.fontSize} ${fontStyles.h3.fontWeight} text-white mb-2 text-shadow-sm`}>
                    {module.title}
                  </h3>
                  <p className={`${fontStyles.paragraph.fontSize} text-white font-medium text-shadow-sm`}>
                    {module.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductBenefitsWithFourBlocksq;