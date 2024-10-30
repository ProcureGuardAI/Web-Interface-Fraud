import React from 'react';

const StatsCard = ({ title, value, color }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow border-t-4 ${color}`}>
      <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
