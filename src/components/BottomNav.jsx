import React, { useState } from 'react';
import { House, Wallet, ChartLineUp, UserCircle } from '@phosphor-icons/react';

export default function BottomNav({ activeTab, setActiveTab }) {

  const tabs = [
    { id: 'home', icon: House, label: 'Home' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'stats', icon: ChartLineUp, label: 'Progress' },
    { id: 'profile', icon: UserCircle, label: 'Profile' },
  ];

  return (
    <div className="absolute bottom-5 left-0 w-full flex flex-col items-center px-5 pointer-events-none select-none z-30">
      
      {/* FLOATING DARK NAV BAR CAPSULE */}
      <div className="w-[342px] h-[58px] bg-[#1c1c1e] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/5 flex items-center justify-between px-3 pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'bg-white/15 text-white font-medium text-[12px] shadow-sm' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <IconComponent 
                size={19} 
                weight={isActive ? 'fill' : 'regular'}
                className={isActive ? 'text-white' : 'text-gray-400'}
              />
              {isActive && <span className="tracking-tight leading-none">{tab.label}</span>}
            </button>
          );
        })}
      </div>

    </div>
  );
}
