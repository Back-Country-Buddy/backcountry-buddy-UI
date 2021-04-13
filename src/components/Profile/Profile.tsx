import React, { FunctionComponent } from 'react'
import { LogoutButton } from '../Login/LogoutButton'
import { useAuth0 } from "@auth0/auth0-react"



export const Profile: FunctionComponent = () => {
  const { user } = useAuth0()

  return (
    <div>
      <h1>My Account</h1>
      <img src={user.picture} alt={user.name} />
      <h3 className='name'>{user.name}</h3>
      <h3 className='email'>{user.email}</h3>
      <h3 className='userName'>{user.nickname}</h3>
      <LogoutButton />
    </div>
  )
}
