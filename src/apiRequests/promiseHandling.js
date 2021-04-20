import { trackPromise} from 'react-promise-tracker'

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const secureCall = (authCall, setErr, request, id, data, id2) => {
  return trackPromise(authCall()
    .then(token => request(token, id, data, id2))
      .then(response => checkResponse(response))
        .catch(err => setErr(err)))
}
