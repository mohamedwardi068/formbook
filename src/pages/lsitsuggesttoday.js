import React from 'react';
import sugg from '../db/suugestTodayDb';
import Producttt from '../components/producttt';


function Suggest() {
    const Bestsell = [
        '🔥 Recommended For you ', ' ⚡Top Best Seller', ' ⭐ Top Rated', '70% Off', '50% Off',
        '30% Off', 
    ];

    return (
        <div className='bg-white p-9 mt-8 ml-5'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl text-left'>Suggest Today</h2>
                <div className="text-right mt-4">
                    <a href="/products" className="text-black font-bold hover:underline">VIEW ALL &gt;</a>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {Bestsell.map((item, index) => (
                    <button 
                        key={index} 
                        className="bg-transparent border border-gray-500 text-gray-800 px-5 py-2 rounded-full text-sm sm:text-base font-medium text-center whitespace-nowrap mt-3 hover:bg-purple-800"
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
                {sugg.map((product) => (
                    <Producttt
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        imageUrl={product.imageUrl}
                        totalStock={product.totalStock}
                        sold={product.sold}
                        rating={product.rating}
                        reviewsCount={product.reviewsCount}
                        isTopRated={product.isTopRated}
                        isBestSeller={product.isBestSeller}
                        isPreOrder={product.isPreOrder}
                    />
                ))}
                
            </div>
            
            
                
            
        </div>
    );
}

export default Suggest;