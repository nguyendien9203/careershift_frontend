import React from "react";
import { IconType } from "react-icons";

import Spin from "./Spin";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "primary-link"
    | "secondary"
    | "secondary-link"
    | "light"
    | "light-link"
    | "danger"
    | "danger-link";
  icon?: string | IconType;
  alignment?: "center" | "start" | "end";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  className?: string;
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon: Icon,
  alignment = "center",
  size = "medium",
  children,
  loading = false,
  disabled = false,
  className = "",
  iconClassName = "",
  ...props
}) => {
  const baseStyle = "flex items-center font-normal focus:ouline-none";
  const alignmentStyle =
    alignment === "center"
      ? "justify-center"
      : alignment === "start"
      ? "justify-start"
      : "justify-end";

  const sizeStyles = 
    size === "small"
      ? "h-6 px-1 text-xs"
      : size === "large"
      ? "h-10 px-3 text-lg"
      : "h-8 px-2 text-sm";
    
  const commonButtonStyle = `${sizeStyles} rounded-[5px]`;
  const commonLinkStyle = "cursor-pointer hover:underline text-sm";

  // Define style for button
  const variantButtonStyle =
    variant === "primary"
      ? `${commonButtonStyle} bg-primary-500 text-white hover:bg-primary-600`
      : variant === "secondary"
      ? `${commonButtonStyle} bg-secondary-600 text-white hover:bg-secondary-700`
      : variant === "danger"
      ? `${commonButtonStyle} bg-red-500 text-white hover:bg-red-600`
      : `${commonButtonStyle} bg-white text-black border border-secondary-100 hover:bg-slate-100`;

  // Define style for link
  const variantLinkStyle =
    variant === "primary-link"
      ? `text-primary-500 ${commonLinkStyle}`
      : variant === "secondary-link"
      ? `text-secondary-700 ${commonLinkStyle}`
      : variant === "danger-link"
      ? `text-red-500 ${commonLinkStyle}`
      : `text-black ${commonLinkStyle}`;

  // Spinner color depends on variant
  const getSpinColor = () => (variant === "primary" || variant === "secondary" ? "white" : "black");

  const renderIcon = Icon ? (
    <span className={`flex items-center text-xs justify-center ${iconClassName}`}>
      {typeof Icon === "string" ? (
        <i className={`bi ${Icon}`}></i>
      ) : (
        React.createElement(Icon, { size: 14, color: "currentColor" })
      )}
    </span>
  ) : null;
  
  // Render content based on loading state
  const renderContent = () => (loading ? <Spin color={getSpinColor()} /> : <div className="flex items-center gap-x-2">{renderIcon}{children}</div>);

  const disabledStyles = loading ? "cursor-not-allowed opacity-50" : "";

  const isDisabled = loading || disabled;

  if (variant.includes("-link")) {
    return (
      <a
        className={`${baseStyle} ${alignmentStyle} ${variantLinkStyle} ${disabledStyles} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyle} ${alignmentStyle} ${variantButtonStyle} ${disabledStyles} ${className}`}
      disabled={isDisabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
