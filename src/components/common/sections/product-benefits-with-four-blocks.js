'use client';

import React from 'react';
import CustomButton from '../../ui/button';
import authorStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const TitleLeftFourModulesRight = ({ section, author }) => {
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

  const styles = authorStyles[author];
  
  return (
    <div className="flex justify-center bg-white py-10">
      <div className="w-[80%] flex items-center">
        <div className="w-2/5 p-10 flex flex-col space-y-8">
          <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color}`}>
            {section.leftContent.title}
          </h2>
          <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color}`}>
            {section.leftContent.description}
          </p>
          <CustomButton variant={author} href={getButtonLink()}>
            {section.leftContent.buttonText}
          </CustomButton>
        </div>

        <div className="w-3/5 p-10 grid grid-cols-2 gap-6 content-start">
          {section.rightContent.map((module, index) => {
            const colors = ['blue', 'purple', 'green', 'orange'];
            const moduleColor = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`
                  relative
                  p-6 
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
                  <h3 className={`${styles.h3.fontSize} ${styles.h3.fontWeight} text-white mb-2 text-shadow-sm`}>
                    {module.title}
                  </h3>
                  <p className={`${styles.paragraph.fontSize} text-white font-medium text-shadow-sm`}>
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

export default TitleLeftFourModulesRight;