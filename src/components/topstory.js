import React from 'react';

function TopStory() {
  return (
    <>
      <div className="flex flex-col bg-white h-[475px] ml-[15%] w-[1750px]">
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-1">
          <div className="relative flex p-4 rounded-2xl w-full md:w-[60%] h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/8012/bd49/2e326035bc994cb0fb99eb88b79fa1bd?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~D5Pz0lcrkmfgqkgcdTG8qaPgZ-b2hX5NGJPtvZq-oPTHngjECcCFhjvGnBoIWfkBF50RmEbMIju3YartakjH8dXcaiyMgjYilpLs2XBJsNFY1i0fKP-20JczjcJU3jZQcg4yAwmOBy10H~J1l7CZOWOVHrSfNVxsmf5u2lQcs8EMiJLL9J0vNhBWz0tnzl84OTNVFK4m~u15nni9j0gCY~~SOcQWHlkfV9ealYfWWGQKanij7Ln5JcCWBKBA169AdG~xOrcT67jZNogAGVkxrd-QxPBiiLyHv-PBcGYjSJgYn4Y80hs-x4MrEhllla5Ei0Lx0j4Z5F25E6N5BEDQ__"
              alt="Noise Cancelling Headphone"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute text-white p-4">
              <div className="text-left ml-7 mt-10 text-3xl md:text-4xl">
                <h3 className="font-thin">EKO 40"</h3>
                <h3 className="font-thin ">Android</h3>
                <h3 className="font-thin">TV</h3>
              </div>
              <p className="text-gray-200 text-sm md:text-xl mt-7 ml-11 ">
                <h6>Smart Full HD </h6><h6>Android TV with </h6><h6>Google Assistant</h6>
              </p>
              <button className="bg-[#4B3EC4] border border-[#4B3EC4] text-white mt-6 md:mt-40 px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-[#4B3EC4] ml-12 font-bold w-[150px] h-[40px]">
                SHOP NOW
              </button>
            </div>
            <div className="absolute bottom-0 right-0 mb-7 mr-[50%]">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 w-[120px] h-[40px] flex justify-between items-center mb-8 mr-5">
                <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
                <div className="absolute bottom-0 right-0 mb-12 mr-[50%] flex space-x-2">
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

          <div className="relative flex bg-white p-4 rounded-3xl w-full md:w-[30%] h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/b331/c5f5/83cf29622be77c3b13f08b8f3957775c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D36uXESSNm72BfX8719pwFaNwBBWiPDq6KFCH2PuEQdCbb3ZyAN37IKupSLHGYkTiGVtwg58TLgszErYDh78nrfHVt4ixv1v~nWgpkGPM7dMXI4ThZmwjkAKOQpb1YCo4-mg1dZ4THRxU7ziwUMk-cy5eYBSuNm3mXL7LcjwIo12JJ-T~mwDfciFrdftC9zPl0IiPnK~ohaZYxlRVbr3ess~O8PbUFlhN7ytiI~svKJikvVNZJ8GM0QBxeFbDmxG5h1BjaNvaqCbi8Z9HlXthMv4LWmRORKj7BQa3pVkuRuBDA21tAlBdUv9TPzlbM5~POQoAr2CT9TFRfdWtomwtA__"
              alt="Humidifying Fan"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute text-white p-4 h-[450px] text-center justify-center ">
              <h1 className="text-xl md:text-3xl font-bold text-center">Humidifying Fan</h1>
              <p className="text-white text-sm md:text-xl mt-4 text-center">From $299</p>
            </div>
            <button className="bg-white text-black px-4  hover:bg-gray-800 hover:text-white w-[189.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[5%] justify-center ml-[50%] transform -translate-x-1/2 rounded-full font-bold">
              DISCOVER NOW
            </button>
          </div>
          
      </div>
      </div>
    </>
  );
}

export default TopStory;
