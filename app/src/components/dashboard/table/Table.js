import React from 'react';
import TableRow from './TableRow';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-800">
        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((header) => (
              <th key={header} className="py-3 px-6">
                {header.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} rowData={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
