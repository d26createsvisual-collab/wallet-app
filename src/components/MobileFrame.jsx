import React from 'react';

export default function MobileFrame({ children }) {
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center overflow-hidden">
      {/* Responsive Viewport Column: locked to exact screen height (h-full) */}
      <div className="relative w-full max-w-[420px] h-full bg-[#F5F5F7] flex flex-col shadow-none md:shadow-lg md:border-x md:border-gray-200/60 overflow-hidden">
        {/* Render children inside */}
        {children}
      </div>
    </div>
  );
}
