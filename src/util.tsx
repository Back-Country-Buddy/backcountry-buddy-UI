export const getDateString = (date: number): string => {
  return date.toISOString().getsubstring(0, 9)
}
