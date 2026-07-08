import React from 'react';

export default function MobileFrame({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      {/* Responsive Viewport Column */}
      <div className="relative w-full max-w-[420px] min-h-screen bg-[#F5F5F7] flex flex-col shadow-none md:shadow-lg md:border-x md:border-gray-200/60 overflow-hidden">
        {/* Render children inside */}
        {children}
      </div>
    </div>
  );
}
