// src/components/dashboard/NavigationMenu.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { HomeIcon, ExclamationIcon, UsersIcon, BriefcaseIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'; // Importing LogoutIcon

const NavigationMenu = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', icon: <HomeIcon className="w-6 h-6" />, href: '/dashboard' },
    { name: 'Flagged Transactions', icon: <ExclamationIcon className="w-6 h-6" />, href: '/dashboard/flagged-transactions' },
    { name: 'Vendor List', icon: <UsersIcon className="w-6 h-6" />, href: '/dashboard/vendors' },
    { name: 'Bidding History', icon: <BriefcaseIcon className="w-6 h-6" />, href: '/dashboard/biddings' },
    { name: 'Settings', icon: <CogIcon className="w-6 h-6" />, href: '/dashboard/settings' },
    { name: 'Logout', icon: <LogoutIcon className="w-6 h-6" />, href: '/login' }, // Adding the Logout item
  ];

  return (
    <div className="w-100 lg:w-64 bg-white h-auto lg:h-screen lg:fixed p-4 border-r border-gray-200 shadow-lg">
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={clsx(
              'group flex items-center space-x-3 p-2 rounded-lg transition-colors duration-300',
              {
                'bg-green-100 text-green-700': location.pathname === item.href,
                'hover:bg-green-50 text-gray-800': location.pathname !== item.href,
              }
            )}
          >
            <div
              className={clsx(
                'text-gray-500 group-hover:text-green-600 transition-colors duration-300',
                { 'text-green-600': location.pathname === item.href }
              )}
            >
              {item.icon}
            </div>
            <Link
              className={clsx(
                'font-semibold transition-colors duration-300',
                {
                  'text-green-700': location.pathname === item.href,
                  'text-gray-800 group-hover:text-green-600': location.pathname !== item.href,
                }
              )}
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenu;
