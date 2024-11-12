import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../components/pages/auth/LoginPage';
import ForgotPasswordPage from '../components/pages/auth/ForgotPasswordPage';
import VerifyOTPPage from '../components/pages/auth/VerifyOTPPage';
import ResetPasswordPage from '../components/pages/auth/ResetPasswordPage';
import DashboardPage from '../components/pages/dashboard/DashboardPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
            {/* Public routes */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/verify-otp' element={<VerifyOTPPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />

            {/* Private routes */}
            <Route path='/' element={<DashboardPage />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes