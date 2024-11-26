'use client';
import React from 'react';

const UserReviews = ({ data }) => {
  const reviews = data.bottomContent;
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          See What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/kreado-logo.webp"
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