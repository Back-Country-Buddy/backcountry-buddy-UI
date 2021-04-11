export const getDateString = (date: Date): string => {
  return date.toISOString().substring(0, 10)
}
