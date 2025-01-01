import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={` py-1 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
