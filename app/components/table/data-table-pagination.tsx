"use client";

import { Table } from "@tanstack/react-table";
import { parseAsInteger, useQueryState } from "nuqs";
import { pagination as pag } from "@/lib/data";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useMemo } from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const [page] = useQueryState("page", parseAsInteger.withDefault(pag.page));
  const totalPages = table.getPageCount();

  const pageNumbers = useMemo(() => {
    const pageSet = Math.ceil(page / 3) - 1;
    const start = pageSet * 3 + 1;
    const end = Math.min(start + 2, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, totalPages]);

  // Handle next set of pages
  const handleNextSet = () => {
    const nextSetStart = Math.ceil(page / 3) * 3 + 1;
    if (nextSetStart <= totalPages) {
      table.setPageIndex(nextSetStart - 1);
    }
  };

  // Handle previous set of pages
  const handlePreviousSet = () => {
    const previousSetStart = Math.floor((page - 1) / 3) * 3 - 2;
    if (previousSetStart > 0) {
      table.setPageIndex(previousSetStart - 1);
    }
  };

  return (
    <div className="mt-4 flex items-center justify-between px-2 w-full">
      <div className="w-fit whitespace-nowrap text-muted-light-800 text-sm">
        {table.getFilteredSelectedRowModel()?.rows?.length} of{" "}
        {table.getFilteredRowModel()?.rows?.length} row(s) selected.
      </div>

      <div className="flex gap-10 items-center justify-between">
        {/* <DataTablePaginationRowCount table={table} /> */}

        <span className="text-sm text-muted-light-800">
          Page {page} of {totalPages}
        </span>

        <Pagination className=" w-fit">
          <PaginationContent>
            {pageNumbers[0] > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() => table.setPageIndex(0)}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis onClick={handlePreviousSet} />
                </PaginationItem>
              </>
            )}

            {pageNumbers.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  onClick={() => table.setPageIndex(pageNum - 1)}
                  isActive={page === pageNum}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {pageNumbers[pageNumbers.length - 1] < totalPages && (
              <>
                <PaginationItem>
                  <PaginationEllipsis onClick={handleNextSet} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() => table.setPageIndex(totalPages - 1)}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
          </PaginationContent>
        </Pagination>
      </div>
      {/* <div className="flex gap-4 items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousPage}
          disabled={page <= 1}
        >
          Previous
        </Button>
        <span className="text-sm text-muted-light-800">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
}

export default DataTablePagination;