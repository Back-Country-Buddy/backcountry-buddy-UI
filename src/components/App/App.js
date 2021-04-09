import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import { Profile } from '../Profile/Profile'
import { CurrentTours } from "../CurrentTours/CurrentTours"
import { userData } from '../../mockdata/UserDummyData'
import currentToursData from "../../mockdata/CurrentToursDummyData"
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(userData);
  const [currentTours, setCurrentTours] = useState(currentToursData)
  // const [currentTours, setCurrentTours] = useState<object | null>(currentToursData)
  // types currently aren't working here since this isn't a tsx file but I think we want it to be

  return (
    <div className="App">
      <LandingPage />
      <Profile
        name={user.name}
        email={user.email}
        userName={user.userName}
        emergencyName={user.emergencyName}
        emergencyNumber={user.emergencyNumber}
      />
      <CurrentTours currentTours={currentTours}/>
    </div>
  );
}

export default App;
