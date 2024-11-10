import React from 'react';

function InputAndLabel({ labelName, placeHolder, inputName, value, onChange, readOnly, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputName} className="text-gray-700 font-medium">{labelName}</label>
      <input
        type={type || 'text'}
        id={inputName}
        name={inputName}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        readOnly={readOnly}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}

export default InputAndLabel;
