export const getDateString = date => {
  return date.toISOString().substring(0, 10)
}

export const formatUser = (authUser, apiUser) => {
  return {
    id: apiUser.id,
    user_name: apiUser.attributes.user_name,
    email_address: apiUser.attributes.email_address,
    emergency_contact_name: apiUser.attributes.emergency_contact_name,
    emergency_number: apiUser.attributes.emergency_number,
    last_name: authUser.family_name,
    first_name: authUser.given_name,
    full_name: authUser.name,
    picture: authUser.picture
  }
}

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const cleanCurrentTours = tours => {
  return tours.data.filter(tour => !tour.attributes.complete)
    .map(tour => {
      console.log(tour.attributes.creator_id)
      return {
        id: tour.id,
        date: tour.attributes.date,
        location: tour.attributes.location
      }
    })
}

export const cleanInputStrings = stringObj => {
  const formState = stringObj
  for (const field in formState) {
    if (formState[field] === 'nil') {
      formState[field] = ''
    } else if (formState[field] === '') {
      formState[field] = 'nil'
    }
  }

  return formState
}

export const addUser = (
  auth,
  { name, email, emergencyName, emergencyNumber }
) => {
  const body = {
    user_name: name,
    email_address: email,
    emergency_contact_name: '',
    emergency_number: ''
  }

  return fetch(
    "https://backcountry-restapi.herokuapp.com/api/private/v1/user",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth}`,
      },
      body: JSON.stringify(body),
    }
  ).then(response => checkResponse(response))
}

export const getUser = (auth, userData) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userData.email}`,
    {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth}`,
      }
    }
  ).then(response => checkResponse(response))
}

export const handleLogin = (auth, userData) => {
  return getUser(auth, userData)
    .catch(err => {
      if (err.status === 404) {
        console.log('hi')
        return addUser(auth, userData)
      } else {
        return err
      }
    })
}

export const updateUser = (auth, id, data) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth}`
      },
      body: JSON.stringify(data),
    }
  ).then(response => checkResponse(response))
}

export const deleteUser = (id, auth) => {
  return fetch(`url/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify({ id: id }),
  }).then(response => checkResponse(response))
}

export const getTours = (auth, id) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}/tour`,
    {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  }).then(response => checkResponse(response))
  .then(tours => cleanCurrentTours(tours))
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
  }).then(response => checkResponse(response))
}

export const getPlan = (auth, userId, tourId) => {
  return fetch(`https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}/plan`,
    {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    }
  }).then(response => checkResponse(response))
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
  }).then(response => checkResponse(response))
}

export const updateTour = (auth, userId, tourId, data) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userId}/tour/${tourId}`,
    {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${auth}`
    },
    body: JSON.stringify(data)
  }).then(response => checkResponse(response))
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
  }).then(response => checkResponse(response))
}
