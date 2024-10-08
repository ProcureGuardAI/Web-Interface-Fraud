import PropTypes from "prop-types"

function InputAndLabel({labelName, placeHolder, onChangeFunction, inputName}){
    return(
        <div>
            <label className="block font-bold px-2 text-xl py-2 ">{labelName}</label>
            <input
            placeholder={placeHolder}
            onChange ={onChangeFunction()}
            name = {inputName}
            className="border-2 border-gray-500 w-full rounded px-4 py-1 font-bold"
            />
        </div>
    )
}

InputAndLabel.propTypes = {
    labelName:PropTypes.string.isRequired,
    placeHolder:PropTypes.string.isRequired,
    onChangeFunction:PropTypes.func.isRequired,
    inputName:PropTypes.string,
};

export default InputAndLabel;