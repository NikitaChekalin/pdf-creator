import { NextResponse } from 'next/server'

import { createPdfRequest } from '@/shared/services'

export const POST = async (request: Request) => {
  const { text } = await request.json()

  const apiKey = process.env.PDF_API_KEY
  const data = await createPdfRequest(apiKey as string, text)

  return new NextResponse(data)
}
