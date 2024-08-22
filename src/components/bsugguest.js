import React from 'react';

function Productttt({
  id, title, price, originalPrice, imageUrl, max, min, rating, reviewsCount, isTopRated, isBestSeller, isPreOrder
}) {
  const discount = ((originalPrice - price) / originalPrice) * 100;

  // List of products eligible for 0% Installment
  const installmentEligible = [
    'Toshuib 2-Door Inverter 1200L Refrigerator', 
    'Epson Mini Portable Projector Wireless', 
    'TCL OLED 4K Ultra HD, 47\" Smart TV', 
    'BE Home Security Camera'
  ];

  // List of products that are marked as New
  const newEligible = [
    'Epson Mini Portable Projector Wireless', 
    'BE Home Security Camera'
  ];
  
  // List of products that are Out of Stock
  const ooT = [
    'TCL OLED 4K Ultra HD, 47" Smart TV'
  ];

  return (
    <div className="w-full sm:w-[300px] bg-gradient-to-b from-white from-70% via-gray-600 via-80% to-white to-95% rounded-lg overflow-hidden h-auto border border-gray-400 mx-auto sm:ml-3 mb-4">
      <div className='p-5'>
        <div className="relative">
          <div className='mb-5'>
            {installmentEligible.includes(title) && (
              <div className="bg-transparent text-red-500 border border-red-500 text-xs font-bold px-4 py-1 rounded-full absolute bottom-[100%] right-1/2 sm:right-[61%] transform translate-x-1/2 sm:translate-x-0 text-nowrap">
                0% Installment
              </div>
            )}
            <button className="bottom-[100%] right-2 sm:right-[1%]  text-black rounded-full w-[30px] h-[30px] absolute">
              <i className="fa fa-heart text-black text-xl"></i>
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
          <div className="flex items-center mb-3">
            {discount > 0 && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {discount.toFixed(0)}% OFF
              </div>
            )}
            {isPreOrder && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                Pre-order
              </div>
            )}
            {isTopRated && (
              <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                TOP RATED
              </div>
            )}
            {isBestSeller && (
              <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                BEST SELLER
              </div>
            )}
            {newEligible.includes(title) && (
              <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                New
              </div>
            )}
            {ooT.includes(title) && (
              <div className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                Out Of Stock
              </div>
            )}
          </div>

          <h2 className="text-gray-800 text-lg font-bold mt-2">{title}</h2>

          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, index) => {
              const starRating = index + 1;
              return (
                <i
                  key={index}
                  className={`fa fa-star ${
                    starRating <= rating
                      ? 'text-green-500'
                      : 'text-gray-500'
                  } w-4 h-4`}
                ></i>
              );
            })}
            <span className="text-gray-600 text-sm ml-2">
              ({reviewsCount})
            </span>
          </div>

          <div className="flex items-baseline mt-2">
            <span className="text-red-500 text-xl font-semibold">${price}</span>
            <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
          </div>
          
          {/* Display Max and Min price for Epson Mini Portable Projector Wireless */}
          {title === 'Epson Mini Portable Projector Wireless' && (
            <div className="flex items-baseline mt-2">
              <span className="text-black text-lg font-bold">
                Price Range: $205.00{min} -<span className='absolute top-[672%]'> $400.00{max}</span>
              </span>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Productttt;