'use client';
import React from 'react';
import fontStyles from '../../../styles/textStyles';

const UserReviews = ({ data }) => {
  const reviews = data.bottomContent;
  
  // 随机选择6条评论
  const getRandomReviews = (allReviews, count) => {
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  const displayedReviews = getRandomReviews(reviews, 6);

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-8 text-center`}>
          See What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedReviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar}
                  alt={`${review.name}'s avatar`}
                  className="w-12 h-12 rounded-full object-contain p-1"
                />
                <div className="ml-4">
                  <h3 className="text-gray-800 font-medium">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.position}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {review.title}
              </h4>
              <p className="text-gray-700">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;