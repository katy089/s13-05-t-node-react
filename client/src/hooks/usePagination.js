import { useState } from 'react';

const usePagination = (itemsPerPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    currentPage,
    itemsPerPage,
    paginate,
    prevPage,
    nextPage,
  };
};

export default usePagination;
