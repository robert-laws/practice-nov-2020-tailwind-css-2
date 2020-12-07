import React from 'react';

const Stories = () => {
  return (
    <ul className='flex space-x-6'>
      <li className='flex flex-col items-center space-y-1'>
        <div className='relative bg-gradient-to-tr from-yellow-400 to-pink-500 p-1 rounded-full'>
          <a
            className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
            href='/'
          >
            <img
              className='w-24 h-24 rounded-full'
              src='https://placekitten.com/200/200'
              alt='Cat'
            />
          </a>
          <button className='absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center align-top font-mono hover:bg-blue-700'>
            +
          </button>
        </div>
        <a href='/'>You</a>
      </li>
      <li className='flex flex-col items-center space-y-1'>
        <div className='bg-gradient-to-tr from-yellow-400 to-pink-500 p-1 rounded-full'>
          <a
            className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
            href='/'
          >
            <img
              className='w-24 h-24 rounded-full'
              src='https://placekitten.com/203/200'
              alt='Cat'
            />
          </a>
        </div>
        <a href='/'>Cat Two</a>
      </li>
      <li className='flex flex-col items-center space-y-1'>
        <div className='bg-gradient-to-tr from-yellow-400 to-pink-500 p-1 rounded-full'>
          <a
            className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
            href='/'
          >
            <img
              className='w-24 h-24 rounded-full'
              src='https://placekitten.com/202/200'
              alt='Cat'
            />
          </a>
        </div>
        <a href='/'>Cat Three</a>
      </li>
      <li className='flex flex-col items-center space-y-1'>
        <div className='bg-gradient-to-tr from-yellow-400 to-pink-500 p-1 rounded-full'>
          <a
            className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
            href='/'
          >
            <img
              className='w-24 h-24 rounded-full'
              src='https://placekitten.com/201/200'
              alt='Cat'
            />
          </a>
        </div>
        <a href='/'>Cat Four</a>
      </li>
    </ul>
  );
};

export default Stories;
