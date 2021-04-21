export const header = (auth) => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${auth}`,
  }
}
