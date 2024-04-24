import { History, PDFConvert, useHistoryStore } from '@feature'

export const Pdf = () => {
  const { setHistoryConversion, activeHistoryItem } = useHistoryStore()

  return (
    <div className='h-full flex flex-row gap-4 justify-between'>
      <PDFConvert
        onSaveHistoryConversion={setHistoryConversion}
        activeHistoryItem={activeHistoryItem?.base64 || ''}
      />
      <History />
    </div>
  )
}
