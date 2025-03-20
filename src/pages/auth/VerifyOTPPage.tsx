import React from "react";

import AuthLayout from "../../layouts/AuthLayout";
import VerifyOTP from "../../components/auth/VerifyOTP";

const VerifyOTPPage: React.FC = () => {
  return (
    <AuthLayout
      logo="bi-envelope"
      logoName="Xác nhận mã OTP"
      instructions="Vui lòng nhập mã OTP đã được gửi tới email của bạn."
    >
      <VerifyOTP />
    </AuthLayout>
  );
};

export default VerifyOTPPage;
