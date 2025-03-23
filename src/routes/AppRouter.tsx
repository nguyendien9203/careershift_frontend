import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import InterviewSchedule from "../pages/interview/InterviewSchedule";
import ConductInterview from "../pages/interview/ConductInterview"; 
import UserSchedule from "../pages/interview/UserSchedule"; // Đã import trước đó
import Offer from "../pages/Offer/OfferSalary"; // Đã import trước đó
import StatusOffer from "../pages/Offer/StatusOffer"; // Đã import trước đó
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Private routes */}
        <Route path="/" element={<MainLayout />}>
          {/* <Route
            index
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          /> */}
          <Route index element={<DashboardPage />} />
          <Route path="/recruitment/jobs" element={<JobListPage />} />
          <Route path="/recruitment/jobs/:slug" element={<JobDetailPage />} />
          <Route path="/recruitment/job/add" element={<JobAddPage />} />
          <Route path="/interview/schedule" element={<InterviewSchedule />} /> {/* Thêm route */}
          <Route path="/interview/conduct" element={<ConductInterview />} /> {/* Thêm route */}
          <Route path="/interview/user-schedule" element={<UserSchedule />} />
          <Route path="/offersalary" element={<Offer />} />
          <Route path="/offerstatus" element={<StatusOffer/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
