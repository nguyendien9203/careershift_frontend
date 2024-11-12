import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useNotifications } from "../../contexts/NotificationContext";
import { resetPassword } from "../../services/authService";
import Input from "../common/Input";
import Button from "../common/Button";

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const { message } = useNotifications();
  const { search } = useLocation();

  const email = new URLSearchParams(search).get("email") ?? "";
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPasswordError = validateField('newPassword', newPassword); 
    if (newPasswordError) {
      message.error(newPasswordError);
      return;
    }

    const confirmPasswordError = validateField('confirmPassword', confirmPassword, newPassword); 
    if (confirmPasswordError) {
      message.error(confirmPasswordError);
      return;
    }

    setLoading(true);

    resetPassword(email, newPassword)
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          message.success(res.message);
          navigate("/login");
        }
      })
      .catch((error: any) => {
        setLoading(false);
        message.error(error.message || "Có lỗi xảy ra khi đặt lại mật khẩu");
      });
  };

  const validateField = (field: string, value: string, confirmPassword?: string) => {
    switch (field) {
      case 'newPassword':
        if (!value) return "Mật khẩu không được để trống";
        if (value.length < 8) return "Mật khẩu phải có ít nhất 8 ký tự";
        return null;
      case 'confirmPassword':
        if (!value) return "Vui lòng xác nhận mật khẩu";
        if (value !== confirmPassword) return "Mật khẩu và xác nhận mật khẩu không khớp";
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
      className="flex flex-col justify-center items-center gap-y-2.5"
      onSubmit={handleSubmit}
    >
      {/* Password field */}
      <div className="w-full mb-5">
        <Input
          label="Mật Khẩu"
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          id="newPassword"
          icon="bi-shield-lock"
          showPasswordToggle={true}
          layout="vertical"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          validate={(value) => validateField('newPassword', value)}
        />
      </div>

      {/* New password field */}
      <div className="w-full mb-5">
        <Input
          label="Xác nhận mật khẩu"
          type="password"
          placeholder="Nhập lại mật khẩu của bạn"
          id="confirmPassword"
          icon="bi-shield-lock"
          showPasswordToggle={true}
          layout="vertical"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          validate={(value) => validateField('confirmPassword', value, newPassword)}
        />
      </div>

      {/* Confirm button */}
      <div className="w-full mb-5">
        <Button
          variant="primary"
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Xác nhận
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

export default ResetPasswordForm;
