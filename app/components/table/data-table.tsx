import { ColumnDef, flexRender, useReactTable } from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DataTablePagination from "./data-table-pagination"
import { cn } from "@/lib/utils"
import { DataTableColumnFilter } from "./data-table-column-filter"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  table: ReturnType<typeof useReactTable<TData>>
  withPagination?: boolean
  className?: string
}

/**
 * Example usage:
 * ```tsx
 * const table = useReactTable({
 *   data: dataArray
 *   columns: ColumnArray,
 *   getCoreRowModel: getCoreRowModel(),
 *   getPaginationRowModel: getPaginationRowModel(),
 * });
 *
 * return (
 *   <DataTableToolbar table={table} />
 *   <DataTable
 *     table={table}
 *     columns={ColumnArray}
 *     withPagination
 *   />
 * );
 * ```
 * @returns A table component with optional pagination
 */

export const DataTable = <TData, TValue>({
  table,
  columns,
  withPagination = false,
  className,
}: DataTableProps<TData, TValue>) => {
  return (
    <>
      <div className={cn(" p-4", className)}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-muted-light-100 font-medium text-muted-light-700"
                    >
                      <div className="flex items-center justify-between ">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </div>
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length !== 0 ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      className="font-medium text-muted-light-800"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="text-center h-96"
                  colSpan={columns.length}
                >
                  <p>No data found!</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            {table.getFooterGroups().map(footerGroup => (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map(footer => {
                  return (
                    <TableHead
                      key={footer.id}
                      className="bg-muted-light-100 text-xs text-muted-light-500"
                    >
                      {footer.isPlaceholder
                        ? null
                        : flexRender(
                            footer.column.columnDef.header,
                            footer.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableFooter>
        </Table>
      </div>

      {withPagination && <DataTablePagination table={table} />}
    </>
  )
}
