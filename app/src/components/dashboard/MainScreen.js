// src/components/MainScreen.js
import React from 'react';
import AlertsSection from './AlertsSection';
import { Outlet, useLocation } from 'react-router';

const MainScreen = () => {

  const location = useLocation();

  // Check if the current path is exactly '/dashboard'
  const isDashboardRoot = location.pathname === '/dashboard';

  return (
    <>
      {
        isDashboardRoot ? (
          <div className='flex flex-col sm:flex-row h-full w-full'><div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 text-black">Dashboard Overview</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-300">
                <h3 className="font-semibold text-black mb-2">Total Transactions</h3>
                <p className="text-xl font-bold text-green-800">1,245</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-300">
                <h3 className="font-semibold text-black mb-2">Flagged Transactions</h3>
                <p className="text-xl font-bold text-red-600">23</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-300">
                <h3 className="font-semibold text-black mb-2">Resolved Cases</h3>
                <p className="text-xl font-bold text-green-800">18</p>
              </div>
            </div>
          </div><div className="w-full sm:w-1/3 mt-4 sm:mt-0">
              <AlertsSection />
            </div>
            </div>
        ) : (
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative w-full">
            <Outlet/>
          </div>
          )
      }
    </>
  );
};

export default MainScreen;
