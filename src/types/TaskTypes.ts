
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TaskDetails {
  taskId: number;
  title: string;
  description: string;
  status: string;
  assignedTo: string;
}

interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}

export type { Task, TaskDetails, TaskResponse };