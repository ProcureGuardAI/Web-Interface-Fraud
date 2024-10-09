import InputAndLabel from "../components/Inputs/InputAndLabel";


function Login(){
    return(
        <div className="flex justify-center items-center h-screen">
            <form className="b-2 w-4/12 bg-white px-8 py-8 shadow-2xl shadow-green-300">
                {/* Form header */}
                <div className="border-b-2 pb-4">
                    <h1 className="text-green-700 font-light text-3xl px-4">Login</h1>
                </div>
                <div>
                    <InputAndLabel 
                    placeHolder="johndoe@gmail.com"
                    labelName="email"
                    />
                    <InputAndLabel
                    placeHolder="********"
                    labelName="password"
                    />
                </div>
                <div className="mt-8">
                    <input
                    type="submit"
                    value="Login"
                    className="bg-green-600 text-white py-2 w-full text-center rounded"
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;