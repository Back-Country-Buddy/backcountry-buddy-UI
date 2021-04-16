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

export const addUser = (
  auth,
  { name, email, emergencyName, emergencyNumber }
) => {
  const body = {
    user_name: name,
    email_address: email,
    emergency_contact_name: emergencyName,
    emergency_number: emergencyNumber
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
  ).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response // throw new Error('We apologize, we are having issues loading this page.')
    }
  })
}

export const getUser = (auth, userData) => {
  console.log(userData)
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${userData.email}`,
    {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth}`,
      }
    }
  ).then((response) => response.json())
  // .then(users => {
  //   users.find(user => user.auth === auth)
  // })
}

export const handleLogin = (auth, userData) => {
  return getUser(auth, userData).then((response) => {
    if (response.status === 404) {
      return addUser(auth, userData)
    } else {
      return response
    }
  })
}

export const updateUser = (auth, id, data) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${auth}`,
      },
      body: JSON.stringify(data),
    }
  ).then((response) => response.json())
}

export const deleteUser = (id) => {
  return fetch(`url/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ id: id }),
  }).then((response) => {
    if (response.ok) {
      return response
    } else {
      throw new Error("We apologize, we are having issues loading this page.")
    }
  })
}
