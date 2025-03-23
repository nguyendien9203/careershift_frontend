import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { ApplicationStatus } from "../constants/applicationStatus";
import {
  Application,
  ApplyForJobPayload,
  ApplyForJobRequest,
  CVFile,
} from "../types/application";

const BASE_URL = `${BASE_API_URL}/recruitments`;
const S3_BASE_URL = `${BASE_API_URL}/s3`;

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
// export const getApplicationsByStage = (
//   pageNo: number = 1,
//   pageSize: number = 5,
//   keyword: string = "",
//   statuses: ApplicationStatus[] = [],
//   stage: ApplicationStage,
//   jobId: number
// ) => {
//   const params: any = {
//     pageNo,
//     pageSize,
//   };

//   if (keyword) params.keyword = keyword;
//   if (statuses.length > 0) params.statuses = statuses.join(",");

//   return axios
//     .get(`${BASE_URL}/stage/${stage}/job/${jobId}`, {
//       headers: getAuthHeaders(),
//       params,
//     })
//     .then((res) => res.data)
//     .catch((error) => {
//       throw new Error(error);
//     });
// };

export const getApplicationsByStage = async (jobId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/stages/${jobId}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể lấy thông tin tuyển dụng"
    );
  }
};

export const updateRecruitmentStatus = async (
  recruitmentId: string,
  status: string
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/${recruitmentId}/update-interview-response`,
      { status },
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "Lỗi khi cập nhật trạng thái tuyển dụng:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Upload CV to S3
export const uploadCandidateCV = async (
  jobId: string,
  formData: ApplyForJobRequest
): Promise<ApplyForJobPayload> => {
  try {
    const headers = {
      ...getAuthHeaders(),
      "Content-Type": "multipart/form-data",
    };

    const response = await axios.post(
      `${S3_BASE_URL}/upload/${jobId}`,
      formData,
      {
        headers,
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Apply for a job
export const applyForJob = async (
  jobId: string,
  applicationData: ApplyForJobPayload
): Promise<ApplyForJobPayload> => {
  try {
    const response = await axios.post(`${BASE_URL}/${jobId}`, applicationData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
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
