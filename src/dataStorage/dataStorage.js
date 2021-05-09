const localStorage = window.localStorage

export const storeData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getStoredData = (name, default) => {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name)
  } else {
    return default 
  }
}
