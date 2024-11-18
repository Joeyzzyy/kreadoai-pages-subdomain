'use client';
import React from 'react';

const ImageBanner = ({ imageUrl, altText }) => {
  return (
    <div className="relative z-10 py-8 md:py-12">
      <div className="max-w-[60%] mx-auto px-4">
        <img 
          src={imageUrl || '/images/kreado-top-bg.png'}
          alt={altText || 'Banner image'}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ImageBanner;