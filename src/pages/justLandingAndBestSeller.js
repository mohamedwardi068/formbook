import React from 'react';

function JustLandingAndBestSeller() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Just Landing Section */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-3xl font-bold text-black ">Just Landing</h2>
          <a href="#" className="text-black hover:underline font-semibold">VIEW ALL &gt;</a>
        </div>
        <div className="space-y-5  ">
          <div className="flex items-center space-x-4 bg-white rounded-lg ">
            <img src="https://s3-alpha-sig.figma.com/img/3f7c/0b43/e52fdb4d6af7fe7951b8168bb91ba513?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=okg4TtlxRKSi85GIUPk1pvUDAGEfTfYOx1z3CQ78DnffE5HTDnonN6QjTNZDIpGqssx2Lzq~KJVBRlDJc~3QtAWiafUr5Ck3h1O~KxeFSD9c-5jV4cqsDgzom0g4V7q9QfZU~RLZyuzhRkGWpSabjVMUzVfe30G3hgmVwwKC5fDjg2t6KgiJX7xTjtQujjwjELelXtHZS8B1jgyQUUc58h18rXgdVkaUIygNzVg1hgSTxWKO0rjs3MfaVW05DJysYLV3p8Qwe6~L0TB39THqeuvjwPXQsxYRLtHeocP0sJBV1QIa8JSGsGa7jIwxNfkLNxjnX6XhmZM9D6Cbf~EQqA__" alt="TV" className="w-36 h-24 object-cover rounded-lg ml-4" />
            <div>
              <h3 className="text-xl font-semibold mt-4">How to choose size of Television fit to your living room</h3>
              <p className="text-sm text-gray-500 mt-6">45 Minutes ago in<span className='text-black font-bold'> EXPERIENCE</span></p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white rounded-lg">
            <img src="https://s3-alpha-sig.figma.com/img/cb0d/e63f/b2950aa3fbf6af177de11b32d8f7faa5?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-QfGSgbIpmoBi-fIems9pfG4DaMVyA29ylnj0GIOxZEeLQlUFJe9CZztsQA9YWR0oWn2b7ww3~HZpzPz6-mc93L5kY8WUmbN4rTA8hkr22ypqHBJ6olhmi-B~1fJPMoNQ-o~6GvlyMud3yprJm4-GAh~f-tar0KD0SWg2Oo4Qu2FZWyfnr~PiXfOWMRqW7TFRrt-hwOd3EcfccOz4OmXqgFszIu~hxWOiHN4RlT-p~VcJBfQx~nf1vpieyfGT~RSuhpqsQuJ7SLultdPRjjUVUxlCBAlVqsIV4grZGd3Ma~1zQODBf-AWfAH8P9HjKt1akxXOkOztKPLbEgC0QPxg__" alt="Washing Machine" className="w-36 h-24 object-cover rounded-lg ml-4" />
            <div>
              <h3 className="text-xl font-semibold mt-4">Introduce New Generation of Eluxtro Washing Machine 2023</h3>
              <p className="text-sm text-gray-500 mt-6">2 Days ago in<span className='text-black font-bold'> TECHNOLOGY</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Selling Speakers Section */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-6 relative">
        <h2 className="text-3xl font-bold mb-4 text-black">Best Selling Speakers</h2>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <span className="text-green-500 text-xl">★★★★★</span>
            <span className="ml-2 text-lg font-semibold">Fast shipping and flexible price!</span>
          </div>
          <p className="text-gray-700 mb-4">
            I used to have experience shopping on much platforms as Amazon, Eboy, Esto, etc. And see that Swoo Market really great. It’ll be my 1st choice for any shopping experience. Competitive price, fast shipping and support 24/7. Extremely recommended!
          </p>
          <div className="flex items-center space-x-4">
            <img src="https://s3-alpha-sig.figma.com/img/1c7a/dfac/3dc445e62865f158209aff903a014444?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XtN3OeL4qgsU76h3RH-cDLF941EmHVpt1R5kWaGOqQ1AkKp7adCcCMQ66s-B1wvu6MgL4vfa5YeKBA7xf7Kwe~mADQJ6btIw9olWIBypDtoMK0C2Kax2xSVdCpbu1633LM8BcWnU5HaqTcbGn0b9p15Ijo63P77yaEfqmhs1C9zrvWgPlfHu6UoN1scGGJZJ9QJYikQKp8iYHyQOdPzlx-NF60m~YsIo5o~USaQIEunnlzx3MKN2pABFQRxZQsS1RnE76JO7rhHwHcqjaC3l5lvXBKtuB4zXP0Pt9Xv2W4G3LtV97o6xHpRn8r5L74IXlY1Z0i5YqTHXdbNTxSlyCA__" alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Drake N. <span className="text-green-500">VERIFIED BUYER</span></p>
              <p className="text-sm text-gray-500">Brooklyn, Los Angeles</p>
            </div>
          </div>
          <a href="#" className="text-blue-500 hover:underline hover:text-purple-950 mt-4 block ml-56">Marshall Standmore Speaker / Black</a>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-[16%] right-4 transform -translate-y-1/2 flex space-x-2 ">
          <button className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 ">&lt;</button>
          <button className="bg-white text-black p-2 rounded-full shadow hover:bg-gray-200">&gt;</button>
        </div>
      </div>

    </div>
  );
}

export default JustLandingAndBestSeller;
