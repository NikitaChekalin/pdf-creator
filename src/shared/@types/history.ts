export type HistoryConversions = {
  date: string
  base64: string
  number: number
}

export type History = HistoryConversions[]

export type HistoryFile = Omit<HistoryConversions, 'number'>
