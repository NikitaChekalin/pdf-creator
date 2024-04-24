'use client'

import { HistoryFile } from '@/shared/@types'

import { PdfViewer } from '../atoms'
import { TextForm } from '../organisms'

interface PDFConvert {
  activeHistoryItem: string
  onSaveHistoryConversion: (file: HistoryFile) => void
}

export const PDFConvert = ({ onSaveHistoryConversion, activeHistoryItem }: PDFConvert) => {
  return (
    <div className='w-7/12 flex flex-col gap-2'>
      <PdfViewer base64={activeHistoryItem} />
      <TextForm onSaveHistoryConversion={onSaveHistoryConversion} />
    </div>
  )
}
