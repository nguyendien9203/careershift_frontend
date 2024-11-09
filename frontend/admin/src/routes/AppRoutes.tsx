import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../components/pages/auth/LoginPage';
import ForgotPasswordPage from '../components/pages/auth/ForgotPasswordPage';
import VerifyOTPPage from '../components/pages/auth/VerifyOTPPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
            {/* Public routes */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/verify-otp' element={<VerifyOTPPage />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes