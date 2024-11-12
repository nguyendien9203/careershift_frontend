import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { useNotifications } from "../../contexts/NotificationContext";
import { login } from "../../services/authService";
import Button from "../common/Button";
import Input from "../common/Input";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { message } = useNotifications();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      message.error("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    const emailError = validateField('email', email); 
    if (emailError) {
      message.error(emailError);
      return;
    }

    setLoading(true);

    login(email, password)
      .then((res) => {
        setLoading(false);
        if (res.status === 403) {
          message.info(res.message);
          navigate(`/verify-otp?email=${email}&purpose=ACCOUNT_VERIFICATION`);
        } else if (res.status === 200) {
          message.success(res.message);
          navigate("/");
        } else {
          message.error(res.message);
        }
      })
      .catch((error: any) => {
        setLoading(false);
        message.error(error.message || "Đăng nhập thất bạn, vui lòng thử lại");
      });
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'email':
        if (!value) return "Email không được để trống";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email không hợp lệ";
        return null;
      case 'password':
        if (!value) return "Mật khẩu không được để trống";
        return null;
      default:
        return null;
    }
  };  

  const handleForgotPasword = () => {
    navigate("/forgot-password");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2.5"
      onSubmit={handleSubmit}
    >
      {/* Login with Google button */}
      <Button variant="light" icon={FcGoogle}>
        Đăng nhập với Google
      </Button>

      {/* Divide */}
      <div className="flex items-center my-5 w-full">
        <div className="border-t border-secondary-100 flex-grow"></div>
        <span className="px-2.5 text-secondary-700">Hoặc</span>
        <div className="border-t border-secondary-100 flex-grow"></div>
      </div>

      {/* Email field */}
      <div className="w-full mb-5">
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

      <div className="w-full mb-5 flex flex-col gap-y-2.5">
        {/* Password field */}
        <Input
          label="Mật Khẩu"
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          id="password"
          icon="bi-shield-lock"
          showPasswordToggle={true}
          layout="vertical"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          validate={(value) => validateField('password', value)}
        />

        {/* Forgot password link */}
        <Button
          variant="secondary-link"
          alignment="start"
          onClick={handleForgotPasword}
        >
          Quên mật khẩu?
        </Button>
      </div>

      {/* Login button */}
      <Button
        variant="primary"
        type="submit"
        loading={loading}
        disabled={loading}
      >
        Đăng Nhập
      </Button>
    </form>
  );
};

export default LoginForm;
