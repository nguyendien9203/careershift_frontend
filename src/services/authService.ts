import axios from "axios";

import { BASE_API_URL } from "../utils/config";

const BASE_URL = `${BASE_API_URL}/auth`;

export const login = (email: string, password: string) => {
    return axios
        .post(`${BASE_URL}/authenticate`, {email, password}, {
            validateStatus: (status) => {
                return status >= 200 && status <= 403;
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại")
        });
};

export const loginWithGoogle = (googleToken: string) => {
    return axios
        .post(`${BASE_URL}/login/google`, { token: googleToken})
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
        });
};

export const verifyAccountOtp = (email: string, otp: string) => {
    return axios
        .post(`${BASE_URL}/verify-account-otp`, { email, otp })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Có lỗi xảy ra khi xác minh OTP");
        });
}

export const resendOtpIfNeeded = (email: string, purpose: string) => {
    return axios
        .post(`${BASE_URL}/resend-otp`, { email, purpose})
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Có lỗi xảy ra khi gửi lại mã OTP");
        });
}

export const forgotPassword = (email: string) => {
    return axios    
        .post(`${BASE_URL}/forgot-password`, { email })
        .then((res) => res.data)
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Đã xảy ra lỗi khi đặt lại mật khẩu");
        });
}

export const verifyPasswordResetOtp = (email: string, otp: string) => {
    return axios
        .post(`${BASE_URL}/verify-password-reset-otp`, { email, otp })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Có lỗi xảy ra khi xác minh OTP");
        });
}

export const resetPassword = (email: string, password: string) => {
    return axios
        .post(`${BASE_URL}/reset-password`, { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw new Error(error.response?.data?.message || "Đã xảy ra lỗi khi đặt lại mật khẩu");
        });
}

