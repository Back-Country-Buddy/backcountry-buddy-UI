export const getTours = (auth, id, completed) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}/tour`,
    {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  })
}

export const addTour = (auth, id, data) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}/tour`,
    {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify(data)
  })
}

export const updateTour = (auth, userId, data, tourId) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}`,
    {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify(data)
  })
}
