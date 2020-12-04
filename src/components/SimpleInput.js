import React from 'react';

export const SimpleInput = () => {
  return (
    <div className='mt-6 max-w-xl mx-auto'>
      <form>
        <input
          type='text'
          className='border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-3 py-2 rounded-lg shadow'
          placeholder='Enter your email'
        />
        <button className='bg-purple-600 hover:bg-purple-800 text-white px-3 py-2 rounded-lg shadow'>
          Submit
        </button>
      </form>
    </div>
  );
};
