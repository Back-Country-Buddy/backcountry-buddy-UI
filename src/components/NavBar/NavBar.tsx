import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

export const NavBar: React.FC = () => {
  return (
    <nav className="main-menu">
      <div>
        <Link to="/add-tour">
          <img
            src="https://img.icons8.com/ios-glyphs/48/8420E9/plus.png"
            alt="add tour"
          />
          <p className="main-menu-text">Add Tour</p>
        </Link>
      </div>
      <div>
        <Link to="/current-tours">
          <img
            src="https://img.icons8.com/ios/48/8420E9/skiing.png"
            alt="current tours"
          />
          <p className="main-menu-text">Current Tours</p>
        </Link>
      </div>
      <div>
        <Link to="/past-tours">
          <img
            src="https://img.icons8.com/windows/48/8420E9/mobile-navigator.png"
            alt="past tours"
          />
          <p className="main-menu-text">Past Tours</p>
        </Link>
      </div>
      <div>
        <Link to="/profile">
          <img
            src="https://img.icons8.com/material-outlined/48/8420E9/user--v1.png"
            alt="profile"
          />
          <p className="main-menu-text">Profile</p>
        </Link>
      </div>
    </nav>
  )
}
