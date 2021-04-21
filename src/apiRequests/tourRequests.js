import { cleanInputStrings } from "./dataCleaners"
import { header } from "./header"

export const getTour = (auth, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/tour/${tourId}`,
    {
      headers: header(auth),
    }
  )
}

export const getTours = (auth, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${tourId}/tour`,
    {
      headers: header(auth),
    }
  )
}

export const getUsersInTour = (auth, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/tour_user?tour_id=${tourId}`,
    {
      headers: header(auth),
    }
  )
}

export const addTour = (auth, id, data) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}/tour`,
    {
      method: "POST",
      headers: header(auth),
      body: JSON.stringify(cleanInputStrings(data)),
    }
  )
}

export const addUsersToTour = (auth, tourId, emptyData, email) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/tour_user?tour_id=${tourId}&email_address=${email}`,
    {
      method: "POST",
      headers: header(auth),
    }
  )
}

export const updateTour = (auth, tourId, data) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/tour/${tourId}`,
    {
      method: "PATCH",
      headers: header(auth),
      body: JSON.stringify(cleanInputStrings(data)),
    }
  )
}

export const deleteTour = (auth, tourId) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/tour/${tourId}`,
    {
      method: "DELETE",
      headers: header(auth),
    }
  )
}
