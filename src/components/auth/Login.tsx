import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import Button from "../common/shared/Button";
import Input from "../common/shared/Input";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      message.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const emailError = validateField("email", email);
    if (emailError) {
      message.error(emailError);
      return;
    }

    setLoading(true);

    try {
      const res = await login(email, password);
      setLoading(false);

      if (res.status === 422) {
        message.info(res.message);
        navigate(`/verify-otp?email=${email}`);
      } else if (res.status === 200) {
        message.success(res.message);
        navigate("/");
      } else {
        message.error(res.message);
      }
    } catch (error: any) {
      setLoading(false);
      message.error(error.message || "Đăng nhập thất bại, vui lòng thử lại");
    }
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "email":
        if (!value) return "Email không được để trống";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email không hợp lệ";
        return null;
      case "password":
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
      className="flex flex-col justify-center items-center gap-y-2"
      onSubmit={handleSubmit}
    >
      {/* Login with Google button */}
      {/* <Button variant="light" icon={FcGoogle} className="w-full">
        Đăng nhập với Google
      </Button> */}

      {/* Divide */}
      {/* <div className="flex items-center my-3 w-full">
        <div className="border-t border-secondary-100 flex-grow"></div>
        <span className="px-2 text-secondary-700">Hoặc</span>
        <div className="border-t border-secondary-100 flex-grow"></div>
      </div> */}

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
          validate={(value) => validateField("email", value)}
        />
      </div>

      <div className="w-full mb-3 flex flex-col gap-y-2">
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
          validate={(value) => validateField("password", value)}
        />

        {/* Forgot password link */}
        {/* <Button
          variant="secondary-link"
          alignment="start"
          onClick={handleForgotPasword}
        >
          Quên mật khẩu?
        </Button> */}
      </div>

      {/* Login button */}
      <Button
        variant="primary"
        type="submit"
        loading={loading}
        disabled={loading}
        className="w-full"
      >
        Đăng Nhập
      </Button>
    </form>
  );
};

export default Login;
