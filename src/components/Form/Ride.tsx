import React from "react"
import route from "../../assets/travel.svg"
import diagram from "../../assets/ride-diagram.png"
import { SectionTitle } from "./SectionTitle"

interface RideProps {
  setChecked: (event: React.MouseEvent<HTMLButtonElement>) => void
  isChecked: boolean
}

export const Ride: React.FC<RideProps> = ({ setChecked, isChecked }) => {
  return (
    <form>
      <div className="title-wrapper">
        <img src={route} alt="route" className="form-icon" />
        <h2 className="title">RIDE safely</h2>
      </div>
      <div className="step">
        <div className="section-title section-title-ride">
          <label htmlFor="ride-checkbox" className="hidden-label">
            Completed
          </label>
          <input
            id="ride-checkbox"
            type="checkbox"
            className="checkbox"
            checked={isChecked}
            readOnly={true}
          />
          <button
            onClick={setChecked}
            className={isChecked ? "checked departure" : "departure"}
          >
            <h3>Conduct a Departure Check</h3>
          </button>
        </div>
        <img src={diagram} alt="ride flowchart" className="ride-img" />
      </div>
    </form>
  )
}
