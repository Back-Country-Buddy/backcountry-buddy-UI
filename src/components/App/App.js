import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Route } from "react-router-dom"

import "./App.css"

import { LandingPage } from "../LandingPage/LandingPage"
import { Profile } from "../Profile/Profile"
import { TourForm } from "../Form/TourForm"
import { CurrentTours } from "../CurrentTours/CurrentTours"
import { PastTours } from "../PastTours/PastTours"
import { PastTourDetails } from "../PastTours/PastTourDetails"
import { NavBar } from "../NavBar/NavBar"

import { userData } from "../../mockdata/UserDummyData"
import currentToursData from "../../mockdata/CurrentToursDummyData"
import { tourData } from "../../mockdata/PastTourData"
import { handleLogin } from '../../util'

const App = () => {
  const [userState, setUserState] = useState(null)
  const [currentTours] = useState(currentToursData)
  const [pastTours] = useState(tourData)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently()
        .then(response => {
          handleLogin(response, user)
            .then(response => setUserState({ ...userState, response}))
        })
    }
  }, [isAuthenticated, getAccessTokenSilently])

  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage name={userData.name} />} />

      <Route
        path="/profile"
        render={() => (
          <Profile
            name={userData.name}
            email={userData.email}
            userName={userData.userName}
            emergencyName={userData.emergencyName}
            emergencyNumber={userData.emergencyNumber}
          />
        )}
      />

      <Route
        path="/add-tour"
        render={() => <TourForm userId={userData.id} />}
      />

      <Route
        path="/current-tours"
        render={() => <CurrentTours currentTours={currentTours} />}
      />

      <Route
        path="/past-tours"
        render={() => <PastTours pastTours={pastTours} />}
      />

      <Route path="/tour-details/:id" component={PastTourDetails} />

      {isAuthenticated && <NavBar />}
    </div>
  )
}

export default App
