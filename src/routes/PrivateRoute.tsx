import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isUserAuthenticated } = useAuth();
  const location = useLocation();

  return isUserAuthenticated() ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
