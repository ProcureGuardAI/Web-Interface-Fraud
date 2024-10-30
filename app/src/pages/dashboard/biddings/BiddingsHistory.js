import TableWithPagination from "../../../components/dashboard/table/TableWithPagination";
import React from 'react';

const fetchBiddingHistory = async () => {
  const response = await fetch('http://localhost:3001/biddings');
  return await response.json();
};

const BiddingsHistory = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bidding History</h1>
      <TableWithPagination
        fetchData={fetchBiddingHistory}
        headers={['Bid ID', 'Project Name', 'Vendor', 'Bid Amount', 'Date', 'Status']}
      />
    </div>
  );
};

export default BiddingsHistory;
