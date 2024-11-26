'use client';
import React from 'react';

const UserReviewsWithSquareCards = ({ data }) => {
  const reviews = data.bottomContent;
  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          See What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="url(#star-gradient)"
                    viewBox="0 0 24 24"
                  >
                    <defs>
                      <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#818cf8' }} />
                        <stop offset="100%" style={{ stopColor: '#6366f1' }} />
                      </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {review.title}
              </h4>
              <p className="text-gray-700 flex-grow mb-6">
                {review.content}
              </p>

              <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReviewsWithSquareCards;