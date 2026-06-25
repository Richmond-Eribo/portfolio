import type { ColumnSort, Row, RowData } from "@tanstack/react-table"

declare module "@tanstack/react-table" {
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  interface ColumnMeta<TData extends RowData, TValue> {
    label?: string
    placeholder?: string
    variant?: "search" | "boolean" | "number" | "date" | "select" | "dateRange"
    options?: Option[]
    range?: [number, number]
    unit?: string
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    filter?: {
      variant: "text" | "number" | "date" | "select" | "boolean"
      options?: Option[]
      defaultValue?: string | boolean
    }
  }
}

export interface Option {
  label: string
  value: string | boolean
}
