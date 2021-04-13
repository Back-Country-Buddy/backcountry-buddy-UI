import React from 'react'
import { LoginButton } from '../Login/LoginButton'
import { LogoutButton } from '../Login/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react"
import './LandingPage.css'

interface Props {
    name: string;
}

export const LandingPage: React.FC<Props> = ({ name }) => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <main className="landing">
      <header className="landing-img">
        <h1 className="logo">Backcountry Buddy</h1>
        <h2>Welcome, {name}</h2>
      </header>
      {
        isAuthenticated ?
        <>
          <LogoutButton />
          {user.name}
        </> :
        <LoginButton />
      }
    </main>
  )
}
