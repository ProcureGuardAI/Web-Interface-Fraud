// src/pages/dashboard/flagged-transactions/FlaggedTransactions.js

import React from 'react';
import TableWithPagination from '../../../components/dashboard/table/TableWithPagination';

const fetchFlaggedTransactions = async () => {
  const response = await fetch('http://localhost:3001/transactions?flagged=true');
  return await response.json();
};

const FlaggedTransactions = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Flagged Transactions</h1>
      <TableWithPagination
        fetchData={fetchFlaggedTransactions}
        headers={['Transaction ID', 'Vendor', 'Amount', 'Date', 'Status']}
      />
    </div>
  );
};

export default FlaggedTransactions;

