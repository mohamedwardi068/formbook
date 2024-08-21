import React from 'react';

function PopCat() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-5 ml-[2%] mr-[2%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Popular Brands</h2>
        <a href="/all-brands" className="text-black font-semibold hover:underline">VIEW ALL &gt;</a>
      </div>
      <div className="relative">
        <button className="absolute left-[-2.5%] top-1/2 transform -translate-y-1/2 bg-white text-xs p-2 rounded-lg shadow-md  h-[40%] w-[35px] ">
        <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
        </button>

        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide justify-between">
          <div className="flex-none w-[550px] h-[250px] relative rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/e739/460c/d108735741d1d9055086c2f0a6405e00?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKinc0kMpUikd-ajbVu83XKkFIBIoCf4dpAkPXrOZMJ8ogOgpqUy08Wpr8aqwmeVOfMDovp5N-nFqL0GkbDhIqBTQ8RJLH6-neNiohTK8aE0TRtZwUPU8I~fPbOQ2fWkgHvlLkZgc9BURALcYf1~ZF1mOFIJBfF9CxwJa~LjduKJtO8Kt7hrrbD-E5v33Np~JUbL6egoPpS5MKWXXsAwounTim9oC3OkR0Q-SEc~a2shZVMP6G4pEbOw~q~LMnoteH-urvIofi4xFprLjrgifMeS3geyqolWhsuPAlSsMxY-aITmBbqaNBJnbvHmCLSUkqimqzxfEA3bj5-B2DBq-w__"
              alt="VR Headset"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-gray-600 text-lg mb-2" >ACELOS 3D</p>
              <h3 className="text-xl font-bold mb-20 text-black">VR Headset and</h3>
              <h3 className="text-xl font-bold   text-black absolute top-[30%]"> Controllers</h3>

              <button className="mt-2 bg-gray-900 text-white px-4 py-2 rounded-full">Shop Now</button>
            </div>
          </div>

          <div className="flex-none w-[550px] h-[250px] relative rounded-lg">
            <img
              src="https://s3-alpha-sig.figma.com/img/c5a9/afa5/9955fcc816679572270614f87c4a9856?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RF68KZlAVPW6fNKgounHU-fYI~DwdQmgNpLo1~rZxEoqCdXWofaxHrK-wGwEDQhlFWs8saJTy8e6hZThC6ZIliQaZP2H4DLQ6wJe6URqYOFUZ52tR0ZHXp-nntlF6KwjBxMrnSj2PKHrxM9lmq9XA4T20rxae2M5us9tfiyMFLd~hjHL7sJr~EfjmzgWeQ~-s0X-uv8gnrpltDj8eqao38iqzz-YLk4kpMB1GiGKukGeo~n1VCHDs0v9czh2iezH5rPjFf~bAPQNgxjIZ0Eh0MTaz0PWcG0EQVCcsHh8ywf2iMw23mfwS2pg0UeeL2ropEknoWIcEy8R8jYmO-QBTQ__"
              alt="Massage Chair"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-white text-lg mb-16">Fuka Relax Full Body</p>
              <p className="text-white text-lg absolute top-[20%]"> Massage Chair</p>

              <h3 className="text-xl font-bold absolute top-[-40%]">Massage Chair Luxury</h3>
              <button className="mt-2 bg-white text-black px-4 py-2 rounded-full">Shop Now</button>
            </div>
          </div>

          <div className="flex-none w-[550px] h-[250px] relative rounded-lg ">
            <img
              src="https://s3-alpha-sig.figma.com/img/a1fe/17b5/9a15a7fda1331178c0eb12d7e00cbf3c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m7wKrMtT6ZBcUaxk3bPCCasaxNIxD2xM76~g7rOjCjaP6O3ETfWZGmHxZEKPg7~ByrKbxXQo92UBrQZIIyOsCNV1ZjiMY~nNTDTYUFlUCYLrU8TtD0KsBfKVQzevZaV~OdUbo6l9BQChNJ8f-HJ3EeTCjW6Ss99UPjhGtzQcwTPMj6TQ4nvpdLbzmq7HInP4lF2zddxRhjUbfCCsEoSj1BlfKylFDTo~KSqc~9Q48UF4onUwhimT0UQUXcbtMMHGynA~527v0FBI3YvZdAyYE8~D9p5sV~Yap6QfXt81onX-i~WklSM5bdV8BxryVnm6tLRLjsIXRpDcg4cEe9YI8A__"
              alt="Action Camera"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-gray-300 text-sm">From</p>
              <p className="text-white text-xl">$169</p>

              <h3 className="text-2xl font-bold absolute top-[-120%]">OKODo</h3>
              <h3 className="text-xl font-bold absolute top-[-80%] text-gray-300">hero 11+</h3>
              <h3 className="text-xl font-bold absolute top-[-50%] text-gray-300">black</h3>


              <button className="mt-2 bg-white text-black px-4 py-2 rounded-full">Shop Now</button>
            </div>
          </div>
        </div>


        <button className="absolute left-[100%] top-1/2 transform -translate-y-1/2 bg-white text-xs p-2 rounded-lg shadow-md h-[40%] w-[35px]  ">
        <span className="flex flex-col items-center text-xs">
                  {'nxt'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
        </button>
      </div>
    </div>
  );
}

export default PopCat;