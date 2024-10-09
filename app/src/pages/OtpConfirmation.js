import InputAndLabel from "../components/Inputs/InputAndLabel";


function OtpConfirmation (){

    return(
        <div className="flex justify-center items-center bg-gray-50 h-screen">
            {/* Form */}
            <form className="b-2 w-4/12 bg-white px-8 py-8 shadow-2xl shadow-green-300">
            <div className="flex justify-between py-8">
                {/* Back button */}
                <button>icon Back</button>
            </div>
                {/* Form tittle */}
                <div className="border-b-2 pb-4">
                    <h1 className="text-green-700 font-light text-3xl px-4">Confirm otp</h1>
                    
                </div>
                {/* Form components */}
                <div>
                    {/* Input */}
                    <InputAndLabel
                    placeHolder="otp"
                    labelName="otp:"
                    />
                 </div>
                    {/* Submit and resend button */}
                    <div className="flex justify-between my-8">
                        <button>Resend</button>
                        <input
                        type = "submit"
                        value="SUBMIT REQUEST"
                        className="text-green-600 border-green-600 px-4 py-2 border-2 border-green-600"
                        />
                    </div>
            </form>

        </div>
    )
}

export default OtpConfirmation;