import axios from "axios";

import { BASE_API_URL, getAuthHeaders } from "../utils/config";
import { get } from "http";

const BASE_URL = `${BASE_API_URL}/auth`;

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      {
        withCredentials: true,
        validateStatus: (status) => status >= 200 && status <= 422,
      }
    );
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại"
    );
  }
};

export const verifyAccountOtp = async (email: string, otp: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/verify-otp`,
      { email, otp },
      { withCredentials: true }
    );
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Có lỗi xảy ra khi xác minh OTP"
    );
  }
};

export const resendOtpIfNeeded = async (email: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/send-otp`, { email });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Có lỗi xảy ra khi gửi lại mã OTP"
    );
  }
};

export const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/refresh-token`,
      {},
      { withCredentials: true }
    );
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Có lỗi xảy ra khi gửi lại mã OTP"
    );
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/forgot-password`, { email });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Đã xảy ra lỗi khi đặt lại mật khẩu"
    );
  }
};

export const verifyPasswordResetOtp = async (email: string, otp: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/verify-password-reset-otp`, {
      email,
      otp,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Có lỗi xảy ra khi xác minh OTP"
    );
  }
};

export const resetPassword = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/reset-password`, {
      email,
      password,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Đã xảy ra lỗi khi đặt lại mật khẩu"
    );
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/logout`,
      {},
      { withCredentials: true, headers: getAuthHeaders() }
    );
    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Có lỗi xảy ra khi đăng xuat"
    );
  }
};
