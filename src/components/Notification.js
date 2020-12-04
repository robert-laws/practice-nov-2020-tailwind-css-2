import React from 'react';
import NoticeImage from '../images/notice-icon.svg';

export const Notification = () => {
  return (
    <div className='p-6 m-3 space-x-4 rounded-xl shadow-lg flex max-w-sm mx-auto bg-white dark:bg-black'>
      <div className='flex-shrink-0'>
        <img className='h-12 w-12' src={NoticeImage} alt='Notification' />
      </div>
      <div>
        <div className='text-xl font-medium text-black dark:text-white'>
          Notification...
        </div>
        <p className='text-gray-500 text-black dark:text-white'>
          You have a new notification
        </p>
      </div>
    </div>
  );
};
