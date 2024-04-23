'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { usePdfStore } from '@/feature/pdf-create/slice'
import { HistoryFile } from '@/shared/@types'
import { createPdfRequest } from '@/shared/services'

import { defaultValues, FormTextValues, textFormValidationSchema } from '../libs'
import { getFormattedDate } from '../util'

interface UseTextForm {
  onSaveHistoryConversion: (file: HistoryFile) => void
}

export const useTextForm = ({ onSaveHistoryConversion }: UseTextForm) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormTextValues>({
    defaultValues,
    resolver: yupResolver(textFormValidationSchema)
  })
  const { setLastConvertedFile } = usePdfStore()

  const blobToBase64 = (blob: Blob) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }

  const onSubmit = async ({ text }: FormTextValues) => {
    const data = await createPdfRequest('78684310-850d-427a-8432-4a6487f6dbc4', text).then((res) =>
      blobToBase64(res)
    )
    const historyItem = {
      base64: data as string,
      date: getFormattedDate()
    }

    setLastConvertedFile(data as string)
    onSaveHistoryConversion(historyItem)
  }

  return {
    control,
    onSubmit,
    handleSubmit,
    errors
  }
}
