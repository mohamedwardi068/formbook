import React from 'react';

function BestSellingSpeakers() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="flex grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className=" p-6  flex flex-col justify-center">
       
        <h4 className="text-gray-500 text-sm uppercase  top-[772%]">Amazon Award-Winning Speaker</h4>
          <h1 className="text-4xl font-bold text-gray-900 mb-24">Devialet Phantom II Speaker</h1>
          <p className="text-lg text-gray-600  top-[798%] flex">STARTING AT PRICE</p>
        
          <p className="text-green-500 text-3xl font-bold  top-[700%] ml-44  ">$1,590</p>
          
          <img
            src="https://s3-alpha-sig.figma.com/img/c9b5/661f/5a5b4605fd579311193cf6326287d27d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4CmClMFVPtuVx5h1CUpwhn9mZ38~LgG~KMUCZC~4iedUf88vhx5MhkB7vE9gyuUwkByD8cfxWskya7~Sj2K1lHTSO9zxH9CwKOk1HnrlfSv8XVJRhea2z9lYPFd13JY7bHkbzeFGrXuAHtcT3HOi5PyyemvdpX6EBBf0B7Py9-csK2GYzrklPo2chphHHpwlJxxmz3xijPF3dQzn7dYTTg2IFfWhj1LLdt35Aiz6S42bhk85zDjd2UidStbLC-BsaE83iPOYHcsyZIHijBhjC94S73NWbgGjI6SrI7LSc96kHtR~TV4Fa0xB~xbC3bJjO9hWzrulJrzkvSJAAGM2g__" 
            alt="Devialet Phantom II Speaker"
            className="w-[50%] h-[30%] object-cover ml-24"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Best Selling Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <div className="absolute top-2 left-2 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-full border border-red-500">
                0% Installment
              </div>
              <button className="absolute top-2 right-2 text-black rounded-full w-[30px] h-[30px]">
                <i className="fa fa-heart text-black text-xl"></i>
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/aa89/1c08/bde139c2665152af93fe6518a4888b82?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im2HItjscn5uzqBW3EQPYvl5k1WeMSJ~rx5xDFgUTU9DwpSO2GlJ6lNPYs76emn9XefXbRyMwRnWBT4XGXwuyYIzO86wDIwOgZly4GE5QrExllQ0Qq4dcFCe-uc4MMdOY9vcQ5YgddiF~8J9FT87DLRTLmz19lbO4NK7wNDDwjQEp68PCLAAkdlzrbUzICPJwr7fjAgbke2YmZ3CD5vF2Q6KHaB0YUz0DCDqRSk60zqTq6jKlyM5Nb00j9N5tY~uz~j~PMfmGyEKabD-Y886tGWvn~MVElAo4KjrvdQ4oT4Jxovtf43p3z3q-sDQqoNoBKDOTzyvrlF1ADzNDtGXsQ__" 
                alt="Marshall Stanmore II Wireless Bluetooth Speaker"
                className="w-[100%] h-80 object-cover mb-4"
              />
              <h3 className="text-gray-900 text-lg font-semibold">Marshall Stanmore II Wireless Bluetooth Speaker</h3>
              <div className="flex items-center mt-2 mb-2">
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-gray-300"></i>
                <span className="text-gray-600 text-sm ml-2">(2)</span>
              </div>
              <p className="text-gray-900 font-bold">$325.00 - $410.00</p>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              
              <button className="absolute top-2 right-2 text-black rounded-full w-[30px] h-[30px]">
                <i className="fa fa-heart text-black text-xl"></i>
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/ac9d/7651/c682d5c8fbb6e4f15c42529bce877d88?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7Q26Vt9zLFTsaTmJa90jyqx7hVQ-k12Fe23q7h78JxKOsfC~Z0I30tkLP1V~0~gsVqbgXZtR~fetUjw8Xv-y~ngtyP7UAbclugfWGb2OpdEssv~zSeC6yNoyHHiLabSJe0nzYctuPvEXbpOc24IaMEe1QexCjT9V-voJFwRXtR63Zq6EZGhUyOZYT6JO-7R7V~qDWGm8d-SooqKo12j4LyXHyRC3H4l9HIoI5VrcdmiqgHIo~O57gc9Nwke0EEI~vZ6hl219jfNr6tNv-JLCDMYn3H0U0IdVsTMx8CG5QUZjiGgw~icBGlhfz11BbzCkM2wXYh6iDJG79eR72lnFA__" 
                alt="Bose SoundLink III Speaker"
                className="w-[100%] h-96 object-cover mb-4"
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                TOP RATED
              </div>
              <h3 className="text-gray-900 text-lg font-semibold">Bose SoundLink III Speaker</h3>
              <div className="flex items-center mt-2 mb-2">
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <span className="text-gray-600 text-sm ml-2">(12)</span>
              </div>
              <p className="text-gray-900 font-bold">$149.00</p>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button className="absolute top-2 right-2 text-black rounded-full w-[30px] h-[30px]">
                <i className="fa fa-heart text-black text-xl"></i>
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/f2ca/df8f/267401c5dcf63fd25470007bdb71fc3f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~wr-ZGn9YG3rMCB6KSZ3oHnY3qd7KWeZIRIe9OEA2jWC50wVfdtSD~BvS7bKpZxuLQOxqsc4QiYoBRY7a8IErx1UcfOT~JrCGEP~H0yQeOK5I5IAAS7E5q9tQ4fDg7-~CxlUqTmWYdx053YuFr4HuWqh-ejdS04OHJJlaZSyB~iV1zzAcPNZOZeGPUDUHViQmMghmmt1S6bH7S6bgd~-PUTQCYTWO-26T~tfeI0ytMUdQ8~Z1oCyG8wXBv3e0gESMHUEYoHIzEWua4daod6D-DcZa9ig1TyCqF~Drb2IDSkvzbB~lJHALr3z32lN7RSM0cCm8QRh-C1wveI1MOd6g__" 
                alt="B&O Beolit 20 Powerful Portable Wireless Bluetooth"
                className="w-[100%] h-80 object-cover mb-4"
              />
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </div>
              <h3 className="text-gray-900 text-lg font-semibold">B&O Beolit 20 Powerful Portable Wireless Bluetooth</h3>
              <div className="flex items-center mt-2 mb-2">
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-green-500"></i>
                <i className="fa fa-star text-gray-300"></i>
                <span className="text-gray-600 text-sm ml-2">(3)</span>
              </div>
              <p className="text-gray-900 font-bold">$159.00</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default BestSellingSpeakers;
