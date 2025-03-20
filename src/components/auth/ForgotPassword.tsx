import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { forgotPassword } from "../../services/authService";
import Input from "../common/shared/Input";
import Button from "../common/shared/Button";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailError = validateField('email', email); 
    if (emailError) {
      message.error(emailError);
      return;
    }

    setLoading(true);

    forgotPassword(email)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          message.info(res.message);
          navigate(`/verify-otp?email=${email}&purpose=PASSWORD_RESET`);
        }
      })
      .catch((error: any) => {
        setLoading(false);
        message.error(error.message || "Quá trình đặt lại mật khẩu thất bại");
      });
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'email':
        if (!value) return "Email không được để trống";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email không hợp lệ";
        return null;
      default:
        return null;
    }
  };  

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2"
      onSubmit={handleSubmit}
    >
      {/* Email field */}
      <div className="w-full mb-3">
        <Input
          label="Email"
          type="email"
          placeholder="Nhập email của bạn"
          id="email"
          icon="bi-envelope"
          layout="vertical"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validate={(value) => validateField('email', value)}
        />
      </div>

      {/* Continue button */}
      <div className="w-full mb-3">
        <Button
          variant="primary"
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full"
        >
          Tiếp tục
        </Button>
      </div>

      {/* Back button */}
      <Button
        variant="secondary-link"
        alignment="center"
        icon="bi-chevron-left"
        onClick={handleBack}
      >
        Quay lại
      </Button>
    </form>
  );
};

export default ForgotPassword;
