import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/shared/lib'

import './globals.css'

export const metadata: Metadata = {
  title: 'PDF Creator',
  description: 'Create your own PDF'
}

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

interface RootLayout {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
