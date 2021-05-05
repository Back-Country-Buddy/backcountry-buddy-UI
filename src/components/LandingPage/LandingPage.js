import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../Login/LoginButton"
import { NavBar } from "../NavBar/NavBar"

import "./LandingPage.css"

export const LandingPage = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    <main className="background landing-img">
      <div className="sub-container landing-wrapper">
        <header>
          <h1 className="logo">Backcountry Buddy</h1>
          {!isAuthenticated && <LoginButton />}
        </header>

        {isAuthenticated && user.given_name && (
          <h2 className="welcome">Welcome, {user.given_name}</h2>
        )}

        {isAuthenticated && !user.given_name && (
          <h2 className="welcome">Welcome, friend!</h2>
        )}
      </div>

      {isAuthenticated && <NavBar />}
    </main>
  )
}
