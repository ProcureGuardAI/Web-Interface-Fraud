// src/services/documentService.js

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const uploadDocument = async (file) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('pdf_file', file); // Use the correct key

  try {
    const response = await fetch(`${API_BASE_URL}/upload_pdf/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upload document');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};