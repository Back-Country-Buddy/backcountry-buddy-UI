import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { Route, Redirect } from "react-router-dom"

import "./App.css"

import { formatUser, handleLogin } from "../../util"
import { LandingPage } from "../LandingPage/LandingPage"
import { Profile } from "../Profile/Profile"
import { TourForm } from "../Form/TourForm"
import { CurrentTours } from "../CurrentTours/CurrentTours"
import { PastTours } from "../PastTours/PastTours"
import { PastTourDetails } from "../PastTours/PastTourDetails"

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

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        handleLogin(token, user).then((fetchedUser) => {
          setUserState(formatUser(user, fetchedUser.data[0]))
        })
      })
    }
  }, [isAuthenticated, getAccessTokenSilently, user])

  const checkAuth = (component) => {
    if (isAuthenticated) {
      return component
    } else {
      return <Redirect to="/" />
    }
  }

  return (
    <>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => <LandingPage name={userData.name} />}
        />

        <Route
          path="/profile"
          render={() =>
            checkAuth(<Profile user={userState} setUser={setUserState} />)
          }
        />

        <Route
          exact
          path="/add-tour"
          render={() => checkAuth(<TourForm userId={userState.id} />)}
        />

        <Route path="/current-tour/:userId/:tourId" component={TourForm} />

        <Route
          path="/current-tours"
          render={() => checkAuth(<CurrentTours userId={userState.id} />)}
        />

        <Route
          exact
          path="/past-tours"
          render={() =>
            checkAuth(<PastTours userId={userState.id} pastTours={pastTours} />)
          }
        />

        <Route
          path="/past-tours/:userId/:tourId/:location/:date"
          component={PastTourDetails}
        />
      </div>
    </>
  )
}

export default App
