import { JobLevel } from "../constants/jobLevel";
import { JobStatus } from "../constants/jobStatus";

export interface FilterProps<T> {
  selectedItems: T[];
  onItemChange: (name: T, checked: boolean) => void;
  statusCounts?: { [key: string]: number };
}

// Department Panel
export interface DepartmentPanelProps extends FilterProps<string> {}

// Location Panel
export interface LocationPanelProps extends FilterProps<string> {}

// Job Level Panel
export interface JobLevelPanelProps extends FilterProps<JobLevel> {}

// Job Status Panel
export interface JobStatusPanelProps extends FilterProps<JobStatus> {}