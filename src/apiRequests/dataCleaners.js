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

export const cleanTours = (tours, completed) => {
  return tours.data.filter(tour => tour.attributes.complete === completed)
    .map(tour => {
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
