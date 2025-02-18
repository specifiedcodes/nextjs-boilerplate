import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={cn("w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin", className)} />
  )
}