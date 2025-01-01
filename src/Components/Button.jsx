import React from 'react';

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 bg-black m-1 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
