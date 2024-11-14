// src/components/dashboard/DocumentUpload.js

import React, { useState } from 'react';
import { CloudUploadIcon } from '@heroicons/react/outline';
import { uploadDocument } from '../../services/documentService';
import loadingSpinner from '../../assets/loading.png'; // Import the spinner image

const DocumentUpload = ({ onNewAlert }) => {
  const [fileName, setFileName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Manage loading state

  const handleFileUpload = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setIsLoading(true); // Set loading state to true

      try {
        const response = await uploadDocument(file);
        const newAlert = {
          id: Date.now().toString(), // Generate a unique ID for the alert
          description: response.second_model_response === 1 ? 'The document is fraudulent.' : 'Document uploaded successfully.',
          riskScore: response.second_model_response === 1 ? 90 : 50, // Example risk scores
        };
        onNewAlert(newAlert);
        setAlertMessage(newAlert.description);
      } catch (error) {
        setAlertMessage(`Error: ${error.message}`);
      } finally {
        setIsLoading(false); // Set loading state to false
      }
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:bg-gray-100 transition-colors duration-300">
      <label className="flex flex-col items-center cursor-pointer">
        <CloudUploadIcon className="w-12 h-12 text-green-600 mb-2" />
        <span className="text-gray-700 font-semibold">Upload Document</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
        <span className="text-gray-500 text-sm mt-2">
          {fileName || "Choose a file to upload"}
        </span>
      </label>
      {fileName && (
        <div className="mt-4 text-green-600 text-sm text-center">
          Selected: <span className="font-medium">{fileName}</span>
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center mt-4">
          <img src={loadingSpinner} alt="Loading..." className="w-12 h-12 animate-spin" />
        </div>
      )}
      {alertMessage && (
        <div className={`mt-4 text-sm text-center ${alertMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;