const checkResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const secureCall = (authCall, request, id, data, id2) => {
  return authCall()
    .then(token => request(token, id, data, id2))
      .then(response => checkResponse(response))
}
