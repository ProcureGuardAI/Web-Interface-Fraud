import InputAndLabel from "../components/Inputs/InputAndLabel";

function TransactionRequest () {
    let currencies = ["USD", "KES", "TZS", "UGDS"]
    return(
        <div className="flex justify-center items-center bg-gray-50 h-screen">
            {/* Form */}
            <form className="b-2 w-4/12 bg-white px-8 py-8 shadow-2xl shadow-green-300">
                {/* Form header */}
                <div className="border-b-2 pb-4">
                    <h1 className="text-green-700 font-light text-3xl px-4">New transaction request.</h1>
                </div>
                {/* Actual irequest */}
                <div>
                    <InputAndLabel
                    labelName="Customer name"
                    placeHolder="John Doe"
                    />
                    <div className="flex justify-between">
                        <InputAndLabel
                        labelName="Amount"
                        placeHolder="100"
                        />
                        <div>
                            <label className="block px-2 text-lg font-bold py-2 " >Currency</label>
                            <select
                            className="border-2 border-gray-500 w-full bg-white  rounded outline-none px-4 py-1 focus:border-green-500 hover:border-green-500
                            placeholder:focus:text-green-500"
                            >
                                <option value="">Currency</option>
                                {currencies.map((currency, index)=><option key={index} value={currency}>{currency}</option>)}
                            </select>
                        </div>
                    </div>

                    <InputAndLabel
                    labelName="Phone Number"
                    placeHolder="7xxxxxx"
                    />   

                    <div>
                        <label className="block px-2 text-lg font-bold py-2 ">Description</label>
                        <textarea 
                        className="border-2 border-gray-500 w-full h-36 rounded outline-none px-4 py-1 focus:border-green-500 hover:border-green-500
                        placeholder:focus:text-green-500"
                        placeholder="More description of transaction"
                        >

                        </textarea>
                    </div>

                    <InputAndLabel
                    labelName="Security key"
                    placeHolder="****"
                    />                 
                </div>
                {/* Accept request button */}
                <div className="flex justify-between mt-4">
                    <button
                    className="text-red-600 border-red-600 px-4 py-2 border-2  border-red-600"
                    >CANCEL</button>
                    <input 
                    type = "submit"
                    value="PROCEED"
                    className="text-green-600 border-green-600 px-4 py-2 border-2 border-green-600"
                    />                    
                </div>
            </form>
        </div>
    )
}

export default TransactionRequest;