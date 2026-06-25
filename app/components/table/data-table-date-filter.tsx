"use client";

import type { Column } from "@tanstack/react-table";
import { XCircle } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { parseDate } from "chrono-node";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarBlank } from "../svg";
import { cn } from "@/lib/utils";
import { addDays, format, subDays } from "date-fns";
import { useCallback, useMemo, useState } from "react";

type NaturalLanguageLabel =
  | "Last 7 Days"
  | "Last 14 Days"
  | "Last 30 Days"
  | "Last 3 Months"
  | "Last 6 Months";

interface NaturalLanguageDate {
  label: NaturalLanguageLabel;
}

function getIsDateRange(value: DateRange | undefined): value is DateRange {
  if (!value) return false;

  return value && typeof value === "object" && !Array.isArray(value);
}

function parseColumnFilterValue(value: unknown) {
  if (value === null || value === undefined) {
    return [];
  }

  if (typeof value === "string") {
    return value.split(",");
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [];
}

const naturalLanguageDates: NaturalLanguageDate[] = [
  { label: "Last 7 Days" },
  { label: "Last 14 Days" },
  { label: "Last 30 Days" },
  { label: "Last 3 Months" },
  { label: "Last 6 Months" },
];

interface DataTableDateFilterProps<TData> {
  column: Column<TData, unknown>;
  title?: string;
}

export function DataTableDateFilter<TData>({
  column,
  title = "Date",
}: DataTableDateFilterProps<TData>) {
  //
  const columnFilterValue = column.getFilterValue();
  const timestamps = parseColumnFilterValue(columnFilterValue);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(
    timestamps.length === 2
      ? { from: new Date(timestamps[0]), to: new Date(timestamps[1]) }
      : undefined
  );

  // natural language date parser state
  const [nlDate, setNlDate] = useState<{
    label: NaturalLanguageLabel;
    date: Date | null;
  } | null>(null);

  // function that is called when a date range is selected from the calendar or from the natural language parser
  const onSelectDateRange = useCallback(
    (date: DateRange | undefined) => {
      if (!date || (!date.from && !date.to)) {
        column.setFilterValue(undefined);
        return;
      }

      setDate(date);

      const startDate = date.from ? format(date.from, "yyyy-MM-dd") : "";
      const endDate = date.to ? format(date.to, "yyyy-MM-dd") : "";

      const filterValue =
        startDate && endDate ? [startDate, endDate] : startDate || endDate;

      // Close popover if both dates are selected
      if (date.from && date.to && date.from.getTime() !== date.to.getTime()) {
        setOpen(false);
        column.setFilterValue(filterValue);
      }
    },
    [column]
  );

  // function to parse the natural language date to a date object
  const naturalLanguageDateParser = useCallback(
    (label: NaturalLanguageLabel) => {
      const fromDate = parseDate(label);
      if (!fromDate) return;
      setNlDate({ label, date: fromDate });
      onSelectDateRange({ from: addDays(fromDate, 1), to: new Date() });
    },
    [onSelectDateRange]
  );

  const onReset = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setNlDate(null);
      setDate(undefined);
      column.setFilterValue(undefined);
    },
    [column]
  );

  const hasValue = useMemo(() => {
    if (!getIsDateRange(date)) return false;
    return date.from || date.to;
  }, [date]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-9 text-muted-light-800 rounded-full px-3"
        >
          {title}
          {hasValue ? (
            <Button
              asChild
              role="button"
              variant={"ghost"}
              tabIndex={0}
              size={"icon"}
              aria-label={`Clear ${title} filter`}
              onClick={onReset}
              className="rounded-full  p-0 h-fit w-fit"
            >
              <div>
                <XCircle
                  color="currentColor"
                  className="opacity-70 text-muted-light-800"
                />
              </div>
            </Button>
          ) : (
            <CalendarBlank />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 overflow-hidden" align="center">
        <div className="flex min-w-0 ">
          <div className="flex flex-col ">
            {naturalLanguageDates.map(({ label }) => (
              <Button
                key={label}
                variant="ghost"
                onClick={() => {
                  naturalLanguageDateParser(label);
                }}
                className={cn(
                  "justify-start rounded-none w-full  text-sm font-normal",
                  nlDate?.label === label && "bg-accent"
                )}
              >
                {label}
              </Button>
            ))}
          </div>

          <Calendar
            mode="range"
            selected={date}
            onSelect={onSelectDateRange}
            className=" border shadow-sm"
            disabled={{
              after: new Date(),
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
