'use client';

import React from 'react';
import CustomButton from './custom_button';
import authorStyles from '../../styles/textStyles';
import buttonLinks from '../../config/buttonLinks';

const TitleRightTableLeft = ({ section, author }) => {
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

  console.log('Current author:', author);

  const currentTheme = themes[author] || themes.default;

  const styles = authorStyles[author];

  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className={`flex justify-center ${currentTheme.bgColor}`}>
      <div className="w-[85%] flex">
        <div className="w-3/5 p-12 flex items-center">
          <table className={`w-full border-collapse ${currentTheme.tableStyle}`}>
            <tbody>
              {section.leftContent.map((item, index) => (
                <tr key={index} className={currentTheme.rowStyle}>
                  <td className="py-6 px-8 w-2/5">
                    <div className="flex items-center space-x-4">
                      <span className={currentTheme.iconStyle}>
                        {item.icon}
                      </span>
                      <span className={currentTheme.titleStyle}>
                        {item.title}
                      </span>
                    </div>
                  </td>
                  <td className={`py-6 px-8 ${currentTheme.contentStyle}`}>
                    {item.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-2/5 p-20 flex flex-col justify-center space-y-8">
          <div className="text-6xl">{section.rightContent.icon}</div>
          <h2 className={`${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color}`}>
            {section.rightContent.title}
          </h2>
          <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color}`}>
            {section.rightContent.subtitle}
          </p>
          <CustomButton variant={author} href={getButtonLink()}>
            {section.rightContent.buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TitleRightTableLeft;