import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

export const NavBar: React.FC = () => {
  const navActiveStyle = {
    textDecoration: "underline",
    textDecorationThickness: "3px",
    textDecorationColor: "#ff0076",
  }

  return (
    <nav className="main-menu">
      <div>
        <NavLink
          to="/add-tour"
          style={{ textDecoration: "none" }}
          activeStyle={navActiveStyle}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/48/900AA1/plus.png"
            alt="plus sign"
          />
          <p className="main-menu-text">Add Tour</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/current-tours"
          style={{ textDecoration: "none" }}
          activeStyle={navActiveStyle}
        >
          <img
            src="https://img.icons8.com/ios/48/900AA1/skiing.png"
            alt="skiier"
          />
          <p className="main-menu-text">Current Tours</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/past-tours"
          style={{ textDecoration: "none" }}
          activeStyle={navActiveStyle}
        >
          <img
            src="https://img.icons8.com/windows/48/900AA1/mobile-navigator.png"
            alt="location history"
          />
          <p className="main-menu-text">Past Tours</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/profile"
          style={{ textDecoration: "none" }}
          activeStyle={navActiveStyle}
        >
          <img
            src="https://img.icons8.com/material-outlined/48/900AA1/user--v1.png"
            alt="avatar"
          />
          <p className="main-menu-text">Profile</p>
        </NavLink>
      </div>
    </nav>
  )
}
