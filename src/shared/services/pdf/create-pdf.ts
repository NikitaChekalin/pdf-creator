import { API_LIST } from '@/shared/constants/api.list'
import { post } from '@/shared/helpers'

export const createPdfRequest = async (apiKey: string, text: string) => {
  const { data } = await post<any>(
    `${API_LIST.createPDF.root}?apiKey=${apiKey}`,
    { text },
    { responseType: 'blob' }
  )

  return data
}
