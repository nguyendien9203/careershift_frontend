import React from "react";
import { FcGoogle } from "react-icons/fc";

import Button from "../common/Button";
import Input from "../common/Input";

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-2.5">
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
        />

        {/* Forgot password link */}
        <Button variant="secondary-link" alignment="start">
          Quên mật khẩu?
        </Button>
      </div>

      {/* Login button */}
      <Button variant="primary">Đăng Nhập</Button>
    </form>
  );
};

export default LoginForm;
