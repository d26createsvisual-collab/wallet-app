import React from 'react';
import { Headphones, Bell } from '@phosphor-icons/react';
import avatarImg from '../assets/avatar.png';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      {/* User Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm bg-gray-150 flex items-center justify-center">
        <img 
          src={avatarImg} 
          alt="User Avatar" 
          className="w-full h-full object-cover scale-110" 
          onError={(e) => {
            // Fallback to stylized character emoji if image fails to load
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = '<span class="text-2xl">👦</span>';
          }}
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Support Button */}
        <button 
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black border border-gray-150 shadow-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          aria-label="Support"
        >
          <Headphones size={20} weight="regular" />
        </button>

        {/* Notification Button */}
        <button 
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black border border-gray-150 shadow-sm hover:bg-gray-50 active:scale-95 transition-all relative cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={20} weight="regular" />
          {/* Plain small solid red dot notification badge */}
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FF3B30] rounded-full border-1.5 border-white shadow-sm"></span>
        </button>
      </div>
    </div>
  );
}
