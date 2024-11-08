import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  layout?: "horizontal" | "vertical";
  icon?: string;
  showPasswordToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  layout = "vertical",
  icon,
  showPasswordToggle = false,
  type = "text",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`${layout === "horizontal" ? "flex items-center" : ""} w-full`}
    >
      {label && (
        <label
          className={`block text-black text-base font-normal ${
            layout === "horizontal" ? "mr-2.5 w-1/3" : "mb-2.5"
          }`}
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-primary-500">
            <i className={`bi ${icon}`}></i>
          </span>
        )}
        <input
          {...props}
          type={type === "password" && showPassword ? "text" : type}
          className={`border border-secondary-100 rounded-[5px] w-full py-2.5 pr-2.5 text-black leading-tight focus:outline-none h-10 ${
            icon ? "pl-9" : "pl-2.5"
          } ${type !== "password" ? "px-2.5" : ""}`}
        />
        {showPasswordToggle && type === "password" && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-2.5 cursor-pointer text-primary-500"
            onClick={togglePasswordVisibility}
          >
            <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
