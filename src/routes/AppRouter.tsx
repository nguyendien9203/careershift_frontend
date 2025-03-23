import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyOTPPage from "../pages/auth/VerifyOTPPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import JobListPage from "../pages/job/JobListPage";
import JobDetailPage from "../pages/job/JobDetailPage";
import JobAddPage from "../pages/job/JobAddPage";
import TeamMemberPage from "../pages/setting/TeamMemberPage";
import ProfilePage from "../pages/setting/ProfilePage";
import ChangePasswordPage from "../pages/setting/ChangePasswordPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/verify-otp" element={<VerifyOTPPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Private routes */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/recruitment/jobs"
          element={
            <PrivateRoute>
              <JobListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/recruitment/jobs/:id"
          element={
            <PrivateRoute>
              <JobDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/recruitment/job/add"
          element={
            <PrivateRoute>
              <JobAddPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/team-members"
          element={
            <PrivateRoute>
              <TeamMemberPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <PrivateRoute>
              <ChangePasswordPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
