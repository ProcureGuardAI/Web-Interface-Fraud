// src/components/dashboard/table/TableWithPagination.js

import React, { useEffect, useState } from 'react';
import Table from './Table';
import TableRow from './TableRow';
import Pagination from './Pagination';

const TableWithPagination = ({ fetchData, headers }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
      setFilteredData(fetchedData);
    });
  }, [fetchData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by any column"
        className="px-4 py-2 border border-gray-300 rounded w-full mb-4"
      />
      <Table headers={headers}>
        {displayedData.map((item) => (
          <TableRow key={item.id} rowData={item} onRowClick={() => console.log(item.id)} />
        ))}
      </Table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default TableWithPagination;
