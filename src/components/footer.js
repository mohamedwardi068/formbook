import React from 'react';
import { FaShippingFast, FaUndoAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa';

function Footer() {
  return (
    <div className="border-t border-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-4 md:space-y-0 md:text-left text-gray-800">

        <div className="flex items-center space-x-2">
          <FaShippingFast className="text-purple-600 w-6 h-6" />
          <span className="font-semibold">FREE SHIPPING OVER $99</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaUndoAlt className="text-purple-600 w-6 h-6" />
          <span className="font-semibold">30 DAYS MONEY BACK</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaShieldAlt className="text-purple-600 w-6 h-6" />
          <span className="font-semibold">100% SECURE PAYMENT</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaHeadset className="text-purple-600 w-6 h-6" />
          <span className="font-semibold">24/7 DEDICATED SUPPORT</span>
        </div>

      </div>
      <div className='border border-gray-200 border-collapse w-[80%] mt-6 ml-52'>

      </div>
    </div>
  );
}

export default Footer;