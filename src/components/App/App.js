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

function App() {
  const [user] = useState(userData);
  const [currentTours] = useState(currentToursData);
  const [pastTours] = useState(tourData);
  // const [currentTours, setCurrentTours] = useState<object | null>(currentToursData)
  // types currently aren't working here since this isn't a tsx file but I think we want it to be

  return (
    <div className="App">
      <LandingPage name={user.name} />
      <Profile
        name={user.name}
        email={user.email}
        userName={user.userName}
        emergencyName={user.emergencyName}
        emergencyNumber={user.emergencyNumber}
      />
      <TourForm userId={userData.id} />
      <CurrentTours currentTours={currentTours} />{" "}
      {/* rendering this here for
      now so I can see my changes in the browser */}
      <PastTours pastTours={pastTours} />
    </div>
  );
}

export default App;
