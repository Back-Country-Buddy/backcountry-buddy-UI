export const getDateString = (date: Date): string => {
  return date.toISOString().substring(0, 10)
}

export const addUser = (
  auth,
  { name, email, emergencyName, emergencyNumber }
) => {
  const body = {
    user_name: name,
    email_address: email,
    emergency_contact_name: emergencyName,
    emergency_number: emergencyNumber,
    auth: auth,
  }

  return fetch(
    "https://backcountry-restapi.herokuapp.com/api/private/v1/user",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${auth}`,
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
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user?email_address=${userData.email}`,
    {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${auth}`,
      },
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

export const deleteUser = (id) => {
  return fetch(`url/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
