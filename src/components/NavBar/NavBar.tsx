import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar: React.FC = () => {
  return (
    <nav className="main-menu">
      <div>
        <Link style={{ textDecoration: "none" }} to="/add-tour">
          <img
            src="https://img.icons8.com/ios-glyphs/48/900AA1/plus.png"
            alt="add tour"
          />
          <p className="main-menu-text">Add Tour</p>
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none" }}
          className="link"
          to="/current-tours"
        >
          <img
            src="https://img.icons8.com/ios/48/900AA1/skiing.png"
            alt="current tours"
          />
          <p className="main-menu-text">Current Tours</p>
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/past-tours">
          <img
            src="https://img.icons8.com/windows/48/900AA1/mobile-navigator.png"
            alt="past tours"
          />
          <p className="main-menu-text">Past Tours</p>
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/profile">
          <img
            src="https://img.icons8.com/material-outlined/48/900AA1/user--v1.png"
            alt="profile"
          />
          <p className="main-menu-text">Profile</p>
        </Link>
      </div>
    </nav>
  )
}
