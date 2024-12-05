'use client';
import React from 'react';
import Image from 'next/image';
import authorStyles from '../../../styles/textStyles';

const MoreInsightsWithFourCards = ({ data }) => {
  const insights = data.bottomContent;

  return (
    <div className="more-insights my-16 flex justify-center">
      <div className="w-[95%] md:w-[80%]">
        <h2 className={`${authorStyles.h2.fontSize} ${authorStyles.h2.fontWeight} ${authorStyles.h2.color} text-center mb-8`}>
          More Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={insight.imageUrl || '/images/placeholder.webp'}
                  alt={insight.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-indigo-700 font-medium mb-2 uppercase">{insight.subTitle}</p>
                <h3 className="text-xl text-gray-900 font-semibold mb-2 leading-tight hover:text-indigo-700 transition-colors duration-300">{insight.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreInsightsWithFourCards;
