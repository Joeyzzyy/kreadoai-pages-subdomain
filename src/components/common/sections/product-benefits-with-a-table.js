'use client';

import React from 'react';
import CustomButton from './widget-custom_button';
import fontStyles from '../../../styles/textStyles';
import buttonLinks from '../../ui/button/links';

const ProductBenefitsWithATable = ({ data, author }) => {
  const themes = {
    default: {
      bgColor: 'bg-white',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-gray-600',
      titleColor: 'text-gray-900',
      tableStyle: 'shadow-lg rounded-xl border border-gray-100',
      rowStyle: 'border-b border-gray-100 hover:bg-gray-50/80 transition-all duration-200',
      iconStyle: 'text-blue-500',
      titleStyle: 'text-gray-800',
      contentStyle: 'text-gray-600'
    },
    KREADO: {
      bgColor: 'bg-gradient-to-br from-[#2A0E61] via-[#11042C] to-[#020013]',
      buttonColor: 'bg-gradient-to-r from-[#7B4AE2] to-[#4A00E0] hover:opacity-90',
      textColor: 'text-gray-200',
      titleColor: 'bg-clip-text text-transparent bg-gradient-to-r from-[#7B4AE2] to-[#4A00E0]',
      tableStyle: 'backdrop-blur-sm bg-white/5 rounded-xl border border-white/10',
      rowStyle: 'border-b border-white/10 hover:bg-white/5',
      iconStyle: 'text-[#7B4AE2]',
      titleStyle: 'text-white',
      contentStyle: 'text-gray-300'
    }
  };

  const currentTheme = themes[author] || themes.default;

  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className={`flex justify-center ${currentTheme.bgColor} py-8 md:py-12`}>
      <div className="w-[95%] md:w-[85%] flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 p-4 md:p-12 flex items-center overflow-x-auto">
          <table className={`w-full border-collapse ${currentTheme.tableStyle} min-w-[500px]`}>
            <tbody>
              {data.leftContent.map((item, index) => (
                <tr key={index} className={currentTheme.rowStyle}>
                  <td className="py-4 md:py-6 px-4 md:px-8 w-2/5">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <span className={`${currentTheme.iconStyle} text-lg md:text-xl`}>
                        {item.icon}
                      </span>
                      <span className={`${currentTheme.titleStyle} text-sm md:text-base`}>
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className={`py-4 md:py-6 px-4 md:px-8 ${currentTheme.contentStyle} text-sm md:text-base`}>
                    {item.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-2/5 p-6 md:p-20 flex flex-col justify-center space-y-4 md:space-y-8">
          <div className="text-4xl md:text-6xl">{data.rightContent.icon}</div>
          <h2 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color}`}>
            {data.rightContent.title}
          </h2>
          <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color}`}>
            {data.rightContent.subtitle}
          </p>
          <CustomButton variant={author} href={getButtonLink()}>
            {data.rightContent.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefitsWithATable;