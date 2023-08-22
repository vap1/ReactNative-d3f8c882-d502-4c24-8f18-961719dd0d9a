
interface Opportunity {
  id: number;
  name: string;
  status: string;
  assignedTo: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface OpportunityDetails {
  opportunity: Opportunity;
  tasks: Task[];
}

interface Task {
  id: number;
  name: string;
  status: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateOpportunityRequest {
  name: string;
  assignedTo: string;
  description: string;
}

interface CreateOpportunityResponse {
  success: boolean;
  errorMessage?: string;
}

interface UpdateOpportunityRequest {
  id: number;
  name?: string;
  assignedTo?: string;
  description?: string;
}

interface UpdateOpportunityResponse {
  success: boolean;
  errorMessage?: string;
}

interface CreateTaskRequest {
  opportunityId: number;
  name: string;
  assignedTo: string;
}

interface CreateTaskResponse {
  success: boolean;
  errorMessage?: string;
}

interface UpdateTaskRequest {
  id: number;
  name?: string;
  assignedTo?: string;
}

interface UpdateTaskResponse {
  success: boolean;
  errorMessage?: string;
}

export type {
  Opportunity,
  OpportunityDetails,
  Task,
  CreateOpportunityRequest,
  CreateOpportunityResponse,
  UpdateOpportunityRequest,
  UpdateOpportunityResponse,
  CreateTaskRequest,
  CreateTaskResponse,
  UpdateTaskRequest,
  UpdateTaskResponse,
};