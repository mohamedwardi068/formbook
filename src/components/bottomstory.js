import React from 'react';
import { Route, useParams } from 'react-router-dom';

function BottomStory() {
 
  const {id1,title1,image1,desc1,id2,title2,image2,price2,id3,title3,image3,desc3}=useParams();
  return (
    <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-3 mt-[2%] absolute left-1 ml-[15%] md:ml-[5%] justify-around w-[1575px]">
      
      <div className="relative flex p-4 rounded-3xl w-full md:w-[50%]">
        <img
          src={image1}
          alt={title1}
          className="w-[130%] h-[300px] object-cover rounded-xl"
        />
        <div className="absolute text-black p-4 h-[450px] text-center justify-center">
          <h1 className="text-sm ml-6">{title1}</h1>
    
          <p className="text-black text-sm md:text-xl mt-4 ml-4">{desc1}</p>
          <button className="bg-gray-900 text-white px-4 hover:bg-gray-800 hover:text-white w-[140.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[45%] justify-center ml-[0%] transform -translate-x-1/2 rounded-full font-bold">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="relative flex p-4 rounded-3xl w-full md:w-[30%]">
        <img
          src={image2}
          alt={title2}
          className="w-full h-[300px] absolute object-cover rounded-xl"
        />
        <div className="absolute text-black p-4 h-[450px] text-center justify-center ml-20">
          <h3 className="font-semibold text-white text-xl mr-5 mt-4">{title2}</h3>
      
          <p className="text-gray-500 text-xl md:text-xl mt-4">{desc1}</p>
          <p className="text-green-600 text-xl md:text-xl font-bold">${price2}</p>
        </div>
      </div>

      <div className="relative flex p-4 rounded-3xl w-full md:w-[30%]">
        <img
          src={image3}
          alt={title3}
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <div className="absolute text-black p-4 h-[450px] text-center justify-center ml-16">
          <h3 className="font-thin text-white">{title1}</h3>
          <h3 className="font-semibold text-xl text-white">{desc3}</h3>
       
          <button className="bg-white text-black px-4 hover:bg-gray-800 hover:text-white w-[140.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[45%] justify-center ml-[0%] transform -translate-x-1/2 rounded-full font-bold">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomStory;
