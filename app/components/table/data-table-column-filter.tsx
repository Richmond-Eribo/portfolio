import { Column } from "@tanstack/react-table"
import { useCallback, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { Nut } from "lucide-react"

interface DataTableColumnFilterProps<TData>
  extends React.ComponentProps<"div"> {
  column: Column<TData>
}

export function DataTableColumnFilter<TData>({
  column,
  ...props
}: DataTableColumnFilterProps<TData>) {
  const columnFilterValue = column.getFilterValue()
  const columnMeta = column.columnDef?.meta || {}
  const { filter } = columnMeta

  const [filterValue, setFilterValue] = useState<string | boolean | unknown>(
    columnMeta.filter?.defaultValue?.toString() || "",
  )

  const onFilterValueChange = useCallback(
    (value: string | boolean | unknown) => {
      setFilterValue(value)
      column.setFilterValue(value)
    },
    [column],
  )

  const onFilterRender = useCallback(() => {
    if (!filter) return null

    switch (filter.variant) {
      case "boolean":
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size={"sm"}>
                <Nut />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[9rem] w-40">
              <DropdownMenuRadioGroup
                value={filterValue?.toString() || ""}
                onValueChange={value => {
                  onFilterValueChange(value)
                }}
              >
                {columnMeta.filter?.options?.map(option => (
                  <DropdownMenuRadioItem
                    key={option.value.toString()}
                    value={option.value.toString()}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )

      default:
        return null
    }
  }, [column, filter, filterValue, columnFilterValue])

  return onFilterRender()
}
