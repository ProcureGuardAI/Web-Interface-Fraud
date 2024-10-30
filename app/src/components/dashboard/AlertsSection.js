// src/components/dashboard/AlertsSection.js

import React, { useEffect, useState } from 'react';
import { ExclamationIcon, CheckCircleIcon, InformationCircleIcon, RefreshIcon } from '@heroicons/react/solid';

const AlertsSection = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const alertsPerPage = 5; // Number of alerts per page

  // Fetch alerts from the mock API
  const fetchAlerts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/alerts');
      const data = await response.json();
      // Sort alerts by id in descending order to display the latest first
      const sortedAlerts = data.sort((a, b) => b.id.localeCompare(a.id));
      setAlerts(sortedAlerts);
    } catch (error) {
      console.error("Error fetching alerts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  const handleRefresh = () => {
    fetchAlerts();
  };

  // Determine alert type based on risk score
  const getAlertType = (riskScore) => {
    if (riskScore > 85) return 'danger';
    if (riskScore >= 70) return 'warning';
    return 'success';
  };

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

  // Pagination logic
  const totalPages = Math.ceil(alerts.length / alertsPerPage);
  const paginatedAlerts = alerts.slice(currentPage * alertsPerPage, (currentPage + 1) * alertsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Alerts</h2>
        <button onClick={handleRefresh} className="text-gray-500 hover:text-green-600 transition duration-300">
          <RefreshIcon className="w-6 h-6" />
        </button>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading alerts...</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {paginatedAlerts.map((alert) => {
            const alertType = getAlertType(alert.riskScore);
            return (
              <div
                key={alert.id}
                className={`flex items-center p-4 rounded-lg shadow-sm border-l-4 ${alertStyles[alertType].bg} ${alertStyles[alertType].border}`}
              >
                <div className="mr-3">
                  {alertStyles[alertType].icon}
                </div>
                <div className="flex-1">
                  <p className={`text-base font-medium ${alertStyles[alertType].text}`}>
                    {alert.description}
                  </p>
                  <p className="text-sm text-gray-500">Alert ID: {alert.id}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 rounded-lg ${currentPage === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 rounded-lg ${currentPage === totalPages - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AlertsSection;
