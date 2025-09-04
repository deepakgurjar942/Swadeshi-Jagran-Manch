import { useState, useMemo, useRef } from "react";
import { useLenis } from "../context/LenisContext";

export function usePagination({ items = [], itemsPerPage = 6, maxVisiblePages = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const lenisRef = useLenis();
 // optional scroll reference

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  }, [items, currentPage, itemsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { offset: 0 });
    }
  };

  const getPageNumbers = () => {
       if (lenisRef?.current) {
      lenisRef.current.scrollTo(0);
    }
    const pageNumbers = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than limit
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust range if near start
      if (currentPage <= 2) endPage = 3;

      // Adjust range if near end
      if (currentPage >= totalPages - 1) startPage = totalPages - 2;

      // Add ellipsis after first page if needed
      if (startPage > 2) pageNumbers.push("...");

      // Middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) pageNumbers.push("...");

      // Always show last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    paginate,
    getPageNumbers,
    lenisRef,
  };
}
