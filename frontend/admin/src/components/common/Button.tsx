import React from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "primary-link"
    | "secondary"
    | "secondary-link"
    | "light"
    | "light-link";
  icon?: string | IconType;
  alignment?: "center" | "start" | "end";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  alignment = "center",
  children,
  ...props
}) => {
  const baseStyle = "flex items-center font-normal font-base focus:ouline-none";
  const alignmentStyle =
    alignment === "center"
      ? "justify-center"
      : alignment === "start"
      ? "justify-start"
      : "justify-end";
  const commonButtonStyle = "w-full h-10 p-2.5 rounded-[5px]";
  const commonLinkStyle = "cursor-pointer hover:underline";

  // Define style for button
  const variantButtonStyle =
    variant === "primary"
      ? `${commonButtonStyle} bg-primary-500 text-white hover:bg-primary-600`
      : variant === "secondary"
      ? `${commonButtonStyle} bg-secondary-600 text-white hover:bg-secondary-700`
      : `${commonButtonStyle} bg-white text-black border border-secondary-100 hover:bg-slate-100`;

  // Define style for link
  const variantLinkStyle =
    variant === "primary-link"
      ? `text-primary-500 ${commonLinkStyle}`
      : variant === "secondary-link"
      ? `text-secondary-700 ${commonLinkStyle}`
      : `text-black ${commonLinkStyle}`;

  const renderIcon = (icon?: string | IconType) => (
    icon && (
        <span className="mr-[5px] w-5 h-5 flex items-center justify-center">
            {typeof icon === 'string' ? (
                <i className={`bi ${icon}`}></i>
            ) : (
                React.createElement(icon, { size: 20, color: 'currentColor' })
            )}
        </span>
    )
  );

  if (variant.includes('-link')) {
    return (
        <a className={`${baseStyle} ${alignmentStyle} ${variantLinkStyle}`} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {renderIcon(icon)}
            {children}
        </a>
    );
  }

  return (
    <button className={`${baseStyle} ${alignmentStyle} ${variantButtonStyle}`} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {renderIcon(icon)}
        {children}
    </button>
  );
};

export default Button;
