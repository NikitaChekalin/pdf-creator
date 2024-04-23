'use client'

import { HistoryFile } from '@/shared/@types'

import { usePdfStore } from '../../slice'
import { PdfViewer } from '../atoms'
import { TextForm } from '../organisms'

interface PDFCreate {
  onSaveHistoryConversion: (file: HistoryFile) => void
}

export const PDFCreate = ({ onSaveHistoryConversion }: PDFCreate) => {
  const { lastConvertedFile } = usePdfStore()

  return (
    <div className='w-7/12 h-full flex flex-col gap-2'>
      <TextForm onSaveHistoryConversion={onSaveHistoryConversion} />
      <PdfViewer base64={lastConvertedFile} />
    </div>
  )
}
