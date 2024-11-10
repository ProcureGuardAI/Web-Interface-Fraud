// src/pages/auth/Login.js

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputAndLabel from '../../components/Inputs/InputAndLabel';
import { login as loginService } from '../../services/authService';
import AuthContext from '../../context/AuthContext';

function Login() {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      await loginService(email, password, login);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="w-[90%] sm:w-[70%] md:w-1/2 lg:w-2/5 bg-white px-8 py-8 rounded-lg shadow-lg border border-gray-200"
      >
        <div className="border-b-2 border-gray-100 pb-4 mb-6">
          <h1 className="text-3xl text-green-700 font-semibold text-center">Login</h1>
        </div>
        {error && <div className="text-red-600 mb-4 text-center font-medium">{error}</div>}
        
        <div className="space-y-4">
          <InputAndLabel placeHolder="johndoe@gmail.com" labelName="Email" inputName="email" onChange={(e) => setEmail(e.target.value)} />
          <InputAndLabel placeHolder="*******" labelName="Password" inputName="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="mt-8 flex justify-center">
          <input type="submit" value="Login" className="bg-green-600 hover:bg-green-700 text-white py-2 w-3/4 sm:w-2/4 text-center rounded-lg transition-all duration-300 font-semibold cursor-pointer" />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Don’t have an account? <Link to="/signup" className="text-green-600 hover:underline">Sign up</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
