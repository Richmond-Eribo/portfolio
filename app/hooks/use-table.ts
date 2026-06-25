// the table state and the url params are strongly coupled together, so any change in the table state should be reflected in the url params
// and vice versa. This is done using the useQueryState hook from nuqs library

import {
  type TableOptions,
  type Updater,
  type PaginationState,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  useReactTable,
} from "@tanstack/react-table"

import * as React from "react"
import { useTableParams } from "./use-table-params"
import { useDebouncedCallback } from "./use-debounce-callback"

export const pag = { page: 1, limit: 100 }

const DEBOUNCE_MS = 500
const THROTTLE_MS = 300

type filterValueType = string | number | boolean | (string | number)[]

interface UseTableHookProps<TData>
  extends Omit<
      TableOptions<TData>,
      | "state"
      | "getCoreRowModel"
      | "manualFiltering"
      | "manualPagination"
      | "manualSorting"
      | "rowCount"
    >,
    Required<Pick<TableOptions<TData>, "rowCount">> {
  defaultColumnFilters?: ColumnFiltersState
  history?: "push" | "replace"
  debounceMs?: number
  throttleMs?: number
  clearOnDefault?: boolean
  scroll?: boolean
  shallow?: boolean

  /**
   * A mapping of column keys to functions that format how the param is being set.
   * Where each key in the Record should be equivalent to a columnId that you can to replace
   * @example
   * ```tsx
   *  const formatters: Record<string, (val: any) => string> = {
   *   status: (val: boolean) => (val ? "Completed" : "Pending"),
   *   totalEarnings: (val: number) => formatCurrency(val),
   *   totalRides: (val: number) => `${val.toLocaleString()}`,
   * }
   * ```
   *
   */
  filterToParamsSetter?: Record<
    string,
    (
      value: any,
    ) =>
      | string
      | number
      | boolean
      | (string | number)[]
      | Record<string, string | number>
  >

  startTransition?: React.TransitionStartFunction
}

/**
 * Custom hook to manage table state and functionality using TanStack Table.
 * @prop {any[]} props.state - The data to be displayed in the table. you should memoize the data before passing it to this hook.
 * @prop {ColumnDef<any, any>[]} props.columnState - The column definitions for the table.
 * @example
 * const { table } = useTableHook({
 *  data,
 * columns,
 * rowCount
 * })
 * // Use the table instance to render the table and manage its state.
 * @see {@link https://tanstack.com/table/v8/docs/api/core/useReactTable}
 * @see {@link https://tanstack.com/table/v8/docs/examples/overview}
 */
const useTableHook = <TData>(props: UseTableHookProps<TData>) => {
  const {
    columns,
    rowCount,
    initialState,
    history = "push",
    debounceMs = DEBOUNCE_MS,
    throttleMs = THROTTLE_MS,
    clearOnDefault = true,
    scroll = false,
    shallow = true,
    startTransition,
    filterToParamsSetter,
    ...tableProps
  } = props

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(initialState?.columnVisibility ?? {})
  const [rowSelection, setRowSelection] = React.useState({})

  // get and set table params from url - this is two-way binding between table state and url params
  const [params, setParams] = useTableParams(columns)

  // pagination state derived from params
  const pagination: PaginationState = React.useMemo(() => {
    return {
      pageIndex: params.page - 1, // zero-based index -> one-based index

      // use constant page size - page limit is fixed at 100
      pageSize: pag.limit,
    }
  }, [params.page])

  // on pagination change, update the url params
  const onPaginationChange = React.useCallback(
    (updaterOrValue: Updater<PaginationState>) => {
      if (typeof updaterOrValue === "function") {
        // get the new pagination value from the updater function
        const newPagination = updaterOrValue(pagination)
        setParams({ page: newPagination.pageIndex + 1 })
      } else {
        setParams({ page: updaterOrValue.pageIndex + 1 })
      }
    },
    [pagination],
  )

  // Debounced writer: take current columnFilters -> build params object -> push to URL
  const debouncedSyncFiltersToParams = useDebouncedCallback(
    (values: typeof params) => {
      void setParams(values)
    },
    debounceMs,
  )

  //
  // Before initializing column filters state, sync from params
  // START
  //

  const initialColumnFilters: ColumnFiltersState = React.useMemo(() => {
    return Object.entries(params).reduce<ColumnFiltersState>(
      (acc, [id, value]) => {
        if (value == null) return acc
        if (id === "page") return acc // skip page param

        acc.push({ id, value })
        return acc
      },
      [],
    )
  }, [params])

  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>(initialColumnFilters)

  const onColumnFiltersChange = React.useCallback(
    (updaterOrValue: Updater<ColumnFiltersState>) => {
      // update the column filters state
      setColumnFilters(prev => {
        // get the next column filters state
        const next =
          typeof updaterOrValue === "function"
            ? updaterOrValue(prev)
            : updaterOrValue

        // build the params object to be set in the url
        const filterUpdates = next.reduce<
          Record<string, filterValueType | null>
        >((acc, filter) => {
          const value = filter.value as filterValueType
          const id = filter.id

          acc[id] = value

          return acc
        }, {})

        // loop through the existing params to find any removed filters
        const nextFilterIds = new Set(next.map(f => f.id))
        Object.keys(params).forEach(paramKey => {
          if (!nextFilterIds.has(paramKey)) {
            filterUpdates[paramKey] = null
          }
        })

        // console.log(filterUpdates, "filter updates");

        debouncedSyncFiltersToParams(filterUpdates)

        return next
      })
    },
    [debouncedSyncFiltersToParams, filterToParamsSetter],
  )

  //
  // End of column filters state sync from params
  // END
  //

  const table = useReactTable({
    ...tableProps,
    columns,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    rowCount,
    initialState: {
      ...initialState,
    },

    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),

    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    onPaginationChange,
    onColumnFiltersChange,

    // pageCount: -1,

    manualPagination: true,
    manualFiltering: true,
  })

  return {
    table,
  }
}

export default useTableHook

// const onColumnFiltersChange = React.useCallback(
//   (updaterOrValue: Updater<ColumnFiltersState>) => {
//     setColumnFilters((prev) => {
//       const next =
//         typeof updaterOrValue === "function"
//           ? updaterOrValue(prev)
//           : updaterOrValue

//     // loops through the filters, update the next Record with the id and formated value of the filter
//     for (const f of next) {
//       const value = f.value as
//         | string
//         | boolean
//         | number
//         | (number | string)[]
//       const id = f.id as string

//       if (filterToParamsSetter?.[id]) {
//         const result = filterToParamsSetter[id]?.(value)
//         // this function checks if the return type of the filterToParamsSetter is an object
//         // for a case where the filter is returning multiple params {startDate: string, endDate: string}
//         if (typeof result === "object" && !Array.isArray(result)) {
//           Object.assign(next, result)
//         } else {
//           next[id] = result
//         }
//       }

//       // any array value will be handled by the
//       if (!next.hasOwnProperty(id) && !Array.isArray(value)) {
//         next[id] = value
//       }
//     }

//       // console.log(next, "from column filtersChange")
//       debouncedSyncFiltersToParams(next)
//       return next
//     })
//   },
//   [debouncedSyncFiltersToParams]
// )
