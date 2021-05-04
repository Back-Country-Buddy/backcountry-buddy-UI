import { trackPromise } from "react-promise-tracker"
import { successAlert, errorAlert } from "../components/Alert/Alert"

const checkResponse = (response) => {
  if (response.status === 204) {
    return response
  } else if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const secureCall = (authCall, setErr, request, id, data, id2) => {
  return trackPromise(
    authCall()
      .then((token) => request(token, id, data, id2))
      .then((response) => checkResponse(response))
      // .catch((err) => (setErr ? setErr(err) : alert("User Not Found")))
      .catch((err) => (setErr ? setErr(err) : errorAlert()))

      
  )
}
