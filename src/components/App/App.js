import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Route, Redirect } from "react-router-dom"
import { usePromiseTracker } from "react-promise-tracker"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

import { LandingPage } from "../LandingPage/LandingPage"
import { Profile } from "../Profile/Profile"
import { TourForm } from "../Form/TourForm"
import { CurrentTours } from "../CurrentTours/CurrentTours"
import { PastTours } from "../PastTours/PastTours"
import { PastTourDetails } from "../PastTours/PastTourDetails"
import { Error } from "../Error/Error"

import { handleLogin } from "../../apiRequests/userRequests"
import { secureCall } from "../../apiRequests/promiseHandling"
import { formatUser } from "../../apiRequests/dataCleaners.js"

toast.configure()
const App = () => {
  const [userState, setUserState] = useState({
    id: "",
    user_name: "",
    email_address: "",
    emergency_contact_name: "",
    emergency_number: "",
    last_name: "",
    first_name: "",
    full_name: "",
    picture: "",
  })

  const [err, setErr] = useState(null)

  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0()

  const { promiseInProgress } = usePromiseTracker()

  useEffect(() => {
    if (isAuthenticated) {
      secureCall(
        getAccessTokenSilently,
        setErr,
        handleLogin,
        user
      ).then((fetchedUser) =>
        setUserState(formatUser(user, fetchedUser.data[0]))
      )
    }
  }, [isAuthenticated, user, getAccessTokenSilently])

  const checkAuth = (component) => {
    if (isAuthenticated) {
      return component
    } else {
      return <Redirect to="/" />
    }
  }

  return (
    <>
      {(promiseInProgress || isLoading) && (
        <div className="loader">
          <Loader
            type="Oval"
            color="#900AA1"
            height={150}
            width={150}
            timeout={3000}
          />
        </div>
      )}

      {err && <Error err={err} setErr={setErr} />}

      {!err && (
        <div className={`App ${(promiseInProgress || isLoading) && "hidden"}`}>
          <Route
            exact
            path="/"
            render={() => <LandingPage name={userState.name} setErr={setErr} />}
          />

          <Route
            path="/profile"
            render={() =>
              checkAuth(
                <Profile
                  user={userState}
                  setUser={setUserState}
                  setErr={setErr}
                />
              )
            }
          />

          <Route
            exact
            path="/add-tour"
            render={() =>
              checkAuth(<TourForm userId={userState.id} setErr={setErr} />)
            }
          />

          <Route
            path="/current-tour/:userId/:tourId"
            render={({ match }) =>
              checkAuth(<TourForm match={match} setErr={setErr} />)
            }
          />

          <Route
            path="/current-tours"
            render={() =>
              checkAuth(<CurrentTours userId={userState.id} setErr={setErr} />)
            }
          />

          <Route
            exact
            path="/past-tours"
            render={() =>
              checkAuth(<PastTours userId={userState.id} setErr={setErr} />)
            }
          />

          <Route
            path="/past-tours/:userId/:tourId/:location/:date"
            render={({ match }) =>
              checkAuth(<PastTourDetails match={match} setErr={setErr} />)
            }
          />
          <ToastContainer />
        </div>
      )}
    </>
  )
}

export default App
