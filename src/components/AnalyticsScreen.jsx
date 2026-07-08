import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, DotsThree } from '@phosphor-icons/react';

// Custom high-fidelity SVG for PS5 Console
function PS5Svg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill="url(#ps5-glow)" opacity="0.1" />
      <path d="M18 6 C18 6, 20 5, 22 6 L 22 34 C 20 35, 18 34, 18 34 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />
      <path d="M18.5 7 L 18.5 33" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8" />
      <path d="M21.5 7 L 21.5 33" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8" />
      <path d="M17.5 5 C15.5 12, 14.5 22, 17.5 35 C17.5 35, 15 32, 15.5 20 C16 8, 17.5 5, 17.5 5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
      <path d="M22.5 5 C24.5 12, 25.5 22, 22.5 35 C22.5 35, 25 32, 24.5 20 C24 8, 22.5 5, 22.5 5 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.5" />
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

// Custom high-fidelity SVG for Camera
function CameraSvg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="12" width="30" height="20" rx="4" fill="#2d3748" stroke="#1a202c" strokeWidth="1" />
      <rect x="9" y="9" width="6" height="3" rx="1" fill="#4a5568" />
      <circle cx="28" cy="10" r="1.5" fill="#e2e8f0" />
      <circle cx="10" cy="16" r="1" fill="#ecc94b" />
      <circle cx="20" cy="22" r="8" fill="#1a202c" stroke="#4a5568" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="5" fill="#0f172a" />
      <circle cx="18" cy="20" r="1.5" fill="#63b3ed" opacity="0.6" />
    </svg>
  );
}

// Custom high-fidelity SVG for iPhone
function IPhoneSvg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11" y="5" width="18" height="30" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
      <rect x="17" y="6" width="6" height="1.5" rx="0.75" fill="#0f172a" />
      <circle cx="15" cy="7" r="0.5" fill="#475569" />
      <rect x="13" y="10" width="14" height="21" rx="1" fill="#0f172a" />
      {/* Screen details */}
      <circle cx="20" cy="16" r="3" fill="#63b3ed" opacity="0.15" />
    </svg>
  );
}

// Custom high-fidelity SVG for MacBook
function MacBookSvg() {
  return (
    <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Screen */}
      <rect x="8" y="9" width="24" height="16" rx="1.5" fill="#2d3748" stroke="#4a5568" strokeWidth="1" />
      <rect x="9" y="10" width="22" height="14" fill="#0f172a" />
      {/* Keyboard Base */}
      <path d="M4 25.5 C4 25.5, 4 27, 6 27 L 34 27 C 36 27, 36 25.5, 36 25.5 L 34 25 L 6 25 Z" fill="#718096" stroke="#4a5568" strokeWidth="0.5" />
      <rect x="16" y="25" width="8" height="1" fill="#4a5568" />
    </svg>
  );
}

