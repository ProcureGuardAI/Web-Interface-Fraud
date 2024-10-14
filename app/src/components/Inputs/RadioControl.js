function RadioControl({ selectedOption, options, onChangeFunction }) {
    return (
      <div>
        {options.map((option, index) => (
          <label
            className={`bg-gray-50 border-2 ${
              selectedOption === option.value
                ? 'border-green-500'
                : 'border-gray-200'
            } text-gray-600 rounded-xl mx-1 px-4 py-2`}
            key={index}
          >
            <input
              type="radio"
              checked={selectedOption === option.value}
              onChange={() => onChangeFunction(option.value)}
              className="mx-1 not-sr-only"
            />
            {option.name}
          </label>
        ))}
      </div>
    );
  }
  
  export default RadioControl;
  