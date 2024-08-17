import React from 'react';
import products from "../db/productdb";
import Product from '../components/product'; 

function ListProduct() {
  return (
    <>
      <div className='bg-[#EBEEF6] ml-[5%] mr-[5%] mt-[2%] mb-[3%] md:ml-[5%]'>
        <h1 className='font-bold text-3xl ml-2 mt-6 mb-3 text-center sm:text-left'>Best Weekly Deals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              imageUrl={product.imageUrl}
              discount={product.discount}
              totalStock={product.totalStock}
              sold={product.sold}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListProduct;
