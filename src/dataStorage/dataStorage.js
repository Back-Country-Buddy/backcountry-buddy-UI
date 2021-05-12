const localStorage = window.localStorage

export const storeData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getStoredData = (name, defaultValue) => {
  if (localStorage.getItem(name) !== undefined && !navigator.onLine) {
    return JSON.parse(localStorage.getItem(name))
  } else {
    return defaultValue
  }
}
