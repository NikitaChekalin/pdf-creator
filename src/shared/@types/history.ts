export type HistoryConversion = {
  date: string
  base64: string
  number: number
}

export type History = HistoryConversion[]

export type HistoryFile = Omit<HistoryConversion, 'number'>
