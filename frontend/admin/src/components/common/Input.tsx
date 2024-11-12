import React, { useState, useEffect, forwardRef } from "react";

import { debounce } from "../../utils/debounce";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  layout?: "horizontal" | "vertical";
  icon?: string;
  showPasswordToggle?: boolean;
  validate?: (value: string) => string | null;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  layout = "vertical",
  icon,
  showPasswordToggle = false,
  type = "text",
  validate,
  value,
  onChange,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Debounced validation function
  const debounceValidate = debounce((value: string) => {
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
    }
  }, 500);

  // When inputValue changes, call the debouncedValidate function
  useEffect(() => {
    if (touched) {
      debounceValidate(value);
    }
  }, [value, debounceValidate, touched]);

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
          <span
            className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-primary-500"
          >
            <i className={`bi ${icon}`}></i>
          </span>
        )}
        <input
          {...props}
          ref={ref}
          value={value}
          onChange={(e) => {
            onChange?.(e);
            setTouched(true);
          }}
          type={type === "password" && showPassword ? "text" : type}
          className={`border rounded-[5px] w-full py-2.5 pr-2.5 text-black leading-tight focus:outline-none focus:border-primary-500 h-10 ${
            icon ? "pl-9" : "pl-2.5"
          } ${type !== "password" ? "px-2.5" : ""} ${props.className} ${
            error ? "border-red-500" : "border-secondary-100"
          }`}
          onBlur={() => setTouched(true)}
        />
        {showPasswordToggle && type === "password" && (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-2.5 cursor-pointer text-primary-500"
            onClick={togglePasswordVisibility}
          >
            <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}></i>
          </span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2.5">{error}</p>}
    </div>
  );
});

export default Input;
