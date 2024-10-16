// src/pages/dashboard/flagged-transactions/FlaggedTransactions.js

import React from 'react';
import TableWithPagination from '../../../components/dashboard/table/TableWithPagination';

const FlaggedTransactions = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12">
        <TableWithPagination endpoint="http://localhost:3001/flaggedTransactions" />
      </div>
    </div>
  );
};

export default FlaggedTransactions;
