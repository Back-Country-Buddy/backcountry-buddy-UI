import * as alert from '../Alert/Alert'

export const handleError = err => {
  if (!navigator.onLine) {
    alert.offlineAlert()
  } else if (err.status === 422 &&
  err.url.includes('https://backcountry-restapi.herokuapp.com/api/private/v1/tour_user')) {
    alert.noUserAlert()
  } else {
    alert.errorAlert()
  }
}
