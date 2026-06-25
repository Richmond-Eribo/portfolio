import type { LeaderboardEntry } from "@/types/flenqa-benchmark-types"
import type { ColumnDef } from "@tanstack/react-table"

const TASK_LABELS: Record<string, string> = {
  PIR: "People In Rooms",
  MonoRel: "Monotone Relations",
  "Simplified RuleTaker": "RuleTaker",
}

function AccuracyBar({ value }: { value: number }) {
  const pct = value * 100
  const hue = Math.round(value * 120)

  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-20 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: `oklch(0.7 0.15 ${hue})`,
          }}
        />
      </div>
      <span className="font-mono text-sm tabular-nums">{pct.toFixed(1)}%</span>
    </div>
  )
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-sm font-bold text-black shadow-lg shadow-yellow-500/20">
        1
      </div>
    )
  }

  if (rank === 2) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-400 text-sm font-bold text-black">
        2
      </div>
    )
  }

  if (rank === 3) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-700 text-sm font-bold text-white">
        3
      </div>
    )
  }

  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-sm font-medium text-gray-400">
      {rank}
    </div>
  )
}

const FAMILY_COLORS: Record<string, string> = {
  GLM: "from-red-500/20 to-red-600/20 text-red-300 border-red-500/20",
  Kimi: "from-sky-500/20 to-sky-600/20 text-sky-300 border-sky-500/20",
  Nemotron: "from-lime-500/20 to-lime-600/20 text-lime-300 border-lime-500/20",
  Qwen: "from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-500/20",
  Gemini: "from-blue-400/20 to-blue-500/20 text-blue-300 border-blue-400/20",
  Gemma: "from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/20",
  Granite:
    "from-stone-400/20 to-stone-500/20 text-stone-300 border-stone-400/20",
  Owl: "from-violet-500/20 to-violet-600/20 text-violet-300 border-violet-500/20",
  DeepSeek:
    "from-indigo-500/20 to-indigo-600/20 text-indigo-300 border-indigo-500/20",
}

export function getLeaderboardTaskKeys(data: LeaderboardEntry[]) {
  return data.length
    ? [...new Set(data.flatMap(entry => Object.keys(entry.task_breakdown)))]
    : []
}

export function createLeaderboardColumns(
  taskKeys: string[],
): ColumnDef<LeaderboardEntry>[] {
  return [
    {
      accessorKey: "rank",
      header: () => <span>#</span>,
      cell: ({ row }) => <RankBadge rank={row.original.rank} />,
    },
    {
      accessorKey: "display_name",
      header: "Model",
      cell: ({ row }) => {
        const entry = row.original
        const familyColor =
          FAMILY_COLORS[entry.family] ||
          "from-gray-500/20 to-gray-600/20 text-gray-300 border-gray-500/20"

        return (
          <div>
            <div className="font-semibold text-white">{entry.display_name}</div>
            <div className="mt-1 flex items-center gap-2">
              <span
                className={`inline-flex rounded-full border bg-gradient-to-r px-2 py-0.5 text-[10px] font-medium ${familyColor}`}
              >
                {entry.family}
              </span>
              <span className="text-xs text-gray-500">
                {entry.size} · {entry.context_window}
              </span>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "overall_accuracy",
      header: "Overall Accuracy",
      cell: ({ row }) => <AccuracyBar value={row.original.overall_accuracy} />,
    },
    ...taskKeys.map(task => ({
      id: task,
      header: TASK_LABELS[task] || task,
      cell: ({ row }: { row: { original: LeaderboardEntry } }) => {
        const breakdown = row.original.task_breakdown[task]

        return breakdown ? (
          <AccuracyBar value={breakdown.accuracy} />
        ) : (
          <span className="text-gray-600">—</span>
        )
      },
    })),
    {
      accessorKey: "avg_latency_ms",
      header: "Avg Latency",
      cell: ({ row }) => (
        <span className="font-mono text-xs tabular-nums text-gray-400">
          {row.original.avg_latency_ms.toFixed(0)}ms
        </span>
      ),
    },
    {
      accessorKey: "n_correct",
      header: "Samples",
      cell: ({ row }) => (
        <span className="font-mono text-xs tabular-nums text-gray-400">
          {row.original.n_correct}/{row.original.total_samples}
        </span>
      ),
    },
  ]
}
