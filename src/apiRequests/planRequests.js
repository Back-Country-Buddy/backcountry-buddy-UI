import { header } from "./header"
import { cleanInputStrings } from "./dataCleaners"
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getPlan = (auth, userId, emptyData, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
      headers: header(auth),
    }
  )
}

export const addPlan = (auth, userId, emptyData, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
      method: "POST",
      headers: header(auth),
      body: JSON.stringify({}),
    }
  )
}

export const updatePlan = (auth, planId, data) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/plan/${planId}`,
    {
      method: "PUT",
      headers: header(auth),
      body: JSON.stringify(cleanInputStrings(data)),
    }
  )
}

export const getWeather = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={current,minutely,hourly,alerts}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err))
}
