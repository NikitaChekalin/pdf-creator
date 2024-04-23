'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/shared/api'

interface ReactQueryProvider {
  children: React.ReactNode
}

export const ReactQueryProvider = ({ children }: ReactQueryProvider) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
