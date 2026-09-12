import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-pink-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xs brand-gradient-text">
            DS
          </div>
        </div>  
        <p className="mt-4 text-slate-500 font-medium text-sm animate-pulse">
          Loading technologies...
        </p>
    </div>
  );
};

export default LoadingSpinner;