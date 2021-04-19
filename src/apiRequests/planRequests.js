export const getPlan = (auth, userId, tourId) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  })
}

export const addPlan = (auth, userId, tourId) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify({})
  })
}

export const updatePlan = (auth, planId, data) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/plan/${planId}`,
    {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify(cleanInputStrings(data))
  })
}
