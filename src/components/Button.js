import React from 'react';

const Button = ({ text, type, ...props }) => {
  return (
    <button {...props} type={type}>
      {text}
    </button>
  );
};

export default Button;
