export const getDateString = (date: Date): string => {
  return date.toISOString().substring(0, 10)
}

const url = 'https://backcountry-restapi.herokuapp.com/api/v1/user'

export const addUser = (url, name, email, emergencyName, emergencyNumber, auth) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({user_name: name, email_address: email, emergency_contact_name: emergencyName, emergency_number: emergencyNumber, auth: auth})
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response
      } else {
        throw new Error('We apologize, we are having issues loading this page.')
      }
    })
}

