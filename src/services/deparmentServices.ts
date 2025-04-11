import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { Department } from "../types/job";

const BASE_URL = `${BASE_API_URL}/department`;

/**
 * Get department by ID
 * @param id Department ID
 * @returns Promise resolving to DepartmentResponse object
 */
export const getDepartmentById = (id: number) => {
  return axios
    .get(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể lấy thông tin ban bộ phận"
      );
    });
};

/**
 * Get all departments
 * @returns Promise resolving to List of DepartmentResponse objects
 */

export const getAllDepartments = () => {
  return axios
    .get(BASE_URL, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

/**
 * Create a new department
 * @param department Data for the new department
 * @returns Promise resolving after department is created
 */
export const createDepartment = (department: Department) => {
  return axios
    .post(BASE_URL, department, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể tạo ban bộ phận"
      );
    });
};

/**
 * Update a department by ID
 * @param id Department ID
 * @param department Data for updating the department
 * @returns Promise resolving after department is updated
 */
export const updateDepartment = (id: number, department: Department) => {
  return axios
    .put(`${BASE_URL}/${id}`, department, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể cập nhật ban bộ phận"
      );
    });
};

/**
 * Delete a department by ID
 * @param id Department ID
 * @returns Promise resolving after department is deleted
 */
export const deleteDepartment = (id: number) => {
  return axios
    .delete(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Không thể xóa ban bộ phận"
      );
    });
};
