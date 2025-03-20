import { ApplicationStage } from "../constants/applicationStages";
import { ApplicationStatus } from "../constants/applicationStatus";
import { Candidate } from "./candidate";
import { PageResponse } from "./page";

export interface Application {
  id: number;
  candidate: Candidate;
  stage: ApplicationStage;
  status: ApplicationStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StageData {
  activeCandidates: number;
  pendingCandidates: number;
  applications: PageResponse<Application> | null;
}