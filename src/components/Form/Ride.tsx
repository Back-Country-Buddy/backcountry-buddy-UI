import React from "react"
import route from "../../assets/travel.svg"
import placeholder from "../../assets/placeholderChartAsset.png"

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
      <div>
        <input type="checkbox" checked={isChecked} readOnly={true} />
        <button
          onClick={() => setChecked(!isChecked)}
          className={isChecked ? "checked" : ""}
        >
          Conduct a Departure Check
        </button>
      </div>
      <img src={placeholder} alt="ride flowchart" className="ride-img" />
    </form>
  )
}
