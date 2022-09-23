import React from 'react';

function Input({ value, onChange }) {
  return (
    <div>
      <input
        type='number'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=' rounded-full bg-gray-400 px-4 py-2.5 text-black w-20 focus:ring-gray-700'
      />
    </div>
  );
}

export default Input;
