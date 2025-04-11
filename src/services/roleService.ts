import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";

const BASE_URL = `${BASE_API_URL}/roles`;

export const getRoles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/roles-for-user-assignment`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Không thể lấy thông tin");
  }
};

export const getRolesWithPermissions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/role-with-permissions`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể lấy thống tin quyên hạn"
    );
  }
};

export const assignPermissionsToRole = async (
  roleId: string,
  permissions: string[]
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${roleId}/assign-permissions`,
      { permissions },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Không thể ủy quyền");
  }
};

export const revokePermissionsFromRole = async (
  roleId: string,
  permissions: string[]
) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${roleId}/revoke-permissions`,
      { permissions },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Không thể thu hồi");
  }
};
