import { cn } from "@/lib/utils"
import type { Column, Table } from "@tanstack/react-table"
import { ChevronDown, SearchIcon, X } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableViewOptions } from "./data-table-view-option"
import { Input } from "../ui/input"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { DataTableDateFilter } from "./data-table-date-filter"

interface DataTableToolbarProps<TData> extends React.ComponentProps<"div"> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
  children,
  className,
  ...props
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const columns = React.useMemo(
    () => table?.getAllColumns().filter(column => column.getCanFilter()),
    [table],
  )

  const onReset = React.useCallback(() => {
    table.resetColumnFilters()
  }, [table])

  return (
    <div
      role="toolbar"
      aria-orientation="horizontal"
      className={cn(
        "flex w-full items-start justify-between gap-2 py-4",
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-2 ">
        {columns.map(column => (
          <DataTableToolbarFilter key={column.id} column={column} />
        ))}

        {isFiltered && (
          <Button
            aria-label="Reset filters"
            variant="outline"
            size="icon"
            onClick={onReset}
            className="rounded-full text-muted-light-800 "
          >
            <X size={16} fill="#616A75" color="#EB5757" />
            <span className="hidden">Clear</span>
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {children}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
}

interface DataTableToolbarFilterProps<TData> {
  column: Column<TData>
}

function DataTableToolbarFilter<TData>({
  column,
}: DataTableToolbarFilterProps<TData>) {
  {
    const columnMeta = column.columnDef?.meta

    if (!columnMeta) return null

    const onFilterRender = React.useCallback(() => {
      if (!columnMeta?.variant) return null

      switch (columnMeta.variant) {
        case "search":
          return (
            <div className="w-full relative ">
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <SearchIcon />
              </div>

              <Input
                placeholder={`${columnMeta?.placeholder || "Search ..."}`}
                type="text"
                value={(column.getFilterValue() as string) ?? ""}
                onChange={event => {
                  // console.log(event);
                  column.setFilterValue(event.target.value)
                }}
                className="w-full pl-10 rounded-full h-9 border-2 border-muted-light-200 text-muted-light-700 shadow-none bg-muted-light-50 font-medium"
              />
              {/* <div className="absolute scale-90 top-1/2 -translate-y-1/2 right-4">
                <ArrowClockwise />
              </div> */}
            </div>
          )

        case "boolean":
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-9 text-muted-light-800 rounded-full"
                >
                  <div className="flex items-center gap-2">
                    {columnMeta.options?.find(
                      option =>
                        option.value.toString() === column.getFilterValue(),
                    )?.label || columnMeta.label}
                  </div>
                  <span className="ml-auto">
                    <ChevronDown size={16} fill="#616A75" />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuRadioGroup
                  value={column.getFilterValue()?.toString() || ""}
                  onValueChange={value => {
                    column.setFilterValue(value)
                    // console.log(value, "selected");
                  }}
                >
                  {/* <DropdownMenuRadioItem value="">All</DropdownMenuRadioItem> */}
                  {columnMeta.options?.map(option => {
                    // console.log(column.getFilterValue());
                    return (
                      <DropdownMenuRadioItem
                        key={option.value.toString()}
                        value={option.value.toString()}
                        className="flex items-center gap-2"
                      >
                        {option.label}
                      </DropdownMenuRadioItem>
                    )
                  })}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )

        // case "number":
        //   return "";
        //   <div className="relative">
        //     <Input
        //       type="number"
        //       inputMode="numeric"
        //       placeholder={columnMeta.placeholder ?? columnMeta.label}
        //       value={(column.getFilterValue() as string) ?? ""}
        //       onChange={(event) => column.setFilterValue(event.target.value)}
        //       className={cn("h-8 w-[120px]", columnMeta.unit && "pr-8")}
        //     />
        //     {columnMeta.unit && (
        //       <span className="absolute top-0 right-0 bottom-0 flex items-center rounded-r-md bg-accent px-2 text-muted-foreground text-sm">
        //         {columnMeta.unit}
        //       </span>
        //     )}
        //   </div>

        // case "range":
        //   return (
        //     <DataTableSliderFilter
        //       column={column}
        //       title={columnMeta.label ?? column.id}
        //     />
        //   );

        case "dateRange":
          return (
            <DataTableDateFilter
              column={column}
              title={columnMeta.label ?? column.id}
            />
          )

        case "select":
          return (
            <DataTableFacetedFilter
              column={column}
              title={columnMeta.label ?? column.id}
              options={columnMeta.options ?? []}
            />
          )

        default:
          return null
      }
    }, [column, columnMeta])

    return onFilterRender()
  }
}
