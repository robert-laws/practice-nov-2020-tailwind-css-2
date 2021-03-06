import React from 'react';
import IconBase from './IconBase';

export const SearchIcon = ({ width, height }) => {
  return (
    <IconBase width={width} height={height}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </IconBase>
  );
};
