export interface ModelInfo {
  id: string
  display_name: string
  size: string
  context_window: string
  family: string
  has_results: boolean
}

export interface TaskBreakdown {
  accuracy: number
  n_samples: number
  n_correct: number
}

export interface LeaderboardEntry {
  rank: number
  model: string
  display_name: string
  size: string
  context_window: string
  family: string
  overall_accuracy: number
  total_samples: number
  n_correct: number
  avg_latency_ms: number
  task_breakdown: Record<string, TaskBreakdown>
}

export interface AccuracyByLength {
  ctx_size: number
  accuracy: number
  n_samples: number
  n_correct: number
}

export interface AccuracyByLengthAndTask {
  task: string
  ctx_size: number
  accuracy: number
  n_samples: number
  n_correct: number
}

export interface EvalResult {
  model: string
  task: string
  sample_id: number
  global_sample_id: number
  ctx_size: number
  dispersion: string
  padding_type: string
  label: string
  predicted_raw: string
  predicted_normalised: string
  correct: boolean
  latency_ms: number
  tokens_used: number
  chain_of_thought: boolean
  error: string | null
}

export interface RunStatus {
  running: boolean
  current_model: string | null
  progress: number
  total: number
  message: string
  completed_models: string[]
  errors: string[]
}
