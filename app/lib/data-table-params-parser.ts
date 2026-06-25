// TODO: THE NEW PARAMS NEEDS TO BE STRICTLY TYPED ACROSS

import {
  type SingleParser,
  type UseQueryStateOptions,
  createParser,
  parseAsInteger,
  parseAsString,
  throttle,
} from "nuqs";
import type { ColumnDef } from "@tanstack/react-table";

export const parseAsDateRange = createParser({
  parse(queryValue) {
    if (!queryValue) return null;

    return queryValue.split(",");
  },

  serialize(value) {
    return value.join(",");
  },
});

export const nuqsQueryOptions: Omit<UseQueryStateOptions<string>, "parse"> & {
  debounceMs?: number;
} = {
  history: "push" as const,
  scroll: false,
  shallow: true,
  throttleMs: 300,
  debounceMs: 500,
  clearOnDefault: true,
  limitUrlUpdates: throttle(500),
};

/**
 * This creates a map of column IDs to their respective parsers based on the column definitions.
 *
 * @example Usage
 *
 * ```
 * const queryStateOptions = { history: "replace", shallow: true};
 * const paramsParsers = createParamsParsers(driverListColumn, queryStateOptions);
 * const [params, setParams] = useQueryStates(paramsParsers);
 * ```
 *
 * @param columns - the columns definition from the table
 * @param queryStateOptions - the options for the query state parser
 * @returns  A record mapping column IDs to their respective parsers.
 * ```
 * {
 *    firstName: Parser<string>;
 *    lastName: Parser<string>;
 *    createdAt: parseAsDateRange;
 *    ...
 * }
 * ```
 */
export const createParamsParsers = <TData>(
  columns: ColumnDef<TData, any>[],
  queryStateOptions = nuqsQueryOptions
) => {
  const filterableColumns = columns.filter(
    (column) => column.enableColumnFilter
  );

  return filterableColumns.reduce<Record<string, SingleParser<any>>>(
    (acc, column) => {
      if (typeof column.id === "string") {
        if (column.meta?.variant === "dateRange") {
          acc[column.id ?? column.meta?.label] =
            parseAsDateRange.withOptions(queryStateOptions);
        } else {
          acc[column.id ?? column.meta?.label] =
            parseAsString.withOptions(queryStateOptions);
        }
      }

      return acc;
    },
    { page: parseAsInteger.withDefault(1) }
  );
};
