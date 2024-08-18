import React from 'react';

function PreOrder() {
  return (
    <div className="bg-gray-700 text-white rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:justify-around items-center sm:ml-[15%] md:mr-[2%] sm:mr-[2%] md:ml-[5%] ">
      <div className="mt-2 text-center sm:text-left">
        <p className="text-cyan-400 font-semibold text-xl">PRE ORDER</p>
        <p className="text-sm text-gray-400">BE THE FIRST TO OWN</p>
        <p className="mt-2">
          From <span className="font-bold">$399</span>
        </p>
      </div>
   
      <div className="flex mt-4 sm:mt-0 sm:ml-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/82bf/3460/f6f3941a03a374fce63fd1cd60fbf087?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIGNNjrAledCERIIRBx-TzIBZSKnGDTgGMdwzRCrnIkLOjoYEViZKWs93FAv0KzocUbVpvNqXAg6OG7yagtn3gJcwSTq-qWOFXvQruBcnSELmcjN05CvRR62A~gEG6znLCIataf7F2Bm6Kj4HCC6W919Qg20ru3tYluibMUP-S2xqLKSq7BmhZ0ZNsOMHp-iECAWVKSYeo--5AU9mdQb-m6wA0VqVvmNsrgtrVG96hsd686AN1Yr7I1niUS2p~fa1SHrUpnvWei8v4TWXRGjW58h1XvJLNBX7Nk~NUyFq~SwJuLhP9gwATj9Wi~vrtETdk6BY~ejuPtsi4lLeHKuHA__" 
          alt="Watch"
          className="w-[100px] h-[100px] mb-2"
        />
      </div>

      <div className="mt-4 sm:mt-2 text-center sm:text-left sm:ml-4">
        <p className="text-cyan-400 font-semibold">Oppio Watch Sport</p>
        <p className="text-cyan-400 font-semibold">Series 8</p>
        <p className="text-4xl mt-2 font-semibold text-gray-300">A healthy leap ahead</p>
      </div>

      <button className="bg-white text-gray-800 py-3 px-6 w-full sm:w-[200px] h-[50px] rounded-full mt-4 sm:mt-5 font-bold text-center">
        Discover Now
      </button>
    </div>
  );
}

export default PreOrder;
