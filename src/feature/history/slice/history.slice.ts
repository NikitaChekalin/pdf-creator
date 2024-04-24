import { History, HistoryConversion, HistoryFile } from '@shared/@types'
import { create } from 'zustand'

export interface useHistoryStore {
  historyConversions: History
  activeHistoryItem: HistoryConversion | null

  setHistoryConversion: (file: HistoryFile) => void
  setActiveHistoryItem: (item: HistoryConversion) => void
}

export const useHistoryStore = create<useHistoryStore>((set, get) => ({
  historyConversions: [],
  activeHistoryItem: null,

  setHistoryConversion: (file: HistoryFile) => {
    const { historyConversions } = get()
    const historyConversionNumber = historyConversions.length + 1

    const historyConversionItem = { ...file, number: historyConversionNumber }

    set((state) => ({
      ...state,
      historyConversions: [...state.historyConversions, historyConversionItem],
      activeHistoryItem: historyConversionItem
    }))
  },

  setActiveHistoryItem: (item: HistoryConversion) => set(() => ({ activeHistoryItem: item }))
}))
