'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { HistoryFile } from '@shared/@types'
import { createPdfRequest } from '@shared/services'

import { defaultValues, FormTextValues, textFormValidationSchema } from '../libs'
import { getBase64FromBlob, getFormattedDate } from '../util'

interface UseTextForm {
  onSaveHistoryConversion: (file: HistoryFile) => void
}

export const useTextForm = ({ onSaveHistoryConversion }: UseTextForm) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FormTextValues>({
    defaultValues,

    resolver: yupResolver(textFormValidationSchema)
  })

  const onSubmit = async ({ text }: FormTextValues) => {
    //here cant use api handler POST because it's return invalid blob file, but I tried
    const data = await createPdfRequest('78684310-850d-427a-8432-4a6487f6dbc4', text).then((res) =>
      getBase64FromBlob(res)
    )

    const historyItem = {
      base64: data as string,
      date: getFormattedDate()
    }

    onSaveHistoryConversion(historyItem)

    reset()
  }

  return {
    control,
    onSubmit,
    handleSubmit,
    errors
  }
}
