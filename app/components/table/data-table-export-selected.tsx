import * as XLSX from "xlsx";
import { Table } from "@tanstack/react-table";
import * as React from "react";
// import { parseDate } from "chrono-node";
// import { format } from "date-fns";
import { Button } from "@/components/ui/button";
// import { Export } from "@/components/svg";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { cn } from "@/lib/utils";
// import { parseAsBoolean, useQueryState } from "nuqs";
// import { NaturalLanguageLabel } from "@/types/types";

// interface DataTableToolbarProps<TData> extends React.ComponentProps<"div"> {
//   table: Table<TData>;
//   isLoading?: boolean;
//   exportValueSetter?: Record<string, (val: any) => string>;
//   fileName?: string;
//   dateFilterColumnId?: string;

//   loading?: boolean;
// }

// Get the rows to export based on whether we have selected rows or all filtered rows
const getRowsToExport = <TData,>(
  table: Table<TData>,
  exportValueSetter: Record<string, (val: any) => string>
) => {
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const rowsToProcess =
    selectedRows.length > 0
      ? selectedRows
      : table.getPreFilteredRowModel().rows;

  return rowsToProcess.map((r) => {
    const rowData: Record<string, unknown> = {};

    // maps each visible cell to an object with header as key and cell value as value
    r._getAllVisibleCells().forEach((cell) => {
      const columnId = cell.column.id;
      const header = (cell.column.columnDef.header as string) || columnId;
      const value = cell.getValue();

      if (value === undefined) return;

      if (exportValueSetter?.[columnId]) {
        rowData[header] = exportValueSetter[columnId]?.(value);
      }

      // Only run default logic if the custom setter did NOT set the value
      if (!rowData.hasOwnProperty(header)) {
        rowData[header] = value;
      }
    });
    return rowData;
  });
};

export const DataTableExportSelectedRows = <TData,>({
  table,
  exportValueSetter,
  fileName,
}: {
  table: Table<TData>;
  exportValueSetter: Record<string, (val: any) => string>;
  fileName: string;
}) => {
  // Export function for selected rows (immediate export)
  function exportSelectedRows(type: "xlsx" | "csv") {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    if (!selectedRows.length) return;

    const rows = getRowsToExport(table, exportValueSetter || {});
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.${type}`);
  }

  const exportOptions = [
    { label: "Excel", type: "xlsx" },
    { label: "CSV", type: "csv" },
  ] as const;

  return (
    <div className="flex flex-col gap-1">
      {exportOptions.map(({ label, type }) => (
        <Button
          key={type}
          size="sm"
          variant="ghost"
          className="justify-start font-normal"
          onClick={() => exportSelectedRows(type)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
