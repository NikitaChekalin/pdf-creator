'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { defaultValues, FormTextValues, textFormValidationSchema } from '../libs'

export const useTextForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormTextValues>({
    defaultValues,
    resolver: yupResolver(textFormValidationSchema)
  })

  const onSubmit = async ({ text }: FormTextValues) => {
    const { data } = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    }).then((res) => res.json())
  }

  return {
    control,
    onSubmit,
    handleSubmit,
    errors
  }
}
