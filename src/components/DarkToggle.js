import React from 'react';

export const DarkToggle = () => {
  const darkModeToggle = () => {
    let htmlElement = document.querySelector('html');
    htmlElement.className === 'dark'
      ? htmlElement.classList.remove('dark')
      : htmlElement.classList.add('dark');
  };

  return (
    <div className='max-w-sm mx-auto'>
      <button
        onClick={darkModeToggle}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};
