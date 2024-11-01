// src/pages/auth/SignUp.js

import React from 'react';
import { Link } from 'react-router-dom';
import InputAndLabel from '../../components/Inputs/InputAndLabel';
import { apiRequest } from '../../services/api';

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form className="w-[90%] sm:w-[70%] md:w-1/2 lg:w-2/5 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200">
        {/* Form header */}
        <div className="border-b-2 border-gray-100 pb-4 mb-6">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Register Account</h1>
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <InputAndLabel placeHolder="John Doe" labelName="Full Name" inputName="fullName" />
          <InputAndLabel placeHolder="johndoe@gmail.com" labelName="Email Address" inputName="email" />
          <InputAndLabel placeHolder="712345678 or 102345678" labelName="Phone Number" inputName="phoneNumber" />
          <InputAndLabel placeHolder="johndoe" labelName="Username" inputName="username" />
          <InputAndLabel placeHolder="*******" labelName="Password" inputName="password" />
          <InputAndLabel placeHolder="*********" labelName="Confirm Password" inputName="confirmPassword" />
          <InputAndLabel placeHolder="E.g., Administrator" labelName="Role" inputName="role" />
          <InputAndLabel placeHolder="E.g., IT Department" labelName="Department" inputName="department" />
          <InputAndLabel placeHolder="E.g., Software Engineer" labelName="Job Title" inputName="jobTitle" />
          <InputAndLabel placeHolder="E.g., New York Office" labelName="Office Location" inputName="officeLocation" />
          <InputAndLabel placeHolder="E.g., What is your pet's name?" labelName="Security Question" inputName="securityQuestion" />
          <InputAndLabel placeHolder="Set up 2FA (e.g., Authenticator app)" labelName="2FA Setup" inputName="twoFASetup" />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <input
            type="submit"
            value="Create Account"
            className="bg-green-600 hover:bg-green-700 text-white py-2 w-3/4 sm:w-2/4 text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer"
          />
        </div>

        {/* Redirect to Login */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
