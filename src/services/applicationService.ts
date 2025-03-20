import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { ApplicationStatus } from "../constants/applicationStatus";
import { ApplicationStage } from "../constants/applicationStages";

const BASE_URL = `${BASE_API_URL}/application`;

/**
 * Get a list of applications by stage with pagination and filters.
 * @param pageNo - The page number (default 1)
 * @param pageSize - The number of applications per page (default 5)
 * @param keyword - The keyword search to filter by application (optional)
 * @param statuses - List of application statuses to filter by (optional)
 * @param stage - The application stage to filter by (optional)
 * @param jobId - The job id to filter by (optional)
 * @returns Promise resolving to ApplicationStageResponse
 */
export const getApplicationsByStage = (
  pageNo: number = 1,
  pageSize: number = 5,
  keyword: string = "",
  statuses: ApplicationStatus[] = [],
  stage: ApplicationStage,
  jobId: number
) => {
  const params: any = {
    pageNo,
    pageSize,
  };

  if (keyword) params.keyword = keyword;
  if (statuses.length > 0) params.statuses = statuses.join(",");

  return axios
    .get(`${BASE_URL}/stage/${stage}/job/${jobId}`, {
      headers: getAuthHeaders(),
      params,
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error);
    });
};

/**
 * Call API to reject application.
 * @param applicationId - ID of the application to be rejected.
 * @returns Promise response from the API.
 */
export const rejectApplication = (applicationId: number) => {
  return axios
    .put(`${BASE_URL}/reject/${applicationId}`, null, {
      headers: getAuthHeaders(),
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

/**
 * Call API to accept applications.
 * @param applicationId - ID of the application to accept.
 * @returns Promise response from the API.
 */
export const acceptApplication = (applicationId: number) => {
  return axios
    .put(`${BASE_URL}/accept/${applicationId}`, null, {
      headers: getAuthHeaders(),
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const downloadCV = (fileId: string) => {
  return axios
    .post(
      `${BASE_URL}/download`,
      { fileId },
      { headers: getAuthHeaders(), responseType: "blob" }
    )
    .then((response) => {
      const blob = new Blob([response.data], { type: "application/pdf" });

      console.log("Blob size:", blob.size);
      console.log("Blob type:", blob.type);

      if (blob.size === 0) {
        throw new Error("Downloaded file is empty");
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Failed to download file", error);
    });
};

export const previewCV = (fileId: string) => {
  return axios
    .get(`${BASE_URL}/files/${fileId}/preview`, {
      headers: getAuthHeaders(),
      responseType: "blob",
    })
    .then((response) => {
      const fileURL = URL.createObjectURL(response.data);
      const iframe = document.createElement("iframe");
      iframe.src = fileURL;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      const modal = window.open();
      modal?.document.body.appendChild(iframe);
    })
    .catch((error) => {
      console.error("Failed to preview file", error);
    });
};
