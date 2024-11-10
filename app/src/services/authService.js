// src/services/authService.js
const API_BASE_URL = "http://localhost:8000/api/users";

export const login = async (email, password, login) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Login error:', errorData);
      throw new Error('Invalid login credentials');
    }

    const data = await response.json();
    console.log('Login response data:', data);

    login(data.data.access);
    console.log('Stored token:', localStorage.getItem('token'));

    return data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create an account');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};