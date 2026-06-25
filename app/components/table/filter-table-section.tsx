import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { SearchIcon, X } from "lucide-react"

const FilterTableSection = ({
  table,
  filterColumnOption,
  className,
  children,
  placeholder = "Search",
}: {
  table: Table<any>
  filterColumnOption: { search: string }
  className?: string
  children?: ReactNode
  placeholder?: string
}) => {
  return (
    <div className={cn("flex items-center py-4 gap-2", className)}>
      <div className="w-full relative ">
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <SearchIcon />
        </div>
        <Input
          placeholder={placeholder}
          type="text"
          value={
            (table
              .getColumn(filterColumnOption.search)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={event =>
            table
              .getColumn(filterColumnOption.search)
              ?.setFilterValue(event.target.value)
          }
          className="w-full pl-10 rounded-full h-9 border-2 border-muted-light-200 text-muted-light-700 shadow-none bg-muted-light-50 font-medium"
        />

        {(table
          .getColumn(filterColumnOption.search)
          ?.getFilterValue() as string) && (
          <X
            fill="#616A75"
            size={16}
            className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
            onClick={() =>
              table.getColumn(filterColumnOption.search)?.setFilterValue("")
            }
          />
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}

export default FilterTableSection
