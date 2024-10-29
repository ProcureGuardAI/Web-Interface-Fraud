// src/components/dashboard/DocumentUpload.js

import React, { useState } from 'react';
import { CloudUploadIcon } from '@heroicons/react/outline';

const DocumentUpload = () => {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
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
    </div>
  );
};

export default DocumentUpload;
