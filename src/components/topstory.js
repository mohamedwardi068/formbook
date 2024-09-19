import React from 'react';

function TopStory({title,image,desc}) {

  return (
    <>
      <div className="flex flex-col bg-white ml-[5%] md:ml-[5%] w-[90%] md:w-[1750px] h-auto">
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-1">
          <div className="relative flex p-4 rounded-2xl w-full md:w-[60%] h-[350px] md:h-[500px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbg_wHLT5Er8SnJaWCMyzLnpJdzMg63KuDZQ&s"
              alt="Les Misérables"
              className="w-full h-full object-fill rounded-md"
            />
            <div className="absolute text-white p-4">
              <div className="text-left ml-4 md:ml-7 mt-4 md:mt-10 text-2xl md:text-4xl">
                <h3 className="font-thin">Les Misérables</h3>
                
              </div>
              <div className="text-gray-200 text-sm md:text-xl mt-4 md:mt-7 ml-5 md:ml-11">
                <h6>Epic tale of justice, redemption, and revolution.</h6>
              </div>
              <button className="bg-[#4B3EC4] border border-[#4B3EC4] text-white mt-6 md:mt-32 px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-[#4B3EC4] ml-5 md:ml-12 font-bold w-[130px] md:w-[150px] h-[40px]">
                SHOP NOW
              </button>
            </div>
            <div className="absolute bottom-0 right-0 mb-7 mr-[40%] md:mr-[50%]">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 w-[100px] md:w-[120px] h-[40px] flex justify-between items-center mb-8 mr-5">
                <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
                <div className="absolute bottom-0 right-0 mb-12 mr-[40%] md:mr-[50%] flex space-x-2">
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-600 w-[10px] h-[10px]"></button>
                  <button className="bg-gray-300 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-600 w-[10px] h-[10px]"></button>
                </div>
                <span className="flex flex-col items-center text-xs">
                  {'nxt'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex bg-white p-4 rounded-3xl w-full md:w-[30%] h-[350px] md:h-[500px]">
            <img
              src="https://images.epagine.fr/781/9781861972781_1_75.jpg"
              alt="48 laws of power"
              className="w-full h-[100%] object-fill rounded-md"
            />
            <div className="absolute text-white p-4 h-full text-center flex flex-col justify-center">
              <h1 className="text-lg md:text-3xl font-bold">48 laws of power </h1>
              <p className="text-white text-sm md:text-xl mt-2">From $50</p>
              <button className="bg-white text-black px-4 py-2 hover:bg-gray-800 hover:text-white w-[150px] md:w-[189px] h-[40px] md:h-[53px] mt-4 md:mt-9 rounded-full font-bold">
                DISCOVER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopStory;
