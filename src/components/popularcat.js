  import React, { useEffect } from 'react';
  import { useapi } from '../context/apicontext';

  function PopularCat() {
    const {category}=useapi();
    // useEffect(()=>{
      
    // },[category])


    
    return (
      <div className="mx-8 my-4 ml-[15%] md:ml-[5%] mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Popular Categories</h2>
          <a className="text-sm text-blue-600 hover:underline">
            View All
          </a>
        </div>
        <div className="flex overflow-x-hidden mt-4 space-x-4 ml-[0.5%] justify-around">
          {category.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-around">
              <img src={category.image} alt={category.name} className="w-[110px] h-[110px] object-cover rounded-full" />
              <span className="text-sm font-bold mt-2 text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default PopularCat;
