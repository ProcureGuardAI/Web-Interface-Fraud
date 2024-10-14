import React, { useState, useEffect } from 'react';
import Table from './Table';
import Pagination from './Pagination';

const TableWithPagination = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // items per page
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
    <div className="w-full flex justify-center">
      <div className="w-[90%] lg:w-[80%] overflow-x-auto">
        {loading ? (
          <div className="text-center">Loading...</div>
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
  );
};

export default TableWithPagination;
