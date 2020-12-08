import React from 'react';

const Transitions = () => {
  return (
    <div className='mt-20'>
      <div className='mt-5 mb-5 flex space-x-8'>
        <div className='space-y-4'>
          <h2 className='font-mono font-semibold text-black'>opacity</h2>
          <div className='h-24 w-24 bg-gray-200 rounded-lg shadow-xl opacity-100 hover:opacity-0 transition-opacity duration-500 ease-out'></div>
        </div>
        <div className='space-y-4'>
          <h2 className='font-mono font-semibold text-black'>colors</h2>
          <div className='h-24 w-24 bg-gray-200 rounded-lg shadow-xl hover:bg-teal-500 transition-colors duration-500 ease-in-out'></div>
        </div>
        <div className='space-y-4'>
          <h2 className='font-mono font-semibold text-black'>transform</h2>
          <div className='h-24 w-24 bg-gray-200 rounded-lg shadow-xl hover:-translate-y-2 transform transition-transform duration-200 ease-in'></div>
        </div>
        <div className='space-y-4'>
          <h2 className='font-mono font-semibold text-black'>default</h2>
          <div className='h-24 w-24 bg-gray-200 rounded-lg shadow-xl opacity-75 hover:opacity-100 hover:bg-indigo-700 hover:translate-x-5 transform transition duration-1000 ease-in-out'></div>
        </div>
      </div>
      <div className='h-16 w-16 bg-teal-400 opacity-25 rounded-lg shadow-xl transform hover:opacity-100 hover:translate-x-5 transition duration-500 animate-pulse'></div>
      <div className='mt-5 mb-5 flex'>
        <div className='px-4 box-content border-l-8 border-r-8 border-indigo-500 group space-y-4 w-80 mx-auto'>
          <div className='h-16 w-16 bg-teal-400 opacity-25 rounded-lg shadow-xl transform group-hover:translate-x-64 transition duration-100 ease-linear'></div>
          <div className='h-16 w-16 bg-teal-400 opacity-25 rounded-lg shadow-xl transform group-hover:translate-x-64 transition duration-300 ease-in delay-200'></div>
          <div className='h-16 w-16 bg-teal-400 opacity-25 rounded-lg shadow-xl transform group-hover:translate-x-64 transition duration-500 ease-out delay-1000'></div>
          <div className='h-16 w-16 bg-teal-400 opacity-25 rounded-lg shadow-xl transform group-hover:translate-x-64 transition duration-1000 ease-in-out delay-500'></div>
        </div>
      </div>
    </div>
  );
};

export default Transitions;
