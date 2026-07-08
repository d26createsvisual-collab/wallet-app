import React from 'react';

export default function StatusBar() {
  return (
    <div className="hidden md:flex justify-between items-center px-6 pt-3 pb-2 text-[13px] font-semibold text-black select-none">
      {/* Time */}
      <span className="w-14 text-left">9:41</span>
      
      {/* Dynamic Island / Notch */}
      <div className="w-[100px] h-[28px] bg-black rounded-full flex items-center justify-center shadow-inner">
        {/* Subtle camera lens glare */}
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-3 border border-slate-800 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#1a2c4c] opacity-80"></div>
        </div>
      </div>

      {/* Status Icons */}
      <div className="flex items-center gap-1.5 w-14 justify-end">
        {/* Signal Icon */}
        <svg className="w-4 h-3.5 fill-current" viewBox="0 0 24 24">
          <rect x="2" y="16" width="3" height="5" rx="0.5" />
          <rect x="7" y="12" width="3" height="9" rx="0.5" />
          <rect x="12" y="8" width="3" height="13" rx="0.5" />
          <rect x="17" y="4" width="3" height="17" rx="0.5" />
        </svg>
        {/* Wifi Icon */}
        <svg className="w-4 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M4 8a12 12 0 0 1 16 0" />
          <path strokeLinecap="round" d="M7 12a8 8 0 0 1 10 0" />
          <path strokeLinecap="round" d="M10 16a4 4 0 0 1 4 0" />
          <circle cx="12" cy="20" r="1.25" fill="currentColor" stroke="none" />
        </svg>
        {/* Battery Icon */}
        <div className="w-5.5 h-3 border-1.5 border-black rounded-[4px] p-[1.5px] flex items-center relative">
          <div className="h-full w-full bg-black rounded-[1.5px]"></div>
          <div className="w-[1.5px] h-1.5 bg-black absolute -right-[3px] rounded-r-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
