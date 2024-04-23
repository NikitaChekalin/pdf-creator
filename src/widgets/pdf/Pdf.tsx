import { History, PDFCreate, useHistoryStore } from '@/feature'

export const Pdf = () => {
  const { setHistoryConversion, historyConversion } = useHistoryStore()

  return (
    <div className='h-full flex flex-row gap-4 justify-between'>
      <PDFCreate onSaveHistoryConversion={setHistoryConversion} />
      <History historyConversion={historyConversion} />
    </div>
  )
}
