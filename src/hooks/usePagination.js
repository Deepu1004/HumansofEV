
import React, { useState, useMemo } from 'react';

const usePagination = (totalItems, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    // Note: The actual data slicing needs to happen in the component using the hook
    // This hook primarily manages the page state and calculates indices/total pages.
    return { first: firstPageIndex, last: lastPageIndex };
  }, [currentPage, itemsPerPage]);

  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    // currentDataIndices: currentData, // Optionally return indices if needed
    itemsPerPage,
  };
};

export default usePagination;
