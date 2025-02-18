import { useState, useEffect } from 'react'

// Loading state hook
export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState)
  return { isLoading, setIsLoading }
}

// Form submission hook
export function useSubmit<T>(onSubmit: (data: T) => Promise<void>) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (data: T) => {
    try {
      setIsSubmitting(true)
      setError(null)
      await onSubmit(data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { handleSubmit, isSubmitting, error }
}