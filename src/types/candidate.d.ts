import { ApplicationStatus } from "../constants/applicationStatus";

export interface Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: ApplicationStatus;
    cvUrl: string;
    createdAt: string;
    updatedAt: string;
}