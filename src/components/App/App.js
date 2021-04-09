import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import { Profile } from '../Profile/Profile'
import { TourForm } from '../Form/TourForm'
import { userData } from '../../UserDummyData'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(userData)

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
    </div>
  );
}

export default App;
