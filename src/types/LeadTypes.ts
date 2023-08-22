
interface Lead {
  id: number;
  name: string;
  contactDetails: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LeadDetails {
  lead: Lead;
  notes: string[];
  documents: string[];
}

interface LeadResponse {
  success: boolean;
  errorMessage?: string;
  leads: Lead[];
}

export type { Lead, LeadDetails, LeadResponse };