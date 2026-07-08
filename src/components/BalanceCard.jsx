import React, { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';

export default function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  // Mastercard Logo Component
  const MasterCardLogo = () => (
    <div className="flex items-center gap-1.5">
      <div className="flex -space-x-2 select-none">
        <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90"></div>
        <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-85"></div>
      </div>
      <span className="text-[16px] font-normal text-white font-display-cut">Master Card</span>
    </div>
  );

  return (
    <div className="px-5 py-2">
      {/* Outer Card Container */}
      <div className="relative w-full h-[220px] rounded-[24px] bg-[#1a1a1c] overflow-hidden shadow-xl flex flex-col justify-between">
        
        {/* Subtle diagonal sheen/gradient sweep on the card body */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Abstract metallic diagonal light streaks */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[50%] bg-gradient-to-r from-transparent via-white to-transparent rotate-[28deg] blur-md"></div>
        </div>

        {/* 1. TOP CARD PORTION (slotted card visible above the pocket) */}
        <div className="flex justify-between items-center px-6 pt-5 pb-3">
          <MasterCardLogo />
          <span className="text-[12px] font-normal text-gray-300 tracking-[0.1em] font-display-cut">
            3745 6987 4096 3960
          </span>
        </div>

        {/* 2. LEATHER POCKET OVERLAY (bottom portion of the card) */}
        <div className="absolute bottom-0 left-0 w-full h-[145px] leather-texture border-t border-white/5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_-4px_12px_rgba(0,0,0,0.5)]">
          {/* SVG Shape for Curve, Stitching, and Rivets */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 350 145" 
            preserveAspectRatio="none"
          >
            {/* The Leather Cutout Path (matching pocket body) */}
            <path 
              d="M 0 30 C 80 30, 110 65, 175 65 C 240 65, 270 30, 350 30 L 350 145 L 0 145 Z" 
              fill="#1e1e20" 
              className="opacity-95"
            />
            
            {/* Pocket Top Edge Stitching (Dashed white/gray border) */}
            <path 
              d="M 5 35 C 80 37, 110 70, 175 70 C 240 70, 270 37, 345 35 L 345 140 L 5 140 Z" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.18)" 
              strokeWidth="1.5" 
              strokeDasharray="4,3.5"
            />

            {/* Definitions for Gradients */}
            <defs>
              <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="35%" stopColor="#9ca3af" />
                <stop offset="65%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
            </defs>
          </svg>

          {/* HTML Content for Pocket Details (Limit Card & Balance) */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-6 pt-16 select-none pointer-events-none">
            <span className="text-[12px] font-normal text-gray-400 font-display-cut mb-1">
              Limit Card
            </span>
            <div className="flex items-center gap-2 pointer-events-auto">
              <span className="text-[24px] font-bold text-white font-display-cut leading-none">
                {showBalance ? '$43,865.00' : '••••••••'}
              </span>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="text-gray-400 hover:text-white p-1 rounded-full transition-colors duration-150 cursor-pointer active:scale-90"
                aria-label={showBalance ? "Hide balance" : "Show balance"}
              >
                {showBalance ? <Eye size={17} weight="regular" /> : <EyeSlash size={17} weight="regular" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
