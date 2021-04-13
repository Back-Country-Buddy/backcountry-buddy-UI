
import { useState } from "react";
import "./App.css";
import { LandingPage } from "../LandingPage/LandingPage";
import { Profile } from "../Profile/Profile";
import { TourForm } from "../Form/TourForm";
import { CurrentTours } from "../CurrentTours/CurrentTours";
import { PastTours } from "../PastTours/PastTours";
import { userData } from "../../mockdata/UserDummyData";
import currentToursData from "../../mockdata/CurrentToursDummyData";
import { tourData } from "../../mockdata/PastTourData";
import { Route } from 'react-router-dom'
import { PastTourDetails } from '../PastTours/PastTourDetails.tsx'
import { tourPlans } from '../../mockdata/tourPlan'
import { NavBar } from '../NavBar/NavBar'

function App() {
  const [user, setUser] = useState(userData);
  const [currentTours, setCurrentTours] = useState(currentToursData);
  const [pastTours, setPastTours] = useState(tourData);
  // const [currentTours, setCurrentTours] = useState<object | null>(currentToursData)
  // types currently aren't working here since this isn't a tsx file but I think we want it to be

  return (
    <div className="App">

      < Route
        exact
        path='/'
        render={() =>
          <LandingPage name={user.name} />}
      />

      < Route
        path='/profile'
        render={()=>
          <Profile
              name={user.name}
              email={user.email}
              userName={user.userName}
              emergencyName={user.emergencyName}
              emergencyNumber={user.emergencyNumber}
          />}
      />

      < Route
        path='/add-tour'
        render={()=>
         <TourForm userId={userData.id} />}
      />

      < Route
        path='/current-tours'
        render={()=>
         <CurrentTours currentTours={currentTours} />}
      />

      < Route
        path='/past-tours'
        render={()=>
          <PastTours pastTours={pastTours} />}
      />

      < Route
        path='/tour-details/:id'
        component={ PastTourDetails }
      />
      <NavBar />
    </div>
  );
}

export default App;
