// src/components/Inputs/InputAndLabel.js

import React from 'react';
import PropTypes from 'prop-types';

function InputAndLabel({ labelName, placeHolder, inputName, onChange }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-gray-700 font-medium">{labelName}</label>
      <input
        type={labelName.toLowerCase() === 'password' ? 'password' : 'text'}
        placeholder={placeHolder}
        name={inputName}
        onChange={onChange}  // Pass onChange handler here
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-500 transition-all duration-200 placeholder-gray-400 text-gray-800"
      />
    </div>
  );
}

InputAndLabel.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  onChange: PropTypes.func,  // Ensure onChange is defined as a prop type
};

export default InputAndLabel;
