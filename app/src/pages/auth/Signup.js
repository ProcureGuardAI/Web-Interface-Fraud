// src/pages/auth/SignUp.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputAndLabel from '../../components/Inputs/InputAndLabel';
import { signup } from '../../services/authService';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    role: '',
    department: '',
    office_location: '',
    security_question: '',
    two_fa: false,
  });
  const [password2, setPassword2] = useState(''); // Separate state for password confirmation
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "password2") {
      setPassword2(value); // Directly handle password2 change
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
  };
  

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== password2) {
      setError("Passwords do not match.");
      return;
    }
    if (!passwordStrengthRegex.test(formData.password)) {
      setError("Password must be at least 8 characters, contain uppercase, lowercase, and a number.");
      return;
    }

    try {
      await signup(formData);
      navigate('/login');  // Redirect to login page after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="w-[90%] sm:w-[70%] md:w-1/2 lg:w-2/5 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200">
        <div className="border-b-2 border-gray-100 pb-4 mb-6">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Register Account</h1>
        </div>
        
        {error && <div className="text-red-600 mb-4 text-center font-medium">{error}</div>}
        
        <div className="space-y-4">
          <InputAndLabel placeHolder="john_doe" labelName="Username" inputName="username" onChange={handleChange} />
          <InputAndLabel placeHolder="John Doe" labelName="Full Name" inputName="full_name" onChange={handleChange} />
          <InputAndLabel placeHolder="johndoe@gmail.com" labelName="Email" inputName="email" onChange={handleChange} />
          <InputAndLabel placeHolder="712345678" labelName="Phone Number" inputName="phone_number" onChange={handleChange} />
          <InputAndLabel placeHolder="*********" labelName="Password" inputName="password" onChange={handleChange} />
          <InputAndLabel placeHolder="*********" labelName="password" inputName="password2" onChange={handlePassword2Change} />
          <InputAndLabel placeHolder="E.g., Administrator" labelName="Role" inputName="role" onChange={handleChange} />
          <InputAndLabel placeHolder="E.g., IT Department" labelName="Department" inputName="department" onChange={handleChange} />
          <InputAndLabel placeHolder="E.g., New York Office" labelName="Office Location" inputName="office_location" onChange={handleChange} />
          <InputAndLabel placeHolder="Your pet's name?" labelName="Security Question" inputName="security_question" onChange={handleChange} />
          <label className="flex items-center">
            <input type="checkbox" name="two_fa" checked={formData.two_fa} onChange={handleChange} />
            <span className="ml-2 text-gray-700">Enable 2FA</span>
          </label>
        </div>

        <div className="mt-8 flex justify-center">
          <input type="submit" value="Create Account" className="bg-green-600 hover:bg-green-700 text-white py-2 w-3/4 sm:w-2/4 text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer" />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account? <Link to="/login" className="text-green-600 hover:underline">Log in</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
