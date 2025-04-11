import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import Login from "../../components/auth/Login";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      logo="/assets/logo.png"
      logoName="CareerShift"
      instructions="Đăng nhập vào tài khoản của bạn."
    >
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
