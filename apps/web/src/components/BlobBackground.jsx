
import React from 'react';

const BlobBackground = ({ 
  position = 'top-left', 
  size = 'medium', 
  opacity = 10, 
  className = '',
  colorClass = 'text-[hsl(var(--blob-color-light))] dark:text-[hsl(var(--blob-color-dark))]'
}) => {
  const sizeClasses = {
    small: 'w-48 h-48 md:w-64 md:h-64',
    medium: 'w-64 h-64 md:w-96 md:h-96',
    large: 'w-80 h-80 md:w-[32rem] md:h-[32rem]',
    xlarge: 'w-96 h-96 md:w-[45rem] md:h-[45rem]'
  };

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/3 -translate-y-1/3',
    'top-right': 'top-0 right-0 translate-x-1/3 -translate-y-1/3',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
    'bottom-right': 'bottom-0 right-0 translate-x-1/3 translate-y-1/3',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div 
      className={`blob-absolute ${sizeClasses[size]} ${positionClasses[position]} ${className}`}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-full h-full ${colorClass}`}
      >
        <path 
          fill="currentColor" 
          d="M44.7,-76.4C58.8,-69.2,71,-58.1,79.6,-44.1C88.2,-30.1,93.2,-13.2,90.4,2.5C87.6,18.2,77,32.7,64.8,44.7C52.6,56.7,38.8,66.1,23.3,72.4C7.8,78.7,-9.4,81.9,-25.1,78.2C-40.8,74.5,-55.1,64,-65.4,50.4C-75.7,36.8,-82.1,20.1,-83.7,2.8C-85.3,-14.5,-82.1,-32.4,-72.6,-46.8C-63.1,-61.2,-47.2,-72,-31.4,-78.9C-15.6,-85.8,0.1,-88.8,15.7,-85.7C31.3,-82.6,44.7,-76.4,44.7,-76.4Z" 
          transform="translate(100 100)" 
        />
      </svg>
    </div>
  );
};

export default BlobBackground;
