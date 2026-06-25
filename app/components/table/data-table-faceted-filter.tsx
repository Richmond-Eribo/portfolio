"use client"

import type { Column } from "@tanstack/react-table"
import { Check, ChevronDown, PlusCircle, XCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import { useCallback, useState } from "react"
import { Option } from "@/types/declare-types"

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options: Option[]
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const [open, setOpen] = useState(false)

  const selectedValues = String(column?.getFilterValue() || "")

  const onItemSelect = useCallback(
    (option: Option, isSelected: boolean) => {
      if (!column) return

      column.setFilterValue(isSelected ? undefined : option.value)
      setOpen(false)
    },
    [column, selectedValues],
  )

  const onReset = useCallback(
    (event?: React.MouseEvent) => {
      event?.stopPropagation()
      column?.setFilterValue(undefined)
    },
    [column],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 text-muted-light-800 rounded-full"
        >
          {title}
          {selectedValues ? (
            <>
              <Separator
                orientation="vertical"
                className="mx-0.5 data-[orientation=vertical]:h-4"
              />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {selectedValues}
              </Badge>
            </>
          ) : (
            <span className="ml-auto">
              <ChevronDown size={16} fill="#616A75" />
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[12.5rem] p-0" align="start">
        <Command>
          {/* <CommandInput placeholder={title} /> */}
          <CommandList className="max-h-full">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup className="max-h-[18.75rem] overflow-y-auto overflow-x-hidden">
              {options.map(option => {
                const isSelected = selectedValues === option.value

                return (
                  <CommandItem
                    key={option.label}
                    onSelect={() => onItemSelect(option, isSelected)}
                    className={cn(
                      isSelected && "bg-muted",
                      "flex items-center justify-between py-1 px-2",
                    )}
                  >
                    <span className="truncate">{option.label}</span>

                    <div
                      className={cn(
                        "flex size-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <Check />
                    </div>
                  </CommandItem>
                )
              })}
            </CommandGroup>

            {selectedValues !== "" && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onReset()}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
