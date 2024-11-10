// src/pages/dashboard/settings/Settings.js

import React, { useState, useEffect } from 'react';
import InputAndLabel from '../../../components/dashboard/InputAndLabel';

function Settings() {
  const [profile, setProfile] = useState({
    fullName: '',
    jobTitle: '',
    department: '',
    email: '',
  });

  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuth: false,
    securityQuestion: "What's your pet's name", // Default value
    securityAnswer: '',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      console.log("settings: " + token);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/profile/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const attributes = data.data.attributes;
          setProfile({
            fullName: attributes.full_name || '',
            jobTitle: attributes.role || '',
            department: attributes.department || '',
            email: attributes.email || '',
          });
          setSecurity(prev => ({
            ...prev,
            securityQuestion: attributes.security_question || '',
            securityAnswer: attributes.security_answer || '',
            twoFactorAuth: attributes.two_fa || false,
          }));
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurity({ ...security, [name]: value });
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleSaveChanges = () => {
    console.log('Profile:', profile);
    console.log('Security:', security);
    console.log('Notifications:', notifications);
    // Here we would handle saving the settings
  };

  return (
    <div className="flex flex-col p-6 space-y-8 bg-white rounded-lg shadow-md">
      {/* Profile Settings */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputAndLabel
            labelName="Full Name"
            placeHolder="John Doe"
            inputName="fullName"
            value={profile.fullName}
            onChange={handleProfileChange}
            readOnly // Making this field read-only
          />
          <InputAndLabel
            labelName="Job Title"
            placeHolder="e.g., Procurement Officer"
            inputName="jobTitle"
            value={profile.jobTitle}
            onChange={handleProfileChange}
            readOnly // Making this field read-only
          />
          <InputAndLabel
            labelName="Department"
            placeHolder="e.g., Procurement"
            inputName="department"
            value={profile.department}
            onChange={handleProfileChange}
            readOnly // Making this field read-only
          />
          <InputAndLabel
            labelName="Email Address"
            placeHolder="johndoe@example.com"
            inputName="email"
            value={profile.email}
            onChange={handleProfileChange}
            readOnly // Making this field read-only
          />
        </div>
      </section>

      {/* Security Settings */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Security Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputAndLabel
            labelName="Current Password"
            placeHolder="Current Password"
            inputName="currentPassword"
            value={security.currentPassword}
            onChange={handleSecurityChange}
            type="password"
          />
          <InputAndLabel
            labelName="New Password"
            placeHolder="New Password"
            inputName="newPassword"
            value={security.newPassword}
            onChange={handleSecurityChange}
            type="password"
          />
          <InputAndLabel
            labelName="Confirm New Password"
            placeHolder="Confirm Password"
            inputName="confirmPassword"
            value={security.confirmPassword}
            onChange={handleSecurityChange}
            type="password"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="twoFactorAuth"
              name="twoFactorAuth"
              checked={security.twoFactorAuth}
              onChange={(e) => setSecurity({ ...security, twoFactorAuth: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="twoFactorAuth" className="text-gray-700 font-medium">
              Enable Two-Factor Authentication
            </label>
          </div>
          <InputAndLabel
            labelName="Security Question"
            placeHolder="e.g., What is your favorite color?"
            inputName="securityQuestion"
            value={security.securityQuestion}
            onChange={handleSecurityChange}
            readOnly // Making this field read-only
          />
          <InputAndLabel
            labelName="Security Answer"
            placeHolder="Answer"
            inputName="securityAnswer"
            value={security.securityAnswer}
            onChange={handleSecurityChange}
          />
        </div>
      </section>

      {/* Notification Preferences */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailAlerts"
              name="emailAlerts"
              checked={notifications.emailAlerts}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            <label htmlFor="emailAlerts" className="text-gray-700 font-medium">
              Email Alerts
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="smsAlerts"
              name="smsAlerts"
              checked={notifications.smsAlerts}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            <label htmlFor="smsAlerts" className="text-gray-700 font-medium">
              SMS Alerts
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="pushNotifications"
              name="pushNotifications"
              checked={notifications.pushNotifications}
              onChange={handleNotificationsChange}
              className="mr-2"
            />
            <label htmlFor="pushNotifications" className="text-gray-700 font-medium">
              Push Notifications
            </label>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSaveChanges}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;