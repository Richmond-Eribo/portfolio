import { useQueryStates } from "nuqs";
import { createParamsParsers } from "@/lib/data-table-params-parser";
import { ColumnDef } from "@tanstack/react-table";

/**
 * Custom hook to handle table parameters from URL query states
 * it uses column definitions to create appropriate parsers.
 * then uses `useQueryStates` to manage the state.
 * @param columns - Table column definitions
 * @returns [params, setParams] - Current params and setter function
 */
export function useTableParams<TData>(columns: ColumnDef<TData>[]) {
  const parserParams = createParamsParsers(columns);
  const [params, setParams] = useQueryStates(parserParams);

  return [params, setParams] as const;
}
