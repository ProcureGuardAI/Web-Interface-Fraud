// src/pages/dashboard/home/Dashboard.js

import React from 'react';
import NavigationMenu from '../../../components/dashboard/NavigationMenu';
import MainScreen from '../../../components/dashboard/MainScreen';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-green-50">
      <NavigationMenu />
      <div className="flex flex-1 lg:ml-64"> {/* Added ml-64 to create space for the fixed sidebar */}
        <MainScreen />
      </div>
    </div>
  );
}

export default Dashboard;
