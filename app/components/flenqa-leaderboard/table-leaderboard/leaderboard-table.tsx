import { useMemo } from "react"
import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { DataTable } from "@/components/table/data-table"
import { leaderboardData } from "../data"
import {
  createLeaderboardColumns,
  getLeaderboardTaskKeys,
} from "./leaderboard-column"
import type { LeaderboardEntry } from "@/types/flenqa-benchmark-types"

interface LeaderboardTableProps {
  data?: LeaderboardEntry[]
  className?: string
}

export function LeaderboardTable({
  data = leaderboardData,
  className,
}: LeaderboardTableProps) {
  const taskKeys = useMemo(() => getLeaderboardTaskKeys(data), [data])
  const columns = useMemo(() => createLeaderboardColumns(taskKeys), [taskKeys])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <DataTable
      table={table}
      columns={columns}
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] scrollbar-none overflow-auto ${
        className ?? ""
      }`}
    />
  )
}
