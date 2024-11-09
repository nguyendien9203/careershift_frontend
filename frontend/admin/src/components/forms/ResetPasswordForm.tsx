import React from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const ResetPasswordForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-2.5">
      {/* Password field */}
      <div className="w-full mb-5">
        <Input
          label="Mật Khẩu"
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          id="password"
          icon="bi-shield-lock"
          showPasswordToggle={true}
          layout="vertical"
        />
      </div>

      {/* New password field */}
      <div className="w-full mb-5">
        <Input
          label="Xác nhận mật khẩu"
          type="password"
          placeholder="Nhập lại mật khẩu của bạn"
          id="password"
          icon="bi-shield-lock"
          showPasswordToggle={true}
          layout="vertical"
        />
      </div>

      {/* Confirm button */}
      <div className="w-full mb-5">
        <Button variant="primary">Xác nhận</Button>
      </div>

      {/* Back button */}
      <Button
        variant="secondary-link"
        alignment="center"
        icon="bi-chevron-left"
      >
        Quay lại
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
