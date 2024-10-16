// src/components/dashboard/table/TableRow.js

import React from 'react';

const TableRow = ({ rowData }) => {
  return (
    <tr className="border-b bg-white hover:bg-gray-50 text-gray-800">
      {Object.values(rowData).map((value, index) => (
        <td key={index} className="py-3 px-6 whitespace-nowrap">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
