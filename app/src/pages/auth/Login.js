// src/pages/auth/Login.js

import React from 'react';
import InputAndLabel from '../../components/Inputs/InputAndLabel';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="w-[90%] sm:w-[70%] md:w-1/3 lg:w-1/4 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200">
        {/* Form header */}
        <div className="border-b-2 border-gray-100 pb-4 mb-4">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Login</h1>
        </div>
        <div className="space-y-4">
          <InputAndLabel
            labelName="Email"
            placeHolder="johndoe@gmail.com"
            inputName="email"
          />
          <InputAndLabel
            labelName="Password"
            placeHolder="********"
            inputName="password"
          />
        </div>
        <div className="mt-6">
          <input
            type="submit"
            value="Login"
            className="bg-green-600 hover:bg-green-700 text-white py-2 w-full text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
