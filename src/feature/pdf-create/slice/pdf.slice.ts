'use client'

import create from 'zustand'

export interface usePdfStore {
  lastConvertedFile: string

  setLastConvertedFile: (file: string) => void
}

export const usePdfStore = create<usePdfStore>()((set) => ({
  lastConvertedFile: '',
  historyConversion: [],

  setLastConvertedFile: (file: any) => set({ lastConvertedFile: file })
}))
