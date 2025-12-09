import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b82f6] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#3b82f6] hover:bg-[#2563eb] dark:bg-[#60a5fa] dark:hover:bg-[#3b82f6] text-white border border-transparent',
    secondary: 'bg-[#f3f4f6] hover:bg-[#e5e7eb] dark:bg-[#1f2937] dark:hover:bg-[#374151] text-[#374151] dark:text-[#e5e7eb] border border-[#e5e7eb] dark:border-[#374151]',
    outline: 'bg-transparent hover:bg-[#f9fafb] dark:hover:bg-[#1f2937] text-[#374151] dark:text-[#e5e7eb] border border-[#d1d5db] dark:border-[#4b5563]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const width = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}