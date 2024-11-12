import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useNotifications } from "../../contexts/NotificationContext";
import {
  verifyAccountOtp,
  verifyPasswordResetOtp,
  resendOtpIfNeeded,
} from "../../services/authService";
import Input from "../common/Input";
import Button from "../common/Button";

const VerifyOTPForm: React.FC = () => {
  const { message } = useNotifications();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { email = "", purpose = "" } = Object.fromEntries(
    new URLSearchParams(search)
  );

  console.log(purpose);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      message.error("Vui lòng nhập đầy đủ mã OTP");
      return;
    }

    setLoading(true);

    const otpString = otp.join("");

    if (purpose === "ACOUNT_VERIFICATION") {
      verifyAccountOtp(email, otpString)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            message.success(res.message);
            navigate("/");
          }
        })
        .catch((error: any) => {
          setLoading(false);
          message.error(error.message || "Xác minh thất bại");
        });
    } else {
      verifyPasswordResetOtp(email, otpString)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            message.success(res.message);
            navigate(`/reset-password?email=${email}`);
          }
        })
        .catch((error: any) => {
          setLoading(false);
          message.error(error.message || "Xác minh thất bại");
        });
    }
  };

  const handleResentOtp = () => {
    setIsResendingOtp(true);

    resendOtpIfNeeded(email, purpose)
      .then((res) => {
        setIsResendingOtp(false);
        message.success(res.message);
      })
      .catch((error) => {
        setIsResendingOtp(false);
        message.error(error.message || "Gửi lại mã OTP thất bại");
      });
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2.5"
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
      <div className="w-full mb-5">
        <Button
          variant="primary"
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Tiếp tục
        </Button>
      </div>

      {/* Resend otp button */}
      <div className="w-full mb-5 flex gap-x-[5px] justify-center">
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

export default VerifyOTPForm;
