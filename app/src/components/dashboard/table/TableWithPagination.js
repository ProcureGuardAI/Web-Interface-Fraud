// src/components/dashboard/table/TableWithPagination.js

import React, { useState, useEffect } from 'react';
import Table from './Table';
import Pagination from './Pagination';
import loadingImage from '../../../assets/loading.png'; // Importing your custom loading image

const TableWithPagination = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // items per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='flex flex-column justify-center align-center py-10'>
      <div className="w-full flex justify-center">
      <div className="w-[100%] lg:w-[90%] overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <img
              src={loadingImage}
              alt="Loading"
              className="h-12 w-12 animate-spin" // Applying a subtle spin animation for better visual effect
              style={{
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
        ) : (
          <>
            <Table data={currentData} />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={data.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default TableWithPagination;
