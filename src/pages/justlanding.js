import React from 'react';


import Producttt from '../components/producttt';
import productss from '../db/justLandingdb';
function JustLanding() {
    const Bestsell = [
        'TV/Televisions ', 'PC Gaming', 'Computers', 'Cameras',
        'Gadgets', 'Smart Home', 'Sport Equipments',
      ];
    
  return (
    <div className='bg-white p-9 mt-8 ml-5'>
        <div className='flex justify-between'>
      <h2 className='font-bold text-3xl  text-left'>Just Landing</h2>
      <div className="text-right">
        <a href="/products" className="text-black font-bold hover:underline">VIEW ALL &gt;</a>
      </div></div>
      <div className="flex flex-wrap gap-2 mt-3 mb-3">
        {Bestsell.map((item, index) => (
          <button 
            key={index} 
            className="bg-transparent border border-gray-500 text-gray-800 hover:bg-[#4B3EC4] hover:text-white b px-5 py-2 rounded-full text-sm sm:text-base font-medium text-center whitespace-nowrap mt-3 "
          >
            {item}
          </button>
        ))}
      </div>
      <div className='flex space-x-5  '>
      {productss.map((product) => (
            <Producttt
              key={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              imageUrl={product.imageUrl}
              totalStock={product.totalStock}
              sold={product.sold}
              rating={product.rating}
              reviewsCount={5}
              isTopRated={product.isTopRated}
              isBestSeller={product.isBestSeller}
              isPreOrder={product.isPreOrder}
              isNew={product.isNew}
            />
          ))}
      </div>
      <div className="absolute  right-0 mb-7 mr-[50%] md:mr-[42%]">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 w-[100px] md:w-[200px] h-[40px] flex justify-between items-center mb-8 mr-5 ">
                <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
                <div className="absolute bottom-0  mb-12 right-[32%] flex space-x-2 text-center ">
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-500 w-[10px] h-[10px]"></button>
                </div>
                <span className="flex flex-col items-center text-xs">
                  {'nxt'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              </button>
            </div>
      
    </div>
  );
}

export default JustLanding;
