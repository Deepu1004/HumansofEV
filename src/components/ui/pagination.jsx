
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Pagination = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  ...props
}) => {
  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPages - rightItemCount + 1,
        totalPages
      );
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
    // Default case (should not happen with logic above, but for safety)
     return range(1, totalPages);
  }, [totalPages, siblingCount, currentPage]);


  if (totalPages <= 1) {
    return null; // Don't render pagination if there's only one page or less
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center pt-4", className)}
      {...props}
    >
      <ul className="flex flex-row items-center gap-1">
        <li>
          <Button
            aria-label="Go to previous page"
            size="icon"
            variant={currentPage === 1 ? "outline" : "default"}
            className={cn("gap-1 pl-2.5", currentPage === 1 ? "text-muted-foreground cursor-not-allowed opacity-50" : "bg-primary text-primary-foreground hover:bg-primary/90")}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <li key={`dots-${index}`}>
                <span className="flex h-10 w-10 items-center justify-center">
                  <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                </span>
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <Button
                aria-label={`Go to page ${pageNumber}`}
                size="icon"
                variant={pageNumber === currentPage ? "secondary" : "outline"}
                 className={cn(
                   "h-10 w-10",
                   pageNumber === currentPage
                     ? "bg-secondary text-secondary-foreground font-bold shadow-md border-secondary/50"
                     : "text-primary border-primary/30 hover:bg-primary/10"
                 )}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            </li>
          );
        })}
        <li>
          <Button
            aria-label="Go to next page"
            size="icon"
            variant={currentPage === totalPages ? "outline" : "default"}
            className={cn("gap-1 pr-2.5", currentPage === totalPages ? "text-muted-foreground cursor-not-allowed opacity-50" : "bg-primary text-primary-foreground hover:bg-primary/90")}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </li>
      </ul>
    </nav>
  )
}
Pagination.displayName = "Pagination"

// Helper function to create range of numbers
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};


export { Pagination }
