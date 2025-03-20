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
} from "../services/authService";
import { User } from "../types/user";

interface AuthContextProps {
  user: User | null;
  setUserFromToken: () => void;
  login: (email: string, password: string) => Promise<any>;
  verifyAccountOtp: (email: string, otp: string) => Promise<any>;
  logout: () => void;
  isUserAuthenticated: () => boolean;
}

interface DecodedToken {
  sub: string;
  userId: string;
  name: string;
  roles: string[];
  exp: number;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const decodeToken = useCallback((token: string) => {
    const decodedToken: any = jwtDecode(token);
    setUser({
      email: decodedToken.sub,
      id: decodedToken.userId,
      name: decodedToken.name,
      roles: decodedToken.roles,
    });
  }, []);

  const setUserFromToken = useCallback(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      decodeToken(token);
    }
  }, [decodeToken]);

  // useEffect(() => {
  //   setUserFromToken();
  // }, [setUserFromToken]);

  const login = (email: string, password: string) => {
    return performLogin(email, password)
      .then((res) => {
        if (res.status === 200) {
          const jwtDecode = res.data.accessToken;
          localStorage.setItem("access_token", jwtDecode);
          decodeToken(jwtDecode);
        }
        return res;
      })
      .catch((error) => {
        throw error;
      });
  };

  const verifyAccountOtp = (email: string, otp: string) => {
    return performVerifyAccountOtp(email, otp)
      .then((res) => {
        if (res.status === 200) {
          const jwtDecode = res.data.accessToken;
          localStorage.setItem("access_token", jwtDecode);
          decodeToken(jwtDecode);
        }
        return res;
      })
      .catch((error) => {
        throw error;
      });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      return false;
    }

    const { exp: expiration } = jwtDecode<DecodedToken>(token);
    if (Date.now() >= expiration * 1000) {
      logout();
      return false;
    }
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUserFromToken,
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
