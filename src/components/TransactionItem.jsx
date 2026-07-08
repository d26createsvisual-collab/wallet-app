import React from 'react';
import { Clock } from 'lucide-react';

// Custom high-fidelity SVG for Mac mini M4
function MacMiniSvg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body with silver metallic gradient */}
      <rect x="2" y="5" width="36" height="30" rx="6" fill="url(#mac-silver)" stroke="#d1d5db" strokeWidth="0.5" />
      
      {/* Front LED */}
      <circle cx="34" cy="27" r="0.75" fill="#10b981" className="animate-pulse" />
      
      {/* Apple Logo */}
      <path 
        d="M20 13.5c-0.2 0-0.7 0.3-1.1 0.3-0.4 0-0.8-0.2-1.1-0.2-0.7 0-1.4 0.4-1.7 1-0.7 1.2-0.2 2.9 0.5 3.9 0.3 0.5 0.7 1 1.2 1 0.5 0 0.6-0.3 1.2-0.3 0.6 0 0.7 0.3 1.2 0.3 0.5 0 0.9-0.5 1.2-1 0.4-0.6 0.5-1.2 0.5-1.2s-0.5-0.2-0.9-0.7c-0.3-0.4-0.4-1-0.1-1.4 0.2-0.4 0.6-0.7 0.9-0.7 0-0.1-0.1-0.5-0.2-0.6-0.3-0.5-0.8-0.7-1.3-0.7zm-0.5-0.8c0.4-0.5 0.6-1.1 0.5-1.7-0.5 0-1.1 0.3-1.4 0.8-0.3 0.4-0.5 1.1-0.4 1.7 0.6 0 1.1-0.3 1.3-0.8z" 
        fill="#1f2937" 
      />
      
      {/* Bottom shadow base */}
      <rect x="6" y="34" width="28" height="2" rx="1" fill="#9ca3af" opacity="0.5" />

      <defs>
        <linearGradient id="mac-silver" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="45%" stopColor="#e5e7eb" />
          <stop offset="70%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Custom high-fidelity SVG for Kreo Gaming Keyboard
function KeyboardSvg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Keyboard Case */}
      <rect x="2" y="10" width="36" height="20" rx="3" fill="#1f2937" stroke="#111827" strokeWidth="1" />
      
      {/* RGB Underglow Effect */}
      <rect x="3" y="11" width="34" height="18" rx="2" fill="url(#rgb-glow)" opacity="0.35" />
      
      {/* Simulated Keycaps Grid */}
      {/* Row 1 */}
      <rect x="4" y="13" width="3" height="3" rx="0.5" fill="#ef4444" /> {/* Esc Key */}
      <rect x="8" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="12" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="16" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="20" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="24" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="28" y="13" width="3" height="3" rx="0.5" fill="#3b82f6" />
      <rect x="32" y="13" width="4" height="3" rx="0.5" fill="#4b5563" />

      {/* Row 2 */}
      <rect x="4" y="17" width="4" height="3" rx="0.5" fill="#4b5563" />
      <rect x="9" y="17" width="3" height="3" rx="0.5" fill="#10b981" />
      <rect x="13" y="17" width="3" height="3" rx="0.5" fill="#10b981" />
      <rect x="17" y="17" width="3" height="3" rx="0.5" fill="#10b981" />
      <rect x="21" y="17" width="3" height="3" rx="0.5" fill="#10b981" />
      <rect x="25" y="17" width="3" height="3" rx="0.5" fill="#10b981" />
      <rect x="29" y="17" width="3" height="3" rx="0.5" fill="#4b5563" />
      <rect x="33" y="17" width="3" height="3" rx="0.5" fill="#4b5563" />

      {/* Row 3 */}
      <rect x="4" y="21" width="5" height="3" rx="0.5" fill="#4b5563" />
      <rect x="10" y="21" width="3" height="3" rx="0.5" fill="#eab308" />
      <rect x="14" y="21" width="3" height="3" rx="0.5" fill="#eab308" />
      <rect x="18" y="21" width="3" height="3" rx="0.5" fill="#eab308" />
      <rect x="22" y="21" width="3" height="3" rx="0.5" fill="#eab308" />
      <rect x="26" y="21" width="10" height="3" rx="0.5" fill="#eab308" /> {/* Space / cluster */}

      {/* USB Cable Stub */}
      <rect x="18" y="7" width="4" height="3" rx="0.5" fill="#374151" />
      <line x1="20" y1="7" x2="20" y2="4" stroke="#4b5563" strokeWidth="1" />

      <defs>
        <linearGradient id="rgb-glow" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="33%" stopColor="#a855f7" />
          <stop offset="66%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Custom high-fidelity SVG for PS5 Console
function PS5Svg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft Blue Glow */}
      <circle cx="20" cy="20" r="16" fill="url(#ps5-glow)" opacity="0.1" />

      {/* Black Center Core */}
      <path d="M18 6 C18 6, 20 5, 22 6 L 22 34 C 20 35, 18 34, 18 34 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
      
      {/* Blue LED Strips inside the seam */}
      <path d="M18.5 7 L 18.5 33" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8" />
      <path d="M21.5 7 L 21.5 33" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8" />

      {/* Left White Wing (Curved Side Panel) */}
      <path d="M17.5 5 C15.5 12, 14.5 22, 17.5 35 C17.5 35, 15 32, 15.5 20 C16 8, 17.5 5, 17.5 5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      
      {/* Right White Wing (Curved Side Panel) */}
      <path d="M22.5 5 C24.5 12, 25.5 22, 22.5 35 C22.5 35, 25 32, 24.5 20 C24 8, 22.5 5, 22.5 5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      
      {/* Bottom Stand */}
      <ellipse cx="20" cy="35" rx="7" ry="2" fill="#1e293b" />

      <defs>
        <radialGradient id="ps5-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(90) scale(16)">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function TransactionItem({ type, title, merchant, amount, date, tag }) {
  // Select appropriate high-fidelity SVG icon
  const renderIcon = () => {
    switch (type) {
      case 'mac':
        return <MacMiniSvg />;
      case 'keyboard':
        return <KeyboardSvg />;
      case 'ps5':
        return <PS5Svg />;
      default:
        return (
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
            📦
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-shadow duration-200">
      {/* TOP PORTION */}
      <div className="flex justify-between items-center p-4">
        {/* Left: Thumbnail & Details */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center shadow-inner overflow-hidden select-none">
            {renderIcon()}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[14px] font-bold text-gray-800 leading-tight">
              {title}
            </span>
            <span className="text-[11px] font-medium text-gray-400 mt-0.5">
              {merchant}
            </span>
          </div>
        </div>

        {/* Right: Amount & Date */}
        <div className="flex flex-col items-end">
          <span className="text-[14px] font-bold text-[#FF3B30] tracking-tight">
            {amount}
          </span>
          <span className={`text-[10px] font-medium text-gray-400 mt-0.5`}>
            {date}
          </span>
        </div>
      </div>

      {/* BOTTOM BANNER (Gray Tinted Footer) */}
      <div className="flex justify-between items-center px-4 py-2.5 bg-[#f8f9fa] border-t border-gray-100/60 select-none">
        {/* Left: Tag */}
        <div className="flex items-center gap-1">
          <span className="text-[10.5px] font-medium text-gray-400">
            {tag}
          </span>
        </div>

        {/* Right: Status */}
        <div>
          <span className="text-[10.5px] font-bold text-[#34C759]">
            Paid Successfully
          </span>
        </div>
      </div>
    </div>
  );
}
