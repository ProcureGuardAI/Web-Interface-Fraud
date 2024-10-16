// src/components/dashboard/MainScreen.js

import React from 'react';
import AlertsSection from './AlertsSection';
import { Outlet, useLocation } from 'react-router';

const MainScreen = () => {
  const location = useLocation();
  const isDashboardRoot = location.pathname === '/dashboard';

  return (
    <>
      {isDashboardRoot ? (
        <div className="flex flex-col sm:flex-row h-full w-full gap-6 p-4">
          <div className="flex-1 bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow border-t-4 border-green-500">
                <h3 className="font-semibold text-gray-700 mb-2">Total Transactions</h3>
                <p className="text-2xl font-bold text-green-600">1,245</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow border-t-4 border-red-500">
                <h3 className="font-semibold text-gray-700 mb-2">Flagged Transactions</h3>
                <p className="text-2xl font-bold text-red-600">23</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow border-t-4 border-blue-500">
                <h3 className="font-semibold text-gray-700 mb-2">Resolved Cases</h3>
                <p className="text-2xl font-bold text-blue-600">18</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
            <AlertsSection />
          </div>
        </div>
      ) : (
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative w-full">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MainScreen;
