import React from 'react';

import AuthLayout from '../../layouts/AuthLayout';
import ForgotPassword from '../../components/auth/ForgotPassword';

const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout
        logo='bi-key'
        logoName='Quên mật khẩu?'
        instructions='Vui lòng nhập địa chỉ email của bạn để thiết lập mật khẩu.'
    >
        <ForgotPassword />
    </AuthLayout>
  )
}

export default ForgotPasswordPage;