import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import ResetPassword from "../../components/auth/ResetPassword";

const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout
      logo="bi-grip-horizontal"
      logoName="Thiết lập mật khẩu mới"
      instructions="Mật khẩu nên có ít nhất 8 ký tự"
    >
      <ResetPassword />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
