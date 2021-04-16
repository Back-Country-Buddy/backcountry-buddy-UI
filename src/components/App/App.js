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

import { handleLogin } from "../../util"

const App = () => {
  const [userState, setUserState] = useState({
    given_name: "",
    family_name: "",
    nickname: "",
    name: "",
    picture: "",
    locale: "",
    updated_at: "",
    email: "",
    email_verified: "",
    sub: "",
    emergency_contact_name: "",
    emergency_number: "",
  }) // do we even need this anymore?
  const [currentTours] = useState(currentToursData)
  const [pastTours] = useState(tourData)

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        handleLogin(token, user).then((fetchedUser) => {
          console.log(fetchedUser);
          const newUser = user
          newUser.emergency_contact_name = ""
          newUser.emergency_number = ""

          setUserState(newUser)
        })
      })
    }
  }, [isAuthenticated, getAccessTokenSilently])

  {
    "data": {
        "id": "2",
        "type": "user",
        "attributes": {
            "user_name": "tashia10",
            "email_address": "tashiadavis10@gmail.com",
            "emergency_contact_name": "dad",
            "emergency_number": "62452987"
        }
    }
  }

  // email: "tashiadavis10@gmail.com"
  // email_verified: true
  // emergency_contact_name: ""
  // emergency_number: ""
  family_name: "Davis"
  given_name: "Tashia"
  // locale: "en"
  name: "Tashia Davis"
  // nickname: "tashiadavis10"
  picture: "https://lh3.googleusercontent.com/a-/AOh14GgiYKYPr_QuUGJEbS75WyCnAkrXRG_kBhGx0U8bLw=s96-c"
  // sub: "google-oauth2|101176822879505420419"
  // updated_at: "2021-04-16T19:39:11.237Z"

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => <LandingPage name={userData.name} />}
      />

      <Route
        path="/profile"
        render={() => <Profile user={userState} setUser={setUserState} />}
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
