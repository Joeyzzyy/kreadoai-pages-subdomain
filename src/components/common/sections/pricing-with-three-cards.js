'use client';
import React from 'react';
import buttonLinks from '../../config/buttonLinks';
import CustomButton from './widget-custom_button';

const PricingWithThreeCards = ({ data, author }) => {
  const { title, bottomContent } = data;
  
  const getButtonLink = () => {
    return buttonLinks.workbench || '#';
  };

  return (
    <div className="flex flex-col items-center bg-[rgb(248,250,254)] py-16">
      {/* Title Section */}
      <div className="w-full max-w-6xl text-center mb-12">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>

      {/* Pricing Cards Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Basic Plan */}
        <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{bottomContent.planOne.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{bottomContent.planOne.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            <div className="border-t border-white/20 pt-4 mb-8">
              <ul className="space-y-2 text-left text-xs mb-6">
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
            <div className="mt-auto">
              <CustomButton variant={author} href={getButtonLink()}>
                {bottomContent.planOne.buttonText}
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform scale-105 z-10 border-2 border-blue-200">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-900">{bottomContent.planTwo.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-blue-900">{bottomContent.planTwo.price}</span>
              <span className="text-blue-700">/month</span>
            </div>
            <div className="border-t border-white/20 pt-4 mb-8">
              <ul className="space-y-2 text-left text-xs mb-6">
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
            <div className="mt-auto">
              <CustomButton variant={author} href={getButtonLink()}>
                {bottomContent.planTwo.buttonText}
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900">{bottomContent.planThree.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{bottomContent.planThree.price}</span>
            </div>
            <div className="border-t border-white/20 pt-4 mb-8">
              <ul className="space-y-2 text-left text-xs mb-6">
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
            <div className="mt-auto">
              <CustomButton variant={author} href={getButtonLink()}>
                {bottomContent.planThree.buttonText}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingWithThreeCards;