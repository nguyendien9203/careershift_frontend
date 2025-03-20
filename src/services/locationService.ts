import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { Location } from "../types/job";

const BASE_URL = `${BASE_API_URL}/location`;
const getHeader = () => {
    const token = localStorage.getItem("access_token");
    return {
        Authorization: `Bearer ${token}` ,
        "Content-Type": "application/json"
    };
  };

/**
 * Get location by ID
 * @param id Location ID
 * @returns Promise resolving to LocationResponse object
 */
export const getLocationById = (id: number) => {
  return axios
    .get(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message ||
          "Không thể lấy thông tin vị trí làm việc"
      );
    });
};

/**
 * Get all locations
 * @returns Promise resolving to List of LocationResponse objects
 */
export const getAllLocations = () => {
  return axios
    .get(BASE_URL, {
      headers: getHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message ||
          "Không thể lấy danh sách ví trí làm việc"
      );
    });
};

/**
 * Create a new location
 * @param location Data for the new location
 * @returns Promise resolving after location is created
 */
export const createLocation = (location: Location) => {
  return axios
    .post(BASE_URL, location, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể tạo vị trí làm việc"
      );
    });
};

/**
 * Update a location by ID
 * @param id Location ID
 * @param location Data for updating the location
 * @returns Promise resolving after location is updated
 */
export const updateLocation = (id: number, location: Location) => {
  return axios
    .put(`${BASE_URL}/${id}`, location, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể cập nhật vị trí làm việc"
      );
    });
};

/**
 * Delete a location by ID
 * @param id Location ID
 * @returns Promise resolving after location is deleted
 */
export const deleteLocation = (id: number) => {
  return axios
    .delete(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể xóa vị trí làm việc"
      );
    });
};
