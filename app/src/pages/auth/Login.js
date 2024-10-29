// src/pages/auth/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputAndLabel from '../../components/Inputs/InputAndLabel';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Regex for strong password validation (min 8 characters, at least one uppercase, lowercase, digit, and special character)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Clear any previous error
    setError('');

    // Validate email and password
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    // If validation passes, simulate successful login and redirect to dashboard
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');  // Redirect to dashboard
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="w-[90%] sm:w-[70%] md:w-1/2 lg:w-2/5 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200"
      >
        {/* Form header */}
        <div className="border-b-2 border-gray-100 pb-4 mb-6">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Login</h1>
        </div>

        {/* Display error message if any */}
        {error && <div className="text-red-600 mb-4 text-center font-medium">{error}</div>}

        <div className="space-y-4">
          <InputAndLabel
            placeHolder="johndoe@gmail.com"
            labelName="Email"
            inputName="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputAndLabel
            placeHolder="*******"
            labelName="Password"
            inputName="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <input
            type="submit"
            value="Login"
            className="bg-green-600 hover:bg-green-700 text-white py-2 w-3/4 sm:w-2/4 text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer"
          />
        </div>

        {/* Redirect to Signup */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
