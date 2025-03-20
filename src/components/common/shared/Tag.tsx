import React from 'react';

interface TagProps {
    label: string;
    icon?: string;
    variant?: 'primary' | 'success' | 'warning' | 'purple' | 'light' | 'danger';
    onClick?: () => void;
    className?: string;
}

const Tag: React.FC<TagProps> = ({
  label,
  icon,
  variant = 'primary',
  onClick,
  className = "",
}) => {

  const colorClasses = {
    primary: {
      icon: 'text-primary-500',
      text: 'text-black',
      border: 'border-primary-500',
      background: 'bg-primary-300',
    },
    success: {
      icon: 'text-success-500',
      text: 'text-black',
      border: 'border-success-500',
      background: 'bg-success-100',
    },
    warning: {
      icon: 'text-warning-500',
      text: 'text-black',
      border: 'border-warning-500',
      background: 'bg-warning-100',
    },
    purple: {
      icon: 'text-purple-500',
      text: 'text-black',
      border: 'border-purple-500',
      background: 'bg-purple-100',
    },
    light: {
      icon: 'text-secondary-700',
      text: 'text-black',
      border: 'border-secondary-100',
      background: 'bg-white',
    },
    danger: {
      icon: 'text-red-500',
      text: 'text-black',
      border: 'border-red-500',
      background: 'bg-red-100',
    },
  };

  const { icon: iconColor, text: textColor, border: borderColor, background: backgroundColor } = colorClasses[variant];

  return (
    <div
      className={`tag inline-flex items-center px-2 py-1 ${textColor} ${backgroundColor} ${borderColor} border rounded-full text-xs h-5 ${className}`}
      onClick={onClick}
    >
      {icon && <span className={`mr-2 ${iconColor}`}><i className={`bi ${icon}`}></i></span>}
      <span>{label}</span>
    </div>
  )
}

export default Tag;