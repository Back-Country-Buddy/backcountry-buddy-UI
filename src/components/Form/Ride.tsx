import React from "react"
import route from "../../assets/travel.svg"
import diagram from "../../assets/ride-diagram.png"

interface RideProps {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  isChecked: boolean
}

export const Ride: React.FC<RideProps> = ({ setChecked, isChecked }) => {
  return (
    <form>
      <div className="title-wrapper">
        <img src={route} alt="route" className="form-icon" />
        <h2 className="title">RIDE safely</h2>
      </div>
      <div className="section-title section-title-ride">
        <input type="checkbox" checked={isChecked} readOnly={true} />
        <button
          onClick={() => setChecked(!isChecked)}
          className={isChecked ? "checked departure" : "departure"}
        >
          Conduct a Departure Check
        </button>
      </div>
      <img src={diagram} alt="ride flowchart" className="ride-img" />
    </form>
  )
}
