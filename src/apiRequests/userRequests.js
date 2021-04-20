import { cleanInputStrings } from './dataCleaners'
import { header } from './header'

export const addUser = (auth, { name, email }) => {
  const body = {
    user_name: name,
    email_address: email,
    emergency_contact_name: 'nil',
    emergency_number: 'nil'
  }

  return fetch(
    "https://backcountry-restapi.herokuapp.com/api/private/v1/user",
    {
      method: "POST",
      headers: header(auth),
      body: JSON.stringify(body),
    }
  )
}

export const getUser = (auth, data) => {
  return fetch(
    `https://backcountry-restapi.herokuapp.com/api/private/v1/user/${data.email}`,
    {
      headers: header(auth)
    }
  )
}

export const handleLogin = (auth, data) => {
  return getUser(auth, data)
    .then(response => {
      if (response.status === 404) {
        return addUser(auth, data)
          .then(() => getUser(auth, data))
      } else {
        return response
      }
    })
}

export const updateUser = (auth, id, data) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://backcountry-restapi.herokuapp.com/api/private/v1/user/${id}`,
    {
      method: "PATCH",
      headers: header(auth),
      body: JSON.stringify(cleanInputStrings(data)),
    }
  )
}

export const deleteUser = (id, auth) => {
  return fetch(`url/${id}`, {
    method: "DELETE",
    headers: header(auth),
    body: JSON.stringify({ id: id }),
  })
}
