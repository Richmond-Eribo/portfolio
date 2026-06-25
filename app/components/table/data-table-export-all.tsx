"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { NaturalLanguageLabel } from "@/types/types";
import { useExportTableData } from "@/hooks/use-export-table-data";
import { useTableParams } from "@/hooks/use-table-params";
import { format } from "date-fns";

const naturalLanguageDates: NaturalLanguageLabel[] = [
  "Last 7 Days",
  "Last 14 Days",
  "Last 30 Days",
  "Last 3 Months",
  "Last 6 Months",
  "Last 1 year",
];

/**
 * DataTableExportAllFetchedRows component
 *
 * Before using this component, ensure you have set up the useExport hook properly.
 * @example
 *  const { isExporting, exportData } = useExportTableData({
     exportFetcher: (params) => driverApi.getDrivers(params),
     fileName: "drivers_export",
     columns: driverListColumn,
     dataExtractor: (payload) => payload.drivers,
   });
 *
 * then pass the isExporting and exportData to this component.
 *
 * @param isExporting - boolean indicating if export is in progress
 * @param exportData - function to trigger data export
 */

export const DataTableExportAllFetchedRows = ({
  isExporting,
  exportData,
  params,
}: ReturnType<typeof useExportTableData> & {
  params?: ReturnType<typeof useTableParams>[0];
}) => {
  const [nlDate, setNlDate] = React.useState<
    NaturalLanguageLabel | [number, number] | null
  >(null);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-muted-foreground mt-1">
        Select duration to export
      </p>

      {params?.dateFilter &&
        Array.isArray(params.dateFilter) &&
        params.dateFilter.length === 2 && (
          <Button
            size="sm"
            variant="ghost"
            disabled={isExporting}
            className={cn(
              "justify-between font-normal",
              isExporting && "pointer-events-none opacity-60"
            )}
            onClick={() => {
              setNlDate(params.dateFilter as [number, number]);
              exportData(params.dateFilter as [number, number]);
            }}
          >
            {`From ${format(params.dateFilter[0], "do MMM, yyyy")} to ${format(
              new Date(params.dateFilter[1]),
              "do MMM, yyyy"
            )}`}

            <span className="animate-pulse text-xs text-muted-foreground">
              {isExporting && nlDate === params.dateFilter
                ? "exporting..."
                : ""}
            </span>
          </Button>
        )}

      {naturalLanguageDates.map((label) => (
        <Button
          key={label}
          size="sm"
          variant="ghost"
          disabled={isExporting}
          className={cn(
            "justify-between font-normal",
            isExporting && "pointer-events-none opacity-60"
          )}
          onClick={() => {
            setNlDate(label);
            exportData(label);
          }}
        >
          {label}

          <span className="animate-pulse text-xs text-muted-foreground">
            {isExporting && nlDate === label ? "exporting..." : ""}
          </span>
        </Button>
      ))}
    </div>
  );
};
