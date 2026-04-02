import React from 'react';

export const ZorvynLogo = () => (
  <div className="flex items-center justify-center gap-1 p-3">
    <div className="relative flex items-center justify-center w-8 h-8">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
          className="fill-blue-600/20 stroke-blue-500"
          strokeWidth="2"
        />
        <path
          d="M9 8H15L9 16H15"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-widest text-white">
      ZORVYN
    </span>
  </div>
);