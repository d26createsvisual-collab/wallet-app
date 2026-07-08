import React, { useState } from 'react';
import MobileFrame from './components/MobileFrame';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import ActionRow from './components/ActionRow';
import PaymentHistory from './components/PaymentHistory';
import BottomNav from './components/BottomNav';
import FreezeCardScreen from './components/FreezeCardScreen';
import WalletScreen from './components/WalletScreen';

import AnalyticsScreen from './components/AnalyticsScreen';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showFreeze, setShowFreeze] = useState(false);

  return (
    <MobileFrame>
      {/* 1. Fixed Status Bar at the top of the phone screen */}
      <StatusBar />
      
      {showFreeze ? (
        /* 2. Full screen Freeze Card setting and animation flow */
        <FreezeCardScreen onBackToHome={() => setShowFreeze(false)} />
      ) : (
        <>
          {/* 3. Screen switching content based on activeTab */}
          {activeTab === 'home' && (
            <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none pb-[105px]">
              <Header />
              <BalanceCard />
              <ActionRow onFreezeClick={() => setShowFreeze(true)} />
              <PaymentHistory />
            </div>
          )}

          {activeTab === 'wallet' && (
            <WalletScreen />
          )}

          {activeTab === 'stats' && (
            <AnalyticsScreen onBackToHome={() => setActiveTab('home')} />
          )}

          {activeTab === 'profile' && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-gray-400 select-none">
              <span className="text-[12px] font-bold uppercase tracking-widest">
                Profile Screen Placeholder
              </span>
            </div>
          )}
          
          {/* 4. Floating Bottom Navigation Bar */}
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
      )}
    </MobileFrame>
  );
}

export default App;
