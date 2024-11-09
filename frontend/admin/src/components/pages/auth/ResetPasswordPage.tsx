import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import ResetPasswordForm from "../../forms/ResetPasswordForm";

const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout
      logo="bi-grip-horizontal"
      logoName="Thiết lập mật khẩu mới"
      instructions="Mật khẩu nên có ít nhất 8 ký tự"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
