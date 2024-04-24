export const PdfViewer = ({ base64 }: { base64: any }) => {
  return <embed className='h-full max-h-80 border border-gray-200 rounded-md' src={base64} />
}
