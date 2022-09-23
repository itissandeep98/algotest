import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [show, setShow] = useState(false);
  // console.log('options', options);
  // console.log('value', value);
  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className='text-black  focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center bg-gray-400 hover:bg-gray-700 hover:text-gray-300 focus:ring-gray-700'>
        {options.filter((option) => option.value === value)[0]?.label}
        <svg
          className='ml-2 w-4 h-4'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'></path>
        </svg>
      </button>
      <div
        className={`z-10 w-max  rounded divide-y absolute divide-gray-100 shadow bg-gray-700
            ${!show && 'hidden'}`}>
        <ul className='py-1 text-sm  text-gray-200'>
          {options.map((option, index) => (
            <li key={index} onClick={() => onChange(option.value)}>
              <a className='block py-2 px-4 pr-10  hover:bg-gray-600 hover:text-white'>
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
