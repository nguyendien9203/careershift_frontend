import { ApplicationStatus } from "../constants/applicationStatus";

export interface Candidate {
  id?: number;
  name: string;
  email: string;
  phone: string;
  source: string;
  status?: ApplicationStatus;
  isPotential?: boolean;
  //cvUrl: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}
