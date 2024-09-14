import React from 'react';

function Detailsbook({ title, price, description, image, genre, author }) {
  return (
    <div className="p-4 w-full h-full">
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>
      <div className="flex justify-between items-start">
        <div className='w-1/2 pr-4'>
          <img src={image} alt={title} className="h-[80%] w-[70%] object-cover" />
        </div>
        <div className='w-1/2 pl-2  '>
          
          <p className="text-gray-700">{description}</p>
          <p className="text-gray-700">Genre: {genre}</p>
          <p className="text-gray-700">Author: {author}</p>
          <p className="text-gray-700 font-bold text-right">{price}$</p>
          <button className=" bg-blue-500 text-white px-4 py-2 rounded">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detailsbook;
