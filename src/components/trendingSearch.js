import React from 'react';

export default function TrendingSearch() {
  const trendingItems = [
    'Vacuum Robot', 'Bluetooth Speaker', 'Oled TV', 'Security Camera', 'Macbook M1',
    'Smart Washing Machine', 'iPad Mini 2023', 'PS5', 'Earbuds',
    'Air Condition Inverter', 'Flycam', 'Electric Bike', 'Gaming Computer',
    'Smart Air Purifier', 'Apple Watch'
  ];

  return (
    <div className="p-6 mt-[20%] ml-[13%] relative">
      <h2 className="text-3xl font-bold mb-4 text-black">Trending Search</h2>
      <div className="inline-flex flex-wrap gap-2 mt-5">
        {trendingItems.map((item, index) => (
          <span 
            key={index} 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-base font-medium text-center whitespace-nowrap mt-3"
            style={{ flex: '1 1 calc(10% - 8px)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
