import React from 'react';

function InputField({ label, type, value, onChange, placeholder, className }) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default InputField;
