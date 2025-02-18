import React from 'react'
import { cn } from '../../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cn('rounded border p-4 shadow-sm', className)} {...props}>
      {children}
    </div>
  )
}