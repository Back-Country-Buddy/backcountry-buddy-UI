import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import { PastTours } from '../PastTours/PastTours.tsx'
import { Profile } from '../Profile/Profile'
import { userData } from '../../UserDummyData'
import { tourData } from '../../PastTourData'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(userData)
  const [pastTours, setPastTours] = useState(tourData)

  return (
    <div className="App">
      {/* <LandingPage />
      <Profile 
        name={user.name} 
        email={user.email} 
        userName={user.userName}
        emergencyName={user.emergencyName}
        emergencyNumber={user.emergencyNumber}
      /> */}
      <PastTours pastTours={pastTours}/>
    </div>
  );
}

export default App;
