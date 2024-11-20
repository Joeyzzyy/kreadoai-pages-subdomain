'use client';
import React from 'react';
import Image from 'next/image';

const ImageBanner = ({ imageUrl, altText }) => {
  return (
    <div className="relative z-10 py-8 md:py-12">
      <div className="max-w-[60%] mx-auto px-4">
        <Image 
          src={imageUrl || '/images/kreado-top-bg.webp'}
          alt={altText || 'Banner image'}
          width={1200}
          height={675}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ImageBanner;