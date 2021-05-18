import { useEffect } from 'react'

const localStorage = window.localStorage

const storeData = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

const getStoredData = (name, defaultValue) => {
  if (!navigator.onLine) {
    return JSON.parse(localStorage.getItem(name))
  } else {
    return defaultValue
  }
}

export const useDataStorage = (dataList, isSavable) => {
  useEffect(() => {
    dataList.forEach(data => {
      data.setter(getStoredData(data.name, data.state))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      if (isSavable) {
        dataList.forEach(data => {
          storeData(data.name, data.state)
        })
      }
    }
  })
}
