import { useAuth0 } from "@auth0/auth0-react"

const { getAccessTokenSilently } = useAuth0()

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const handlePromise = (request, idField, dataField, idFieldTwo) => {
  return getAccessTokenSilently().then(token =>
    request(token, idField, dataField, idFieldTwo)
  ).then(response => checkResponse(response))
}
