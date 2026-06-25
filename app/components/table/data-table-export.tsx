// TODO: THIS CODE NEEDS TO BE OPTIMIZED AND CLEANED UP - MESSY

// import { Table } from "@tanstack/react-table";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Send } from "lucide-react"

interface DataTableToolbarProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

/**
 * DataTableExport component for exporting data from a table.
 *
 * @param {DataTableToolbarProps} props - Props for the DataTableExport component.
 * @param {React.ReactNode} props.children - Child components, either DataTableExportAllFetchedRows or DataTableExportSelectedRows.
 * @example
 * <DataTableExport>
 *   <DataTableExportAllFetchedRows isExporting={isExporting} exportData={exportData} />
 * </DataTableExport>
 *
 *  <DataTableExport>
 *   <DataTableExportAllFetchedRows  />
 * </DataTableExport>
 * @returns JSX.Element
 */
export function DataTableExport({ children }: DataTableToolbarProps) {
  const [open, setOpen] = React.useState(false)

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Export"
          variant="outline"
          className={cn("text-muted-light-800 rounded-full")}
          size={"icon"}
        >
          <span className="hidden">Export</span>
          <Send />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-2" align="center">
        {children}
      </PopoverContent>
    </Popover>
  )
}
