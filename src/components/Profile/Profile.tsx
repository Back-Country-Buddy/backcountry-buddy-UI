import React, { FunctionComponent } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

interface ProfileProps
{
  name: string,
  email: string,
  userName: string,
  emergencyName: string,
  emergencyNumber: string
}


export const Profile: FunctionComponent<ProfileProps> = ({name, email, userName, emergencyName, emergencyNumber}) => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <div>
      <h1>My Account</h1>
      <img src={user.picture} alt={user.name} />
      <h3 className='name'>{user.name}</h3>
      <h3 className='email'>{user.email}</h3>
      <h3 className='userName'>{userName}</h3>
    </div>
  )
}
