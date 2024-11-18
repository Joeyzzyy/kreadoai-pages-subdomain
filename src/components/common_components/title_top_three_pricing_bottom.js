'use client';
import React from 'react';
import buttonLinks from '../../config/buttonLinks';
import CustomButton from './custom_button';

const TitleTopPricingDown = ({ data, author }) => {
  const { title, bottomContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="flex flex-col items-center bg-[rgb(248,250,254)]">
      {/* Title Section */}
      <div className="w-[70%] text-center mt-8 py-8">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

      {/* Pricing Cards Section */}
      <div className="w-[70%] grid grid-cols-3 gap-8 py-12">
        {/* planOne Plan */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
            {bottomContent.planOne.discount}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{bottomContent.planOne.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{bottomContent.planOne.price}</span>
              <span>/month</span>
            </div>
            <div className="border-t border-white/20 pt-4">
              <ul className="space-y-2 text-left text-xs">
                {bottomContent.planOne.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CustomButton variant={author} href={getButtonLink()}>
              {bottomContent.planOne.buttonText}
            </CustomButton>
          </div>
        </div>

        {/* planTwo Plan */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow transform scale-105 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
            {bottomContent.planTwo.discount}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{bottomContent.planTwo.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{bottomContent.planTwo.price}</span>
              <span>/month</span>
            </div>
            <div className="border-t border-white/20 pt-4">
              <ul className="space-y-2 text-left text-xs">
                {bottomContent.planTwo.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CustomButton variant={author} href={getButtonLink()}>
              {bottomContent.planTwo.buttonText}
            </CustomButton>
          </div>
        </div>

        {/* planThree Plan */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full transform rotate-12">
            {bottomContent.planThree.discount}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{bottomContent.planThree.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{bottomContent.planThree.price}</span>
            </div>
            <div className="border-t border-white/20 pt-4">
              <ul className="space-y-2 text-left text-xs">
                {bottomContent.planThree.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CustomButton variant={author} href={getButtonLink()}>
              {bottomContent.planThree.buttonText}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleTopPricingDown;