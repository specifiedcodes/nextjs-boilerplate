import React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors'
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  
  return <button className={cn(baseClasses, variantClasses, className)} {...props} />
}