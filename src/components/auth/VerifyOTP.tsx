import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";

import { useAuth } from "../../contexts/AuthContext";
import { resendOtpIfNeeded } from "../../services/authService";
import Input from "../common/shared/Input";
import Button from "../common/shared/Button";

const VerifyOTP: React.FC = () => {
  const navigate = useNavigate();
  const { verifyAccountOtp } = useAuth();
  const { search } = useLocation();
  const { email = "" } = Object.fromEntries(new URLSearchParams(search));

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState<boolean>(false);
  const [isResendingOtp, setIsResendingOtp] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    // Allow only a single digit and set the value
    if (/^\d?$/.test(value)) {
      setOtp((prev) => {
        const updateOtp = [...prev];
        updateOtp[index] = value;
        return updateOtp;
      });

      // Move to the next input if a digit is entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        // Move to the previous input if Backspace is pressed on an empty field
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      message.error("Vui lòng nhập đầy đủ mã OTP");
      return;
    }

    setLoading(true);

    const otpString = otp.join("");
    try {
      const res = await verifyAccountOtp(email, otpString);
      setLoading(false);

      if (res.status === 200) {
        message.success(res.message);
        navigate("/");
      }
    } catch (error: any) {
      setLoading(false);
      message.error(error.message || "Xác minh thất bại");
    }
  };

  const handleResentOtp = async () => {
    setIsResendingOtp(true);

    try {
      const res = await resendOtpIfNeeded(email);
      setIsResendingOtp(false);
      message.success(res.message);
    } catch (error: any) {
      setIsResendingOtp(false);
      message.error(error.message || "Gửi lại mã OTP thất bại");
    }
  };

  const handleBack = () => {
    navigate("/forgot-password");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2"
      onSubmit={handleSubmit}
    >
      {/* Otp field */}
      <div className="w-full mb-5 flex justify-between gap-2.5">
        {otp.map((value, index) => (
          <Input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)} // Set the ref for each input
            type="text"
            id={`otp${index + 1}`}
            className="text-center"
            value={value}
            maxLength={1}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            autoComplete="off"
          />
        ))}
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

      {/* Resend otp button */}
      <div className="w-full mb-3 flex gap-x-[5px] justify-center">
        <span className="text-secondary-700">Không nhận được mã?</span>
        <Button
          variant="primary-link"
          onClick={handleResentOtp}
          loading={isResendingOtp}
          disabled={isResendingOtp}
        >
          Gửi lại mã
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

export default VerifyOTP;
