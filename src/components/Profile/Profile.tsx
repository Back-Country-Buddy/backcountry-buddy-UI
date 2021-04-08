import React, { FunctionComponent } from 'react'

interface ProfileProps 
{
  name: string,
  email: string,
  userName: string,
  emergencyName: string,
  emergencyNumber: string 
}

export const Profile: FunctionComponent<ProfileProps> = ({name, email, userName, emergencyName, emergencyNumber}) => {

  return (
    <div>
      <h1>My Account</h1>
      <img />
      <h3 className='name'>{name}</h3>
      <h3 className='email'>{email}</h3>
      <h3 className='userName'>{userName}</h3>
    </div>
  )
}
