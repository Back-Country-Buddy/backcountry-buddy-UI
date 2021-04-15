import { useState } from "react"
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

function App() {
  const [user] = useState(userData)
  const [currentTours] = useState(currentToursData)
  const [pastTours] = useState(tourData)

  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage name={user.name} />} />

      <Route
        path="/profile"
        render={() => (
          <Profile
            name={user.name}
            email={user.email}
            userName={user.userName}
            emergencyName={user.emergencyName}
            emergencyNumber={user.emergencyNumber}
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
