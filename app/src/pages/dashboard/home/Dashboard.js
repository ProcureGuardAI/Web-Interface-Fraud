import React from 'react';
import NavigationMenu from '../../../components/dashboard/NavigationMenu';
import MainScreen from '../../../components/dashboard/MainScreen';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gradient-to-br from-white to-green-50">
    <NavigationMenu />
    <div className="flex flex-1 flex-col sm:flex-row">
      <MainScreen />
    </div>
  </div>
  );
}

export default Dashboard;
