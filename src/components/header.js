import React from 'react';
import Select from 'react-select';

const options = [
  {
    value: 'eng',
    label: 'ENG',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
  },
  {
    value: 'fra',
    label: 'FRA',
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png',
  },
];

const customSingleValue = ({ data }) => (
  <div className="flex items-center">
    {data.icon && (
      <img src={data.icon} alt="" className="w-5 h-5 rounded-full mr-1" />
    )}
    <span className="text-sm">{data.label}</span>
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '30px',
    height: '30px',
    fontSize: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '30px',
    padding: '0 6px',
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '30px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
  }),
};

function Header() {
  return (
    <div className="ml-[5%] md:ml-[5%] lg:ml-[5%] flex justify-between items-center mr-[2%] "> 
      <div className="flex flex-col lg:flex-row lg:space-x-6 font-bold">
        <div className="cursor-pointer flex items-center group">
          HOMES
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PAGES
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PRODUCTS
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center">
          CONTACT
        </div>
      </div>

      <div className="flex space-x-[20%] whitespace-nowrap mr-[15%] "> 
        <div className="flex items-center space-x-2">
          <i className="fa fa-store text-xl"></i>
          <span>Sell on Swoo</span>
        </div>

        <div className="flex items-center space-x-2">
          <i className="fa fa-lock text-xl"></i>
          <span>Order Tracking</span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Recently Viewed</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex items-center mr-9">
        <div className="ml-0 md:ml-4 mt-2 md:mt-0">
          <select className="p-1 text-lg">
            <option>USD</option>
          </select>
        </div>

        <div className="mx-2 w-[1px] h-8 bg-gray-300"></div>

        <div className="ml-0 md:ml-4 mt-2 md:mt-0 w-20 h-8 border-none text-sm">
          <Select
            styles={customStyles}
            options={options}
            components={{ SingleValue: customSingleValue }}
            defaultValue={options[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
