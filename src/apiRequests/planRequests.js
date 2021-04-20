import { header } from './header'
import { cleanInputStrings } from './dataCleaners'

export const getPlan = (auth, userId, tourId) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
    headers: header(auth)
  })
}

export const addPlan = (auth, userId, emptyData, tourId) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
    method: 'POST',
    headers: header(auth),
    body: JSON.stringify({})
  })
}

export const updatePlan = (auth, planId, data) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/plan/${planId}`,
    {
    method: 'PATCH',
    headers: header(auth),
    body: JSON.stringify(cleanInputStrings(data))
  })
}
