import React from 'react';

export const Navigation = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center text-white font-bold'>
              Website
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Dashboard
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-1 align-middle justify-end text-right text-white mr-20 md:mr-0'>
            <button
              className='flex items-center justify-center rounded-md border border-gray-300 bg-gray-700 hover:bg-gray-300 hover:text-black py-1 px-4'
              type='button'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
