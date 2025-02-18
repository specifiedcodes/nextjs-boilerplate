'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormValues } from '../lib/validations'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form Data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input 
          {...register('name')}
          className="mt-1 w-full rounded border p-2"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input 
          {...register('email')}
          className="mt-1 w-full rounded border p-2"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block font-medium">Message</label>
        <textarea 
          {...register('message')}
          className="mt-1 w-full rounded border p-2"
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>
      <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Submit
      </button>
    </form>
  )
}