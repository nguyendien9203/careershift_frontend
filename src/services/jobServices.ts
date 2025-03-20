import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { JobLevel } from "../constants/jobLevel";
import { JobStatus } from "../constants/jobStatus";

const BASE_URL = `${BASE_API_URL}/job`;

/**
 * Get a list of jobs with pagination and filters
 * @param keyword - The keyword search to filter by job(optional)
 * @param pageNo - The page number (default 1)
 * @param pageSize - The number of jobs per page (default 5)
 * @param level - The job level (optional)
 * @param status - The job status (optional)
 * @param locationIds - List of location IDs to filter by (optional)
 * @param departmentIds - List of department IDs to filter by (optional)
 * @returns Promise resolving to PageResponse<Job>
 */
export const getJobs = (
  pageNo: number = 1,
  pageSize: number = 5,
  keyword: string = "",
  levels: JobLevel[] = [],
  statuses: JobStatus[] = [],
  locations: string[] = [],
  departments: string[] = []
) => {
  const params: any = {
    pageNo,
    pageSize,
  };

  if (keyword) params.keyword = keyword;
  if (levels.length > 0) params.levels = levels.join(",");
  if (statuses.length > 0) params.statuses = statuses.join(",");
  if (locations.length > 0) params.locations = locations.join(",");
  if (departments.length > 0) params.departments = departments.join(",");

  return axios
    .get(BASE_URL, {
      headers: getAuthHeaders(),
      params,
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error);
    });
};

/**
 * Get job by ID
 * @param id Job ID
 * @returns Promise resolving to JobResponse object
 */
export const getJobById = (id: number) => {
  return axios
    .get(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

/**
 * Update the status of a job by its ID
 * @param id Job ID
 * @param status New status to be set
 * @returns Promise resolving after job status is updated
 */
export const updateJobStatus = (id: number, status: JobStatus) => {
  const requestBody = {
    status: status
  };

  return axios
    .put(`${BASE_URL}/${id}/status`, requestBody, {
      headers: getAuthHeaders(),
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
