import PropTypes from "prop-types"

function InputAndLabel({labelName, placeHolder,  inputName}){
    return(
        <div>
            <label className="block text-gray-600 px-2 text-lg font-sm py-2 ">{labelName}</label>
            <input
            placeholder={placeHolder}
            name = {inputName}
            className="border-2 border-gray-500 w-full rounded outline-none px-4 py-1 focus:border-green-500 hover:border-green-500
            placeholder:focus:text-green-500"
            />           
        </div>
    )
}

InputAndLabel.propTypes = {
    labelName:PropTypes.string.isRequired,
    placeHolder:PropTypes.string.isRequired,
    inputName:PropTypes.string,
};

export default InputAndLabel;