// src/AlertsSection.js
import React from 'react';

const AlertsSection = () => {
  const alerts = [
    { id: 1, message: "Transaction ID 12345 flagged for review", type: "warning" },
    { id: 2, message: "Transaction ID 67890 is under investigation", type: "danger" },
    { id: 3, message: "Transaction ID 54321 has been resolved", type: "success" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg border border-green-200 p-6">
      <h2 className="text-xl font-bold mb-4 text-black">Alerts</h2>
      <div className="flex flex-col space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center p-4 rounded-lg shadow-md border ${
              alert.type === "warning"
                ? "border-yellow-300 bg-yellow-100"
                : alert.type === "danger"
                ? "border-red-300 bg-red-100"
                : "border-green-300 bg-green-100"
            }`}
          >
            <div className="relative mr-4">
              <svg
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 1a1 1 0 00-1 1v7a1 1 0 002 0V2a1 1 0 00-1-1z" />
                <path d="M10 17a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </div>
            <p className="text-black">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsSection;
