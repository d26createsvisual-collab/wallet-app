import React from 'react';
import TransactionItem from './TransactionItem';

export default function PaymentHistory() {
  const transactions = [
    {
      id: 'mac',
      type: 'mac',
      title: 'Mac mini M4',
      merchant: 'Amazon.com',
      amount: '-$628.71',
      date: '1 January, 2026',
      tag: '% amazon sale offer',
    },
    {
      id: 'keyboard',
      type: 'keyboard',
      title: 'Kreo Gaming Keyboard',
      merchant: 'Amazon.com',
      amount: '-$29.25',
      date: '2 January, 2026',
      tag: "Amazon's Choice",
    },
    {
      id: 'ps5',
      type: 'ps5',
      title: 'PS5',
      merchant: 'Flipkart',
      amount: '-$836.94',
      date: 'due date 18',
      tag: '',
    },
  ];

  return (
    <div className="px-5 py-3 flex flex-col gap-3">
      {/* Header */}
      <h2 className="text-[17px] font-bold text-gray-800 text-left tracking-tight">
        Payment History
      </h2>
      
      {/* Transaction List */}
      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <TransactionItem 
            key={tx.id}
            type={tx.type}
            title={tx.title}
            merchant={tx.merchant}
            amount={tx.amount}
            date={tx.date}
            tag={tx.tag}
          />
        ))}
      </div>
    </div>
  );
}
