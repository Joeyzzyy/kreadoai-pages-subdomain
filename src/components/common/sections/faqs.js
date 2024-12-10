'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';
import { gradients } from './shared-gradient-styles';

const FAQs = ({ data }) => {
  return (
    <div className={`flex flex-col items-center ${gradients.light.primary}`}>
      <div className="w-full md:w-[70%] text-center mt-4 md:mt-8 mb-2 px-4">
        <h2 className={`${fontStyles.h1.fontSize} ${fontStyles.h1.fontWeight} ${fontStyles.h1.color}`}>
          {data.title}
        </h2>
      </div>

      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-6 p-4 md:py-12">
        {data.bottomContent.map((faq, index) => (
          <div key={index} className="pb-6">
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              {faq.question}
            </h3>
            <p className={`${fontStyles.paragraph.fontSize} ${fontStyles.paragraph.color} text-sm md:text-base`}>
              {faq.answer}
            </p>
            <hr className="mt-6 border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;