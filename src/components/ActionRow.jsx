import React, { useState } from 'react';
import { CreditCard, Snowflake, DotsThreeCircle } from '@phosphor-icons/react';

export default function ActionRow({ onFreezeClick }) {
  const [activeAction, setActiveAction] = useState('details');

  const actions = [
    {
      id: 'details',
      label: 'Card Details',
      icon: CreditCard,
    },
    {
      id: 'freeze',
      label: 'Freeze Card',
      icon: Snowflake,
    },
    {
      id: 'more',
      label: 'More',
      icon: DotsThreeCircle,
    },
  ];

  return (
    <div className="flex gap-3 px-5 py-2">
      {actions.map((act) => {
        const isActive = activeAction === act.id;
        const IconComponent = act.icon;

        return (
          <button
            key={act.id}
            onClick={() => {
              setActiveAction(act.id);
              if (act.id === 'freeze' && onFreezeClick) {
                setTimeout(() => {
                  onFreezeClick();
                }, 150);
              }
            }}
            className={`flex-1 flex flex-col items-center justify-center bg-white rounded-2xl py-3 px-2 shadow-sm transition-all duration-150 cursor-pointer ${
              isActive 
                ? 'border border-gray-300 shadow-md scale-[1.02]' 
                : 'border border-gray-100 hover:bg-gray-50'
            }`}
          >
            <div className="mb-1.5 p-1 rounded-full text-black">
              <IconComponent 
                size={22} 
                className={isActive ? 'text-black' : 'text-gray-800'} 
                weight={isActive ? 'fill' : 'regular'}
              />
            </div>
            <span className={`text-[11px] font-medium tracking-tight transition-colors duration-150 ${
              isActive ? 'text-black font-semibold' : 'text-gray-500'
            }`}>
              {act.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
