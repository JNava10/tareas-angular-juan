export interface TaskList {
  data: Task[]
}

export interface Task {
  id: number
  description: string
  difficulty: number
  estimatedHours: number
  workedHours: number
  realizedPercentage: number
  isEnded: boolean
  createdAt: string
  updatedAt: string
  deletedAt: any
}
