import React from "react"
import "./PastTours.css"
import circleCheck from "../../assets/purplebluecircle.png"

interface CategoryProps {
  title: string
}

export const TourCategory: React.FC<CategoryProps> = ({ title }) => {
  return (
    <div className="category-wrapper">
      <img src={circleCheck} alt="checkmark" className="check-icon" />
      <h3>{title}</h3>
    </div>
  )
}
