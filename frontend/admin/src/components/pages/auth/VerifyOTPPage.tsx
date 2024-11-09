import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import VerifyOTPForm from "../../forms/VerifyOTPForm";

const VerifyOTPPage: React.FC = () => {
  return (
    <AuthLayout
      logo="bi-envelope"
      logoName="Xác nhận mã OTP"
      instructions="Vui lòng nhập mã OTP đã được gửi tới email của bạn."
    >
      <VerifyOTPForm />
    </AuthLayout>
  );
};

export default VerifyOTPPage;
