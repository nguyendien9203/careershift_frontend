import React from "react";

import Input from "../common/Input";
import Button from "../common/Button";

const VerifyOTPForm: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-2.5">
      {/* Otp field */}
      <div className="w-full mb-5 flex justify-between">
        <Input type="text" id="otp1" className="w-[40px] text-center" />
        <Input type="text" id="otp2" className="w-[40px] text-center" />
        <Input type="text" id="otp3" className="w-[40px] text-center" />
        <Input type="text" id="otp4" className="w-[40px] text-center" />
        <Input type="text" id="otp5" className="w-[40px] text-center" />
        <Input type="text" id="otp6" className="w-[40px] text-center" />
      </div>

      {/* Continue button */}
      <div className="w-full mb-5">
        <Button variant="primary">Tiếp tục</Button>
      </div>

      {/* Resend otp button */}
      <div className="w-full mb-5 flex gap-x-[5px] justify-center">
        <span className="text-secondary-700">Không nhận được mã?</span>
        <Button variant="primary-link">Gửi lại mã</Button>
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

export default VerifyOTPForm;
