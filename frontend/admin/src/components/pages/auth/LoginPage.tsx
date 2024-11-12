import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "../../forms/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      logo="/assets/logo.png"
      logoName="CareerShift"
      instructions="Đăng nhập vào tài khoản của bạn."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
