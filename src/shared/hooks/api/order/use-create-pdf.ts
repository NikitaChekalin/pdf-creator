import { useMutation } from '@tanstack/react-query'

import { createPdfRequest } from '@/shared/services'

export const useCreatePdf = () =>
  useMutation({
    mutationFn: createPdfRequest
  })
