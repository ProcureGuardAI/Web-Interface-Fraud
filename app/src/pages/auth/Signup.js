// src/pages/auth/SignUp.js

import React from 'react';
import InputAndLabel from '../../components/Inputs/InputAndLabel';

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="w-[90%] sm:w-[70%] md:w-1/2 wrap lg:w-2/5 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200">
        {/* Form header */}
        <div className="border-b-2 border-gray-100 pb-4 mb-4">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Register Account</h1>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <InputAndLabel
                placeHolder="John"
                labelName="First Name"
                inputName="firstName"
              />
            </div>
            <div className="flex-1">
              <InputAndLabel
                placeHolder="Doe"
                labelName="Last Name"
                inputName="lastName"
              />
            </div>
          </div>

          <InputAndLabel
            placeHolder="johndoe@gmail.com"
            labelName="Email"
            inputName="email"
          />

          <InputAndLabel
            placeHolder="712345678 or 102345678"
            labelName="Phone Number"
            inputName="phoneNumber"
          />

          <InputAndLabel
            placeHolder="johndoe"
            labelName="Username"
            inputName="username"
          />

          <InputAndLabel
            placeHolder="*******"
            labelName="Password"
            inputName="password"
          />

          <InputAndLabel
            placeHolder="*********"
            labelName="Confirm Password"
            inputName="confirmPassword"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <input
            type="submit"
            value="Create Account"
            className="bg-green-600 hover:bg-green-700 text-white py-2 w-3/4 sm:w-2/4 text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
