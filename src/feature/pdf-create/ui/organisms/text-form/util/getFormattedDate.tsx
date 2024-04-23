export const getFormattedDate = () => {
  return new Date().toISOString().slice(0, 10)
}
