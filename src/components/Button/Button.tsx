import React from 'react'

interface ButtonProps {
  label?: string
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  dataToggle?: string
  type?: 'button' | 'submit' | 'reset'
  title?: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  children,
  type,
  title,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-[12px] py-[6px] text-[14px] font-[400] leading-[1.42857143] text-center whitespace-nowrap align-middle cursor-pointer select-none bg-none border border-solid border-transparent rounded-[4px] ${className}`}
      type={type}
      title={title}
    >
      {children}
      {label}
    </button>
  )
}

export default Button
