// src/components/dashboard/table/TableRow.js

import React from 'react';

const TableRow = ({ rowData, onRowClick }) => {
  return (
    <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => onRowClick(rowData.id)}>
      {Object.values(rowData).map((cell, index) => (
        <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {cell}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;

