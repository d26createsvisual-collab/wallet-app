import React, { useState } from 'react';
import { Eye, EyeSlash, CaretRight, AppleLogo, AmazonLogo } from '@phosphor-icons/react';
import Header from './Header';

// Custom Flipkart Icon
function FlipkartIcon() {
  return (
    <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Yellow Shopping Bag Body */}
      <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" fill="#FFE11B" />
      {/* Flipkart Blue Smiley / Tag */}
      <path d="M7 14C7 14 8.5 16.5 12 16.5C15.5 16.5 17 14 17 14" stroke="#2874F0" strokeWidth="2" strokeLinecap="round" />
      {/* Blue Bag Handles */}
      <path d="M8 10V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V10" stroke="#2874F0" strokeWidth="2" />
    </svg>
  );
}

export default function WalletScreen() {
  const [showTotalBalance, setShowTotalBalance] = useState(true);
  const [limitVal, setLimitVal] = useState(659.49);
  const maxLimit = 43865.00;

  // Custom styling for active/inactive slider track
  const stripedTrackStyle = {
    background: 'repeating-linear-gradient(-45deg, #f3f4f6, #f3f4f6 3px, #e5e7eb 3px, #e5e7eb 6px)',
  };

  const handleSetLimitsMock = () => {
    alert('Set card limits configuration is currently in mock mode.');
  };

  // Helper to format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(val);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F5F5F7] select-none">
      {/* 1. Header (Reuses standard Header component) */}
      <Header />

      {/* Scrollable Contents */}
      <div className="flex-1 overflow-y-auto px-5 pb-24 flex flex-col gap-5 scrollbar-none">
        
        {/* 2. TOTAL BALANCE CARD */}
        <div className="w-full bg-white rounded-[24px] p-6 shadow-sm border border-gray-50 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col text-left">
              <span className="text-[12px] font-medium text-gray-500 mb-1.5">
                Total Balance
              </span>
              <span className="text-[28px] font-extrabold text-gray-900 tracking-tight leading-none">
                {showTotalBalance ? '$548,750.87' : '••••••••'}
              </span>
            </div>
            
            {/* Eye toggle button */}
            <button 
              onClick={() => setShowTotalBalance(!showTotalBalance)}
              className="w-8 h-8 rounded-full border border-gray-150 flex items-center justify-center text-gray-500 hover:text-gray-800 bg-white shadow-sm cursor-pointer active:scale-90 transition-transform"
              aria-label={showTotalBalance ? "Hide balance" : "Show balance"}
            >
              {showTotalBalance ? <Eye size={16} weight="regular" /> : <EyeSlash size={16} weight="regular" />}
            </button>
          </div>

          <div className="h-[1px] bg-gray-100/80 w-full"></div>

          {/* Sub Stats columns */}
          <div className="grid grid-cols-2 gap-3">
            {/* Payment Next */}
            <div className="bg-[#f8f9fa] rounded-2xl p-3 border border-gray-50 flex flex-col text-left">
              <span className="text-[11.5px] font-medium text-gray-500 mb-1.5">
                Payment Next
              </span>
              <span className="text-[13px] font-bold text-gray-800 tracking-tight">
                $43,865.00
              </span>
            </div>

            {/* Payment Completed */}
            <div className="bg-[#f8f9fa] rounded-2xl p-3 border border-gray-50 flex flex-col text-left">
              <span className="text-[11.5px] font-medium text-gray-500 mb-1.5">
                Payment Completed
              </span>
              <span className="text-[13px] font-bold text-gray-800 tracking-tight">
                $547,876.04
              </span>
            </div>
          </div>
        </div>

        {/* 3. CARD LIMITS SECTION */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-[16px] font-bold text-gray-800 text-left tracking-tight">
            Card Limits
          </h2>
          
          <div className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-gray-50 flex flex-col gap-4">
            
            {/* Slider track area */}
            <div className="flex flex-col gap-3.5 pt-1">
              
              {/* Interactive custom range slider */}
              <div className="relative w-full h-6 flex items-center">
                {/* 1. Track background (inactive striped) */}
                <div 
                  className="absolute left-0 right-0 h-2 rounded-full"
                  style={stripedTrackStyle}
                ></div>

                {/* 2. Active track fill (gradient blue) */}
                <div 
                  className="absolute left-0 h-2 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full pointer-events-none"
                  style={{ width: `${(limitVal / maxLimit) * 100}%` }}
                ></div>

                {/* 3. Draggable Handle */}
                <div 
                  className="absolute w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-md pointer-events-none transition-all duration-75 flex items-center justify-center"
                  style={{ left: `calc(${(limitVal / maxLimit) * 100}% - 10px)` }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>

                {/* 4. Invisible native range slider overlay */}
                <input 
                  type="range"
                  min="0"
                  max={maxLimit}
                  step="10"
                  value={limitVal}
                  onChange={(e) => setLimitVal(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  aria-label="Set card limit"
                />
              </div>

              {/* Progress Labels */}
              <div className="flex justify-between items-center text-[11px] font-medium leading-none">
                <span className="text-gray-500">Today Limits</span>
                <div className="flex items-center gap-1 font-mono">
                  <span className="text-gray-800 font-bold">{formatCurrency(limitVal)}</span>
                  <span className="text-gray-400">/{formatCurrency(maxLimit)}</span>
                </div>
              </div>
            </div>

            {/* Set Card Limits action button row */}
            <button 
              onClick={handleSetLimitsMock}
              className="w-full bg-[#f8f9fa] hover:bg-gray-100 rounded-2xl p-3 px-4 border border-gray-50/50 flex justify-between items-center cursor-pointer transition-colors active:scale-[0.99] duration-75"
            >
              <span className="text-[12.5px] font-bold text-gray-800">
                Set card limits
              </span>
              <CaretRight size={16} weight="bold" className="text-gray-400" />
            </button>

          </div>
        </div>

        {/* 4. TRANSACTIONS SECTION */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-[16px] font-bold text-gray-800 text-left tracking-tight">
            Transactions
          </h2>

          <div className="flex flex-col">
            {/* TODAY GROUP */}
            <div className="flex flex-col mb-4">
              <div className="flex items-center gap-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <span>Today</span>
                <div className="flex-1 h-[1px] bg-gray-200/80"></div>
              </div>
              
              {/* Row 1: Amazon */}
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-inner">
                    <AmazonLogo size={20} weight="fill" className="text-[#FF9900]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-gray-800 leading-tight">Amazon.com</span>
                    <span className="text-[10px] font-medium text-gray-400 mt-1">Nov 18, 2025 • 9:34 AM</span>
                  </div>
                </div>
                <span className="text-[14px] font-extrabold text-gray-800 tracking-tight">$86.59</span>
              </div>

              {/* Row 2: Flipkart */}
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f6f6f9] border border-gray-100 flex items-center justify-center text-blue-600 shadow-inner">
                    <FlipkartIcon />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-gray-800 leading-tight">Flipkart.com</span>
                    <span className="text-[10px] font-medium text-gray-400 mt-1">Sep 24, 2025 • 8:49 AM</span>
                  </div>
                </div>
                <span className="text-[14px] font-extrabold text-gray-800 tracking-tight">$30.45</span>
              </div>
            </div>

            {/* YESTERDAY GROUP */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider select-none">
                <span>Yesterday</span>
                <div className="flex-1 h-[1px] bg-gray-200/80"></div>
              </div>
              
              {/* Row 3: Apple.com */}
              <div className="flex justify-between items-center py-3.5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-inner">
                    <AppleLogo size={20} weight="fill" className="text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-gray-800 leading-tight">Apple.com</span>
                    <span className="text-[10px] font-medium text-gray-400 mt-1">Oct 22, 2025 • 10:00 AM</span>
                  </div>
                </div>
                <span className="text-[14px] font-extrabold text-gray-800 tracking-tight">$260.92</span>
              </div>

              {/* Row 4: Apple.com (Installment or other purchase) */}
              <div className="flex justify-between items-center py-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-inner">
                    <AppleLogo size={20} weight="fill" className="text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-gray-800 leading-tight">Apple.com</span>
                    <span className="text-[10px] font-medium text-gray-400 mt-1">Oct 21, 2025 • 9:50 AM</span>
                  </div>
                </div>
                <span className="text-[14px] font-extrabold text-gray-800 tracking-tight">$800.00</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
