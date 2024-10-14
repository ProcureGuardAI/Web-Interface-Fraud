import React from 'react';

const TableRow = ({ rowData }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 text-gray-700">
      {Object.values(rowData).map((value, index) => (
        <td key={index} className="py-3 px-6 whitespace-nowrap">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
