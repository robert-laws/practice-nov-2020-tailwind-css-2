import React from 'react';

const IconBase = ({ width = 'w-4', height = 'h-4', children }) => {
  return (
    <svg
      className={`${width} ${height} flex-none`}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      {children}
    </svg>
  );
};

export default IconBase;
