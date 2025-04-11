import { ApplicationStage } from "../constants/applicationStages";
import { ApplicationStatus } from "../constants/applicationStatus";
import { Candidate } from "./candidate";
// import { PageResponse } from "./page";

// export interface Application {
//   id: number;
//   candidate: Candidate;
//   stage: ApplicationStage;
//   status: ApplicationStatus;
//   notes?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

interface CVFile {
  fileName: string;
  uploadedAt: string;
}

export interface Application {
  _id: string;
  candidate: Candidate;
  jobId: string;
  cvFile?: CVFile;
  stage: ApplicationStage;
  status: ApplicationStatus;
  notes?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ApplyForJobRequest {
  name: string;
  email: string;
  phone: string;
  source: string;
  cvFile: File | null;
  notes: string;
}

export interface ApplyForJobPayload {
  message?: string;
  candidate: Candidate;
  cvFile: CVFile;
  notes?: string;
  continued?: boolean;
  createdBy?: string;
  updatedBy?: string;
  continued?: boolean;
}

export interface StageData {
  activeCandidates?: number;
  pendingCandidates?: number;
  //applications: PageResponse<Application> | null;
  applications: Application | null;
}
