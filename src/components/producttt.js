import React, { useState } from 'react';

function Producttt({
  title, price, originalPrice, imageUrl, totalStock, sold, rating, reviewsCount, isTopRated, isBestSeller, isPreOrder, isNew
}) {
  // State to track if the heart button is clicked
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // Calculate the discount percentage
  const discount = originalPrice ? ((originalPrice - price) / originalPrice) * 100 : null;

  return (
    <div className="w-full sm:w-[350px] bg-gradient-to-b from-white from-70% via-gray-500 via-80% to-white to-95% rounded-lg overflow-hidden h-auto border border-gray-400 mx-auto sm:ml-3 mb-4">
      <div className='p-5'>
        <div className="relative">
          <div className='mb-5'>
            <div className="bg-transparent text-red-500 border border-red-500 text-xs font-bold px-4 py-1 rounded-full absolute bottom-[100%] right-1/2 sm:right-[61%] transform translate-x-1/2 sm:translate-x-0 text-nowrap ">
              0% Installment
            </div>
            <button
              className={`right-2 sm:right-[1%] bg-transparent bottom-[100%] rounded-full w-[35px] h-[35px] absolute justify-center border border-gray-500 `}
              onClick={() => setIsHeartClicked(!isHeartClicked)} // Toggle clicked state
            >
              <i className={`fa fa-heart ${isHeartClicked ? 'text-purple-600' : 'text-black'} text-base hover:text-purple-600 text-black`}></i>
            </button>
          </div>
          <div className='mt-5'>
            <img
              src={imageUrl}
              alt="Product"
              className="w-full h-[300px] object-cover mt-2"
            />
          </div>
        </div>

        <div className="p-4">
          <div className="flex mb-3 mr-1">
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
            {isNew && (
              <div className="bg-[#41C2F2] text-white text-xs font-bold px-2 py-1 rounded-full ml-2 text-nowrap">
                NEW
              </div>
            )}
          </div>

          <h2 className="text-gray-800 text-lg font-bold mt-5">{title}</h2>

          {rating !== null && reviewsCount !== null && (
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
          )}

          <div className="flex items-start justify-start text-xl mt-2  ]">
            <span className={`${discount > 0 ? 'text-red-500' : 'text-black'} font-semibold flex-grow-0`}>
              ${price}
            </span>
            {originalPrice && discount > 0 && (
              <span className="text-gray-500 line-through ml-2 flex-grow-0 ">${originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producttt;
