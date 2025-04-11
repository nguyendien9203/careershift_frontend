import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Spin } from "antd";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isUserAuthenticated } = useAuth();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true; // Tránh leak state khi component bị unmount

    const checkAuth = async () => {
      const auth = await isUserAuthenticated();
      if (isMounted) setIsAuthenticated(auth);
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [isUserAuthenticated]);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Đang kiểm tra quyền truy cập..." />
      </div>
    );
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
