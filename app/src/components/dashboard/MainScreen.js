// src/components/dashboard/MainScreen.js

import React, { useEffect, useState } from 'react';
import AlertsSection from './AlertsSection';
import DocumentUpload from './DocumentUpload';
import { Outlet, useLocation } from 'react-router';
import StatsCard from './StatsCard';

const MainScreen = () => {
  const location = useLocation();
  const isDashboardRoot = location.pathname === '/dashboard';
  const [stats, setStats] = useState({
    totalTransactions: 0,
    flaggedTransactions: 0,
    resolvedCases: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const transactionsResponse = await fetch('http://localhost:3001/transactions');
        const transactionsData = await transactionsResponse.json();
        const flaggedResponse = await fetch('http://localhost:3001/alerts');
        const flaggedData = await flaggedResponse.json();
        const resolvedCasesResponse = await fetch('http://localhost:3001/transactions?resolved=true'); // Assuming resolved cases are marked in transactions
        const resolvedCasesData = await resolvedCasesResponse.json();

        setStats({
          totalTransactions: transactionsData.length,
          flaggedTransactions: flaggedData.length,
          resolvedCases: resolvedCasesData.length,
        });
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      {isDashboardRoot ? (
        <div className="flex flex-col sm:flex-row h-full w-full gap-6 p-4">
          <div className="flex-1 bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatsCard title="Total Transactions" value={stats.totalTransactions} color="border-green-500" />
              <StatsCard title="Flagged Transactions" value={stats.flaggedTransactions} color="border-red-500" />
              <StatsCard title="Resolved Cases" value={stats.resolvedCases} color="border-blue-500" />
            </div>
            <div className="mt-6">
              <DocumentUpload />
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
