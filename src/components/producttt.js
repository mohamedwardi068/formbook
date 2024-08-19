import React from 'react';

function Producttt({
 title, price, originalPrice, imageUrl,  isTopRated, isBestSeller, isPreOrder
}) {
  
  const discount = ((originalPrice - price) / originalPrice) * 100;

  return (
    <div className="w-full sm:w-[300px] bg-gradient-to-b from-white from-70% via-gray-500 via-80% to-white to-95%  rounded-lg overflow-hidden h-auto border border-gray-400 mx-auto sm:ml-3 mb-4">
      <div className='p-5'>
        <div className="relative">
          <div className='mb-5'>
            
            <div className="bg-transparent text-red-500 border border-red-500 text-xs font-bold px-4 py-1 rounded-full absolute bottom-[100%] right-1/2 sm:right-[61%] transform translate-x-1/2 sm:translate-x-0 text-nowrap ">
              0% Installment
            </div>
            <button className=" right-2 sm:right-[1%] bg-transparent bottom-[100%] text-white rounded-full w-[35px] h-[35px] absolute  justify-center border border-gray-500 ">
              <i className="fa fa-heart text-black text-base "></i>
            </button>
          </div>
          <div className='mt-5'>
            <img
              src={imageUrl}
              alt="Product"
              className="w-[500px] h-[300px] object-cover mt-2"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="flex  mb-3 mr-1">
            {discount > 0 && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full text-nowrap">
                {discount.toFixed(0)}% OFF
              </div>
            )}
            {isPreOrder && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 text-nowrap">
                Pre-order
              </div>
            )}
            {isTopRated && (
              <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 text-nowrap">
                TOP RATED
              </div>
            )}
            {isBestSeller && (
              <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 text-nowrap">
                BEST SELLER
              </div>
            )}
          </div>

          <h2 className="text-gray-800 text-lg font-bold mt-2">{title}</h2>


          <div className="flex items-baseline mt-2">
            <span className="text-red-500 text-xl font-semibold">${price}</span>
            <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
          </div>

          
          
        </div>
      </div>
    </div>
  );
}

export default Producttt;
