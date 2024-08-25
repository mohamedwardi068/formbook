import React from 'react';

import Product from '../components/product'; 
import { useapi } from '../context/apicontext';

function ListProduct() {
  const { newBooks } = useapi();
  console.log("rrrrr",newBooks)

  return (
    <>
      <div className='bg-[#EBEEF6] ml-[5%] mr-[2%] mb-[2%] md:ml-[5%] mt-[22%]'>
        <h1 className='font-bold text-3xl ml-2 mt-6 mb-3 text-center sm:text-left'>Best Weekly Deals</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newBooks.length !== 0 ? (
            newBooks.map((product) => (
              <Product
                key={product.id}
                title={product.bookName}
                price={product.price}
                coverImg={product.coverImg}
              />
            ))
          ) : (
            <div>Error: No products available</div>
          )}
        </div>
        
        <div className="flex justify-center mt-2 mb-6">
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 mb-6">
            See All Products (63)
          </button>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
