'use client'

import create from 'zustand'

import { History, HistoryFile } from '@/shared/@types'

export interface useHistoryStore {
  historyConversion: History | []
  setHistoryConversion: (file: HistoryFile) => void
}

export const useHistoryStore = create<useHistoryStore>()((set) => ({
  historyConversion: [],

  setHistoryConversion: (file: HistoryFile) =>
    set((state) => ({
      historyConversion: [
        ...state.historyConversion,
        { ...file, number: state.historyConversion.length + 1 }
      ]
    }))
}))
