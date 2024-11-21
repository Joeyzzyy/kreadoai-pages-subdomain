'use client'
import React from 'react';

const CustomButton = ({ 
  children,
  className = '',
  href,
  ...props 
}) => {
  const getButtonStyles = () => {
    return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white';
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href; // 或者使用 router.push(href)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        px-8 py-3 
        rounded-3xl 
        text-lg 
        font-semibold 
        hover:opacity-90 
        transition-colors
        ${getButtonStyles()}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
