import { JobLevel } from "../constants/jobLevel";
import { JobStatus } from "../constants/jobStatus";

export interface Location {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Department {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface JobRequest {
  title: string;
  description: string;
  requirements: string;
  benefits: string;
  other: string;
  level: JobLevel | null;  
  startDate: string;
  endDate: string;
  status: string;
  locationIds: number[];
  departmentIds: number[];
}

export interface Job {
  id?: number;
  title: string;
  slug?: string;
  startDate: string;
  endDate: string;
  status: JobStatus;
  level: JobLevel | null;
  departments: Department[];
  locations: Location[];
  description: string;
  requirements: string;
  benefits: string;
  other: string;
  totalApplicants?: number;
  inProgressApplicants?: number;
}
