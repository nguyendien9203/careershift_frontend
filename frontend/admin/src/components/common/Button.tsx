import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'light' | 'no-boder';
    icon?: string | IconType;
    alignment?: 'center' | 'start' | 'end';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', icon, alignment = 'center', children, ...props}) => {
    const baseStyle = 'flex items-center font-normal font-base focus:ouline-none';
    const variantStyle =
    variant === 'primary'
      ? 'w-full h-10 p-2.5 rounded-[5px] bg-primary-500 text-white hover:bg-primary-600'
    : variant === 'light'
      ? 'w-full h-10 p-2.5 rounded-[5px] bg-white text-black border border-secondary-100 hover:bg-slate-100'
      : 'bg-transparent mt-2.5 text-secondary-700 border-none hover:underline';

    const alignmentStyle = alignment === 'center' ? 'justify-center' : alignment === 'start' ? 'justify-start' : 'justify-end';
  return (
    <button className={`${baseStyle} ${alignmentStyle} ${variantStyle}`} {...props}>
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