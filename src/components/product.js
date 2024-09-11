import React from 'react';

function Product({
  _id, 
  price, 
  bookName, 
  description, 
  coverImg, 
  originalPrice, 
  rating, 
  isPreOrder, 
  isTopRated, 
  isBestSeller, 
  sold, 
  totalStock
}) {
  const soldPercentage = (sold / totalStock) * 100;
  const discount = ((originalPrice - price) / originalPrice) * 100;

  return (
    <div className="w-full sm:w-[350px] bg-gradient-to-b from-white from-70% via-gray-500 via-80% to-white to-95%  rounded-lg overflow-hidden h-auto border border-gray-400 mx-auto sm:ml-3 mb-4 ">
      <div className='p-5'>
        <div className="relative">
          <div className='mb-5'>
            <div className="bg-transparent text-red-500 border border-red-500 text-xs font-bold px-4 py-1 rounded-full absolute bottom-[100%] right-1/2 sm:right-[65%] transform translate-x-1/2 sm:translate-x-0 text-nowrap ">
              0% Installment
            </div>
            <button className="right-2 sm:right-[1%] bg-transparent bottom-[100%] text-white rounded-full w-[35px] h-[35px] absolute justify-center border border-gray-500 bg-purple-800" >
              <i className="fa fa-heart text-base"></i>
            </button>
          </div>
          <div className='mt-2  inset-0 z-10 '>
            <img
              src={coverImg}
              alt="Product"
              className="w-[500px] h-[400px] object-cover  mb-5 "
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
          </div>

          <h2 className="text-gray-800 text-lg font-bold mt-2">{bookName}</h2>

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
              (5)
            </span>
          </div>

          <div className="flex items-baseline mt-2">
            <span className="text-red-500 text-xl font-semibold">${price}</span>
            <span className="text-black line-through ml-2">${originalPrice}</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 mb-2">
            <div
              className="bg-[#4B3EC4] h-2.5 rounded-full"
              style={{ width: `${soldPercentage}%` }}
            ></div>
          </div>
          <span className="text-gray-600 text-sm mt-2">Sold: {sold}/{totalStock}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;