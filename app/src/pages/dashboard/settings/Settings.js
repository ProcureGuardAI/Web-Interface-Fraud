// src/pages/dashboard/settings/Settings.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const Settings = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Placeholder for profile update logic
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    alert('Logged out successfully!');
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="w-[90%] lg:w-[70%] bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Update Profile
          </button>
        </form>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition-all duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
