

import React from 'react';
import TableWithPagination from "../../../components/dashboard/table/TableWithPagination";
                           
const fetchVendorsList = async () => {
  const response = await fetch('http://localhost:3001/vendors');
  return await response.json();
};

const VendorsList = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Vendors List</h1>
      <TableWithPagination
        fetchData={fetchVendorsList}
        headers={['Vendor ID', 'Name', 'Total Contracts', 'Region', 'Average Rating', 'Status']}
      />
    </div>
  );
};

export default VendorsList;
