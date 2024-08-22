import React from 'react';

function Subscribe() {
  return (
    <div
      className="bg-[#4B3EC4] text-white py-6 flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://s3-alpha-sig.figma.com/img/b7b3/0117/6effb21b1deeaefaa655206e786c5b6d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUxIQEuoXdxUVW4AJXApW9uik0t1RGDYhlxVRgY-xXgnANUiZMe4grFLOJMqv7tyWEbSaVKqE0AjS8otvkZOzTFKwjJa~9ogesq59O21mE4AAM2XZ7XwrWcj-hpsI4UC17cA56kZ2Xo1yLIjY4IxjyMjj4X8ZPAV7qAS~95B72ZbyFJn5LRFx9b0CGwwHr5l0yXsTp5LAUqu3Udq1PQu4M3FuhlfOMuk229Dz69cU4lBQx0ozStK32x2c6lnZ6Jc3Nv1fW7uEYr0wxJQek8DpBHzd30fZuNj7WtpPA4gMokp4lJCjlaj5aH4kfRM9abzoZ29YcE~Q2QHxep9hAFNWg__')",
        backgroundPosition: ' center',
        backgroundSize: 'contain',
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <p className="text-lg md:text-2xl font-semibold mr-72">
          <span className="font-bold">Subscribe</span> & Get
          <span className="text-blue-400"> 10% OFF </span>
          for first order
        </p>
        <form className="flex items-center mt-4 md:mt-0 relative">
          <div className="relative w-full">
            <input
              type="email"
              className="p-3 px-6 pl-12 pr-28 rounded-full text-black focus:outline-none w-[150%]"
              placeholder="Enter your email address"
            />
            <span className="absolute left-3 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25m19.5 0V6.75A2.25 2.25 0 0021.75 6H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v10.5"
                />
              </svg>
            </span>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 absolute left-[107%] top-1/2 transform -translate-y-1/2"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
