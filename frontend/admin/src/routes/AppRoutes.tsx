import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from '../components/pages/auth/LoginPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
        <Routes>
            {/* Public routes */}
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes