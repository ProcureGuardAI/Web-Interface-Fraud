import InputAndLabel from "../components/Inputs/InputAndLabel";

function SignUp(){
    return(
        <div className="flex justify-center items-center h-screen">
            <form className="b-2 w-4/12 bg-white px-8 py-8 shadow-2xl shadow-green-300">
                {/* Form header */}
                <div className="border-b-2 pb-4">
                    <h1 className="text-green-700 font-light text-3xl px-4">Register Account</h1>
                </div>
                <div>
                    <div className="flex  justify-between">
                        <InputAndLabel
                        placeHolder="John"
                        labelName="First name"
                        />
                        <InputAndLabel
                        placeHolder="Doe"
                        labelName="Last name"
                        />
                    </div>

                    <InputAndLabel
                    placeHolder="johndoe@gmail.com"
                    labelName="email"
                    />

                    <InputAndLabel
                    placeHolder="712345678 or 102345678"
                    labelName="phone number"
                    />

                    <InputAndLabel
                    placeHolder="johndoe"
                    labelName="email"
                    />

                    <InputAndLabel
                    placeHolder="*******"
                    labelName="password"
                    />

                    <InputAndLabel
                    placeHolder="*********"
                    labelName="confirm password"
                    />
                  
                </div>
                <div className="mt-8 flex justify-center">
                    <input
                    type="submit"
                    value="CREATE ACCOUNT"
                    className="bg-green-600 text-white py-2 w-6/12 text-center rounded"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp;