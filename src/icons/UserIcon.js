import React from 'react';
import IconBase from './IconBase';

export const UserIcon = ({ width, height }) => {
  return (
    <IconBase width={width} height={height}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      />
    </IconBase>
  );
};
