import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Children } from '@/shared/@types'
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

const RootLayout = ({ children }: Children) => {
  return (
    <html lang='en' className='h-full'>
      <body className={cn('h-full bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
