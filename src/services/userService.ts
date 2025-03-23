import axios from "axios";
import { BASE_API_URL, getAuthHeaders } from "../utils/config";

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
