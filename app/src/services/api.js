// src/services/api.js
const BASE_URL = 'http://localhost:8000';

export const apiRequest = async (endpoint, method = "GET", data) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};