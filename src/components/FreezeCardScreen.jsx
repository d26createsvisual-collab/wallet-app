import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, Snowflake, CreditCard } from '@phosphor-icons/react';
import frostTextureImg from '../assets/frost-texture.png';

export default function FreezeCardScreen({ onBackToHome }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isMelting, setIsMelting] = useState(false);

  // MasterCard Logo component
  const MasterCardLogo = () => (
    <div className="flex items-center gap-1.5 select-none">
      <div className="flex -space-x-2">
        <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90"></div>
        <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-85"></div>
      </div>
      <span className="text-[16px] font-normal text-white font-display-cut">Master Card</span>
    </div>
  );

  // Trigger return to home after melt animation completes
  const handleUnfreeze = () => {
    setIsMelting(true);
    setIsFrozen(false);
    
    // Wait for the 400ms melt transition to finish before navigating back
    setTimeout(() => {
      onBackToHome();
    }, 450);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F5F5F7] select-none relative">
      {/* 1. HEADER ROW */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-150 bg-white">
        <button 
          onClick={onBackToHome}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black border border-gray-150 shadow-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          aria-label="Go back"
        >
          <CaretLeft size={20} weight="bold" />
        </button>
        <h1 className="text-[16px] font-bold text-gray-800 tracking-tight">
          Card Settings
        </h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      {/* 2. CARD VIEWPORT AREA */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        
        {/* Animated Pull-Out Card Container */}
        <motion.div
          initial={{ y: 350, scale: 0.9, rotate: -8, opacity: 0 }}
          animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setShowDetails(true)}
          style={{
            transformOrigin: 'bottom center',
          }}
          className="relative w-full aspect-[1.58/1] max-w-[342px]"
        >
          
          {/* THE CREDIT CARD */}
          <motion.div 
            animate={{
              boxShadow: isFrozen 
                ? '0 0 35px rgba(186, 230, 253, 0.5), 0 10px 20px rgba(0,0,0,0.15)' 
                : '0 10px 25px rgba(0,0,0,0.15)',
            }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="w-full h-full rounded-[24px] bg-[#121418] relative overflow-hidden select-none"
          >
            {/* INNER CARD CONTENT WRAPPER (rendered in z-30, above the frost layer for legibility) */}
            <div className="w-full h-full p-6 flex flex-col justify-between absolute inset-0 z-30">
              {/* Diagonal sheen sweep on the card body */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none z-10"></div>
              
              {/* Metallic light streaks */}
              <div className="absolute inset-0 pointer-events-none opacity-15 z-10">
                <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[50%] bg-gradient-to-r from-transparent via-white to-transparent rotate-[28deg] blur-md"></div>
              </div>

              {/* CARD HEADER */}
              <div className="flex justify-between items-start z-10">
                <MasterCardLogo />
                
                {/* Chip Icon */}
                <div className="w-8 h-6 bg-gradient-to-tr from-amber-200 to-amber-400 rounded-md relative opacity-85 shadow-sm">
                  <div className="absolute inset-1 border border-amber-600/30 rounded-[2px] grid grid-cols-3 gap-[1px]">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                  </div>
                </div>
              </div>

              {/* CARD DETAILS (Revealed after landing) */}
              <div className="flex-1 flex flex-col justify-end mt-4 z-10 text-left">
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.08,
                          }
                        }
                      }}
                      className="flex flex-col gap-4.5"
                    >
                      {/* 1. Card Number (staggered) */}
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="text-[20px] font-normal text-white tracking-[0.08em] font-display-cut leading-none"
                      >
                        3745 6987 4096 3960
                      </motion.div>

                      {/* 2. Metadata: Holder, Expiry, CVV (staggered) */}
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="flex justify-between items-end border-t border-white/10 pt-3.5"
                      >
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-normal text-gray-400 font-display-cut leading-none mb-1">
                            Cardholder
                          </span>
                          <span className="text-[14px] font-medium text-white font-display-cut mt-0.5">
                            DEEPAK
                          </span>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex flex-col">
                            <span className="text-[11px] font-normal text-gray-400 font-display-cut leading-none mb-1">
                              Expires
                            </span>
                            <span className="text-[14px] font-medium text-white font-display-cut mt-0.5">
                              12/28
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-normal text-gray-400 font-display-cut leading-none mb-1">
                              CVV
                            </span>
                            <span className="text-[14px] font-medium text-white font-display-cut mt-0.5">
                              321
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FROST TEXTURE OVERLAY (opacity & scale animation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ 
                opacity: isFrozen ? 0.65 : 0,
                scale: isFrozen ? 1 : 0.96
              }}
              transition={{ 
                duration: isFrozen ? 0.7 : 0.45, 
                ease: 'easeOut' 
              }}
              className="absolute inset-0 z-20 pointer-events-none rounded-[24px] overflow-hidden"
            >
              <img 
                src={frostTextureImg} 
                alt="Frost Texture" 
                className="w-full h-full object-cover select-none"
                style={{ mixBlendMode: 'screen' }} 
              />
            </motion.div>

            {/* FROZEN STATE STATUS PILL (Fade in on top of frost) */}
            <AnimatePresence>
              {isFrozen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ delay: 0.15, duration: 0.25 }}
                  className="absolute top-4 left-4 z-40 bg-sky-400/90 text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-sky-300/30"
                >
                  <Snowflake size={11} weight="fill" className="animate-spin-slow" />
                  <span>Frozen</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>

      {/* 3. ACTION FOOTER (Freeze / Unfreeze Buttons) */}
      <div className="p-6 bg-white border-t border-gray-150 flex flex-col gap-3 select-none">
        
        {/* Toggle Button Wrapper */}
        <div className="w-full relative h-[52px]">
          <AnimatePresence mode="wait">
            {!isFrozen && !isMelting ? (
              // FREEZE CARD BUTTON
              <motion.button
                key="freeze-btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsFrozen(true)}
                className="absolute inset-0 w-full h-full bg-[#1c1c1e] text-white hover:bg-black font-semibold text-[14px] rounded-full flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98 transition-transform duration-100"
              >
                <Snowflake size={18} weight="regular" />
                <span>Freeze Card</span>
              </motion.button>
            ) : (
              // UNFREEZE CARD BUTTON
              <motion.button
                key="unfreeze-btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleUnfreeze}
                className="absolute inset-0 w-full h-full bg-transparent border-2 border-[#1c1c1e] text-[#1c1c1e] hover:bg-gray-50 font-semibold text-[14px] rounded-full flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform duration-100"
              >
                <Snowflake size={18} weight="fill" className="text-sky-500" />
                <span>Unfreeze Card</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Informative text below button */}
        <p className="text-[11px] font-medium text-gray-400 text-center px-4 leading-normal mt-1">
          Freezing your card temporarily blocks new purchases, online transactions, and ATM cash withdrawals. You can unfreeze it at any time.
        </p>
      </div>
    </div>
  );
}
