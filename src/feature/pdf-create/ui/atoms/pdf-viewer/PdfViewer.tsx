'use client'

export const PdfViewer = ({ base64 }: { base64: any }) => {
  return <embed className='h-full' src={base64} />
}
