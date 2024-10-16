// src/components/dashboard/AlertsSection.js

import React from 'react';
import { ExclamationIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';

const AlertsSection = () => {
  const alerts = [
    { id: 1, message: "Transaction ID 12345 flagged for review", type: "warning" },
    { id: 2, message: "Transaction ID 67890 is under investigation", type: "danger" },
    { id: 3, message: "Transaction ID 54321 has been resolved", type: "success" },
  ];

  const alertStyles = {
    warning: {
      icon: <InformationCircleIcon className="w-6 h-6 text-yellow-500" />,
      border: 'border-yellow-400',
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
    },
    danger: {
      icon: <ExclamationIcon className="w-6 h-6 text-red-500" />,
      border: 'border-red-400',
      bg: 'bg-red-50',
      text: 'text-red-800',
    },
    success: {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      border: 'border-green-400',
      bg: 'bg-green-50',
      text: 'text-green-800',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Alerts</h2>
      <div className="flex flex-col space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center p-4 rounded-lg shadow-sm border-l-4 ${alertStyles[alert.type].bg} ${alertStyles[alert.type].border}`}
          >
            <div className="mr-3">
              {alertStyles[alert.type].icon}
            </div>
            <p className={`text-base font-medium ${alertStyles[alert.type].text}`}>
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsSection;
