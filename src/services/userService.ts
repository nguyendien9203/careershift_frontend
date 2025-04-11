import axios from "axios";
import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { CreateUserPayload } from "../types/user";

const BASE_URL = `${BASE_API_URL}/users`;

export const getMe = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/whoami`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể lấy thông tin người dùng"
    );
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể lấy danh sách người dùng"
    );
  }
};

export const addUser = async (user: CreateUserPayload) => {
  try {
    const response = await axios.post(`${BASE_URL}`, user, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể thêm người dùng"
    );
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Không thể xóa người dùng"
    );
  }
};

export const assignRoleToUser = async (userId: string, roles: string) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/${userId}/roles`,
      { roles },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Không thể phân quyền");
  }
};
