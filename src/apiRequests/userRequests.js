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
  )
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
  )
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
  )
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
  })
}
