import React from 'react';

export default function MobileFrame({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-200 py-10 px-4">
      {/* Phone Silhouette Wrapper */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[52px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_2px_rgba(0,0,0,0.1),inset_0_0_3px_rgba(255,255,255,0.2)] p-[10px] flex flex-col select-none">
        
        {/* Screen Viewport */}
        <div className="relative flex-1 bg-[#F5F5F7] rounded-[42px] overflow-hidden flex flex-col shadow-inner">
          {/* Subtle light reflections on screen borders */}
          <div className="absolute inset-0 border border-white/10 rounded-[42px] pointer-events-none z-40"></div>
          
          {/* Children are rendered inside the viewport directly */}
          {children}
        </div>

        {/* Home Indicator Bar (iOS style bottom bar) */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[130px] h-[4.5px] bg-black/80 rounded-full z-40 pointer-events-none"></div>
      </div>
    </div>
  );
}
