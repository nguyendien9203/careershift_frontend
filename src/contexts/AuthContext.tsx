import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

import {
  login as performLogin,
  verifyAccountOtp as performVerifyAccountOtp,
  refreshToken as performRefreshToken,
  logout as performLogout,
} from "../services/authService";
import { getMe as fetchUserInfo } from "../services/userService";
import { User } from "../types/user";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<any>;
  verifyAccountOtp: (email: string, otp: string) => Promise<any>;
  logout: () => void;
  isUserAuthenticated: () => Promise<boolean>;
}

interface DecodedToken {
  id: string;
  exp: number;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserFromToken = useCallback(async () => {
    const token = localStorage.getItem("access_token");
    console.log("Token:", token);
    if (!token) return;

    try {
      const decodedToken = jwtDecode<DecodedToken>(token);
      const userData = await fetchUserInfo(decodedToken.id);
      setUser(userData);
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
      logout();
    }
  }, []);

  useEffect(() => {
    setUserFromToken();
  }, [setUserFromToken]);

  console.log("User:", user);

  const handleTokenResponse = async (token: string) => {
    localStorage.setItem("access_token", token);
    await setUserFromToken();
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await performLogin(email, password);
      if (res.status === 200) {
        await handleTokenResponse(res.accessToken);
      }
      return res;
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      throw error;
    }
  };

  const verifyAccountOtp = async (email: string, otp: string) => {
    try {
      const res = await performVerifyAccountOtp(email, otp);
      if (res.status === 200) {
        await handleTokenResponse(res.accessToken);
      }
      return res;
    } catch (error) {
      throw error;
    }
  };

  const refreshAccessToken = async () => {
    try {
      const res = await performRefreshToken();
      console.log("Refresh Token Response:", res);
      if (res.status === 200) {
        await handleTokenResponse(res.accessToken);
        return true;
      }
    } catch (error) {
      console.error("Refresh token hết hạn hoặc lỗi:", error);
      logout();
    }
    return false;
  };

  const isUserAuthenticated = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return false;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      if (Date.now() >= decoded.exp * 1000) {
        console.log("Token hết hạn, thử refresh...");
        const refreshed = await refreshAccessToken();
        return refreshed;
      }
      return true;
    } catch (error) {
      console.error("Lỗi khi xác thực token:", error);
      logout();
      return false;
    }
  };

  const logout = async () => {
    await performLogout();
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        verifyAccountOtp,
        logout,
        isUserAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
