import { useState } from 'react';
import useBands from './useBands';

const usePaginationBands = () => {

  const { dataBDD } = useBands
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24; 
    
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataBDD?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil( dataBDD?.length / itemsPerPage ) 
  

  const handleNextPage = () => {
       setCurrentPage(currentPage + 1)
  };

  const handlePrevPage = () => {
       setCurrentPage(currentPage - 1);
    
  };

  return {
    currentPage,
    currentItems,
    totalPage,
    handleNextPage,
    handlePrevPage
  };
};

export default usePaginationBands;
