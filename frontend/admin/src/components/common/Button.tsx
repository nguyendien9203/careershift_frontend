import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'light' | 'no-boder';
    icon?: string | IconType;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', icon, children, ...props}) => {
    const baseStyle = 'p-2.5 w-full h-10 flex items-center justify-center font-normal font-base rounded-[5px] focus:ouline-none';
    const variantStyle =
    variant === 'primary'
      ? 'bg-primary-500 text-white hover:bg-primary-600'
    : variant === 'light'
      ? 'bg-white text-black border border-secondary-100 hover:bg-slate-100'
      : 'bg-transparent text-secondary-700 border-none hover:underline';
  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
        {icon && (
            <span className="mr-2.5 w-5 h-5 flex items-center justify-center">
                {typeof icon === 'string' ? (
                    <i className={`bi ${icon}`}></i>
                ) : (
                    React.createElement(icon, { size: 20, color: 'currentColor' })
                )}
            </span>
        )}
        {children}
    </button>
  )
}

export default Button