export default function AnalyticsScreen({ onBackToHome }) {
  const [installmentType, setInstallmentType] = useState('4');

  // Chart dataset matching reference shape
  const chartData = [
    { day: 1, date: 'Nov 1, 2025', value: 1200.00, valueStr: '$1,200.00', x: 20, y: 130 },
    { day: 6, date: 'Nov 6, 2025', value: 2450.00, valueStr: '$2,450.00', x: 80, y: 110 },
    { day: 12, date: 'Nov 12, 2025', value: 2600.00, valueStr: '$2,600.00', x: 140, y: 108 },
    { day: 18, date: 'Nov 18, 2025', value: 4100.00, valueStr: '$4,100.00', x: 200, y: 70 },
    { day: 25, date: 'Nov 25, 2025', value: 4687.00, valueStr: '$4,687.00', x: 260, y: 68 }, // Default selected point
    { day: 30, date: 'Nov 30, 2025', value: 5800.00, valueStr: '$5,800.00', x: 320, y: 40 },
  ];

  // Default active point is the 5th (Nov 25, 2025)
  const [activePoint, setActivePoint] = useState(chartData[4]);
  const [isInteracting, setIsInteracting] = useState(false);

  // Handles drag/hover along chart x-coordinates to select nearest point
  const handleChartInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;

    // Find nearest point
    let closest = chartData[0];
    let minDiff = Math.abs(chartData[0].x - x);

    for (let i = 1; i < chartData.length; i++) {
      const diff = Math.abs(chartData[i].x - x);
      if (diff < minDiff) {
        minDiff = diff;
        closest = chartData[i];
      }
    }

    setActivePoint(closest);
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    // Reset to default active point (Nov 25) when interaction stops
    setActivePoint(chartData[4]);
  };

  // Mock list items based on installment type
  const installment4Data = [
    {
      id: 'ps5',
      name: 'PS5',
      merchant: 'Flipkart.com',
      amount: '-$836.94',
      dueDate: 'Due date 18',
      progressText: '1 of 4 Installment',
      icon: <PS5Svg />,
    },
    {
      id: 'camera',
      name: 'Sony Alpha 7M4',
      merchant: 'Amazon.com',
      amount: '-$254.03',
      dueDate: 'Due date 18',
      progressText: '3 of 4 Installment',
      icon: <CameraSvg />,
    }
  ];

  const installment6Data = [
    {
      id: 'iphone',
      name: 'iPhone 16 Pro',
      merchant: 'Apple.com',
      amount: '-$149.00',
      dueDate: 'Due date 18',
      progressText: '2 of 6 Installment',
      icon: <IPhoneSvg />,
    },
    {
      id: 'macbook',
      name: 'MacBook Air M3',
      merchant: 'Amazon.com',
      amount: '-$210.00',
      dueDate: 'Due date 18',
      progressText: '5 of 6 Installment',
      icon: <MacBookSvg />,
    }
  ];

  const currentList = installmentType === '4' ? installment4Data : installment6Data;

  const handleMoreMock = () => {
    alert('More Analytics options currently in mock mode.');
  };

  const handlePayNowMock = (name) => {
    alert(`Initiating payment flow for ${name}.`);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F5F5F7] select-none">
      
      {/* 1. Header Row */}
      <div className="w-full h-14 bg-white flex items-center justify-between px-5 border-b border-gray-100 select-none">
        {/* Back Button */}
        <button 
          onClick={onBackToHome}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-150 hover:bg-gray-50 text-gray-700 bg-white cursor-pointer active:scale-95 transition-transform shadow-sm"
          aria-label="Back to Home"
        >
          <CaretLeft size={16} weight="bold" />
        </button>

        {/* Title */}
        <span className="text-[16px] font-extrabold text-gray-900 tracking-tight">
          Analytics
        </span>

        {/* More Button */}
        <button 
          onClick={handleMoreMock}
          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-150 hover:bg-gray-50 text-gray-700 bg-white cursor-pointer active:scale-95 transition-transform shadow-sm"
          aria-label="More Options"
        >
          <DotsThree size={18} weight="bold" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto px-5 pb-24 flex flex-col gap-5 scrollbar-none">
        
        {/* 2. Total Balance header */}
        <div className="flex flex-col text-left pt-4">
          <span className="text-[12px] font-medium text-gray-500 mb-1.5">
            Total Balance
          </span>
          <span className="text-[28px] font-extrabold text-gray-900 tracking-tight leading-none">
            $548,750.87
          </span>
        </div>

        {/* 3. Interactive Line/Area Chart */}
        <div className="w-full bg-white rounded-[24px] p-4 shadow-sm border border-gray-50 flex flex-col relative overflow-hidden">
          
          {/* Custom SVG Drawing Area */}
          <div 
            className="w-full h-[160px] relative mt-2 cursor-crosshair touch-none"
            onMouseMove={handleChartInteraction}
            onTouchMove={handleChartInteraction}
            onMouseLeave={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
          >
            <svg 
              className="w-full h-full" 
              viewBox="0 0 342 160" 
              preserveAspectRatio="none"
            >
              <defs>
                {/* Light blue area gradient fill */}
                <linearGradient id="chart-area-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid vertical lines */}
              <line x1="20" y1="10" x2="20" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="80" y1="10" x2="80" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="140" y1="10" x2="140" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="200" y1="10" x2="200" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="260" y1="10" x2="260" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="320" y1="10" x2="320" y2="150" stroke="#f1f5f9" strokeWidth="1" />

              {/* Vertical Dashed reference line for active point */}
              <motion.line 
                x1={activePoint.x} 
                y1={10} 
                x2={activePoint.x} 
                y2={150} 
                stroke="#3b82f6" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
                animate={{ x1: activePoint.x, x2: activePoint.x }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />

              {/* Area Gradient path */}
              <path 
                d="M 20,130 C 50,120 50,112 80,110 C 110,108 110,110 140,108 C 170,106 170,72 200,70 C 230,68 230,70 260,68 C 290,66 290,42 320,40 L 320,150 L 20,150 Z" 
                fill="url(#chart-area-fill)" 
              />

              {/* Smooth Line Path */}
              <path 
                d="M 20,130 C 50,120 50,112 80,110 C 110,108 110,110 140,108 C 170,106 170,72 200,70 C 230,68 230,70 260,68 C 290,66 290,42 320,40" 
                stroke="#2563eb" 
                strokeWidth="2.5" 
                fill="none" 
                strokeLinecap="round"
              />

              {/* Static data points vertices */}
              {chartData.map((pt, idx) => (
                <circle 
                  key={idx}
                  cx={pt.x} 
                  cy={pt.y} 
                  r="4" 
                  fill="white" 
                  stroke="#2563eb" 
                  strokeWidth="2" 
                />
              ))}

              {/* Active Hover pulse vertex */}
              <motion.circle 
                cx={activePoint.x}
                cy={activePoint.y}
                r="6"
                fill="rgba(37, 99, 235, 0.25)"
                stroke="#2563eb"
                strokeWidth="2.5"
                animate={{ cx: activePoint.x, cy: activePoint.y }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            </svg>

            {/* FLOATING TOOLTIP CARD */}
            <motion.div 
              className="absolute bg-white rounded-xl shadow-md border border-gray-100 p-2 px-3.5 flex flex-col text-left pointer-events-none z-20"
              style={{
                left: `${activePoint.x}px`,
                top: `${activePoint.y - 38}px`,
              }}
              animate={{ 
                x: "-50%",
                y: "-50%",
                left: `${activePoint.x}px`,
                top: `${activePoint.y - 38}px`
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
            >
              <span className="text-[12px] font-extrabold text-gray-900 leading-none mb-1">
                {activePoint.valueStr}
              </span>
              <span className="text-[9px] font-semibold text-gray-400 leading-none">
                {activePoint.date}
              </span>
              {/* Caret pointing down */}
              <div className="absolute -bottom-[3.5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100/60"></div>
            </motion.div>
          </div>

          {/* X Axis Labels */}
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 px-1 mt-1">
            <span>Nov 1, 2025</span>
            <span>Nov 30, 2025</span>
          </div>
        </div>

        {/* 4. Summary Stat Row */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Card 1 */}
          <div className="bg-[#f8f9fa] rounded-2xl p-3 border border-gray-50 flex flex-col text-left justify-between h-[68px]">
            <span className="text-[11.5px] font-medium text-gray-500 mb-1.5">
              On Progress
            </span>
            <span className="text-[13px] font-extrabold text-gray-800 tracking-tight leading-none">
              $61,523.00
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8f9fa] rounded-2xl p-3 border border-gray-50 flex flex-col text-left justify-between h-[68px]">
            <span className="text-[11.5px] font-medium text-gray-500 mb-1.5">
              Overdue
            </span>
            <span className="text-[13px] font-extrabold text-gray-800 tracking-tight leading-none">
              $4,765.98
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8f9fa] rounded-2xl p-3 border border-gray-50 flex flex-col text-left justify-between h-[68px]">
            <span className="text-[11.5px] font-medium text-gray-500 mb-1.5">
              Total
            </span>
            <span className="text-[13px] font-extrabold text-gray-800 tracking-tight leading-none">
              $89,364.98
            </span>
          </div>
        </div>

        {/* 5. Installment Toggle Control */}
        <div className="w-full bg-[#f1f1f3] p-1 rounded-full flex relative select-none">
          {/* Slider Highlight */}
          <motion.div 
            className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm"
            style={{ width: 'calc(50% - 4px)' }}
            animate={{ x: installmentType === '4' ? 0 : '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
          
          {/* Button 4 Installments */}
          <button
            onClick={() => setInstallmentType('4')}
            className={`flex-1 text-center py-2 text-[12px] font-bold z-10 transition-colors cursor-pointer ${
              installmentType === '4' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            4 Installment
          </button>
          
          {/* Button 6 Installments */}
          <button
            onClick={() => setInstallmentType('6')}
            className={`flex-1 text-center py-2 text-[12px] font-bold z-10 transition-colors cursor-pointer ${
              installmentType === '6' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            6 Installment
          </button>
        </div>

        {/* 6. Installment List */}
        <div className="flex flex-col gap-3.5 pb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={installmentType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3.5"
            >
              {currentList.map((item) => (
                <div 
                  key={item.id}
                  className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-gray-50 flex flex-col gap-3.5 text-left"
                >
                  {/* Top info row */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {/* Brand Thumbnail */}
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-inner">
                        {item.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[13.5px] font-bold text-gray-800 leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-medium text-gray-400 mt-0.5">
                          {item.merchant}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[14px] font-extrabold text-[#EF001B] tracking-tight">
                        {item.amount}
                      </span>
                      <span className="text-[10px] font-semibold text-gray-400 mt-0.5">
                        {item.dueDate}
                      </span>
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-[1px] bg-gray-100/80 w-full"></div>

                  {/* Bottom tracking row */}
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <div className="w-3 h-3 rounded-full border-2 border-gray-300 flex items-center justify-center text-[6px]">
                        ○
                      </div>
                      <span className="font-semibold text-gray-400">
                        {item.progressText}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => handlePayNowMock(item.name)}
                      className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer select-none"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
