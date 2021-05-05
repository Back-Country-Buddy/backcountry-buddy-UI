import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./Profile.css"
import { updateUser } from "../../apiRequests/userRequests.js"
import { successAlert } from "../../Alert/Alert.js"

interface EmergencyProps {
  user: {
    id: string
    user_name: string
    email_address: string
    emergency_contact_name: string
    emergency_number: string
    last_name: string
    first_name: string
    full_name: string
    picture: string
  }
  setUser: React.Dispatch<React.SetStateAction<any>>
}

export const EmergencyContact: React.FC<EmergencyProps> = ({
  user,
  setUser,
}) => {
  const { getAccessTokenSilently } = useAuth0()

  const submitInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    getAccessTokenSilently().then((token) => {
      updateUser(token, user.id, {
        emergency_contact_name: user.emergency_contact_name,
        emergency_number: user.emergency_number,
      })
    })
    successAlert()
  }

  return (
    <form className="emergency-form">
      <h2>Emergency Contact</h2>
      <label htmlFor="name" className="emergency-label">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          className="emergency-input"
          value={user.emergency_contact_name}
          onChange={(e) =>
            setUser({
              ...user,
              emergency_contact_name: e.target.value,
            })
          }
        />
      </label>
      <label htmlFor="phone" className="emergency-label">
        Phone:
        <input
          type="text"
          name="phone"
          id="phone"
          className="emergency-input"
          placeholder="123-456-7890"
          value={user.emergency_number}
          onChange={(e) =>
            setUser({
              ...user,
              emergency_number: e.target.value,
            })
          }
        />
      </label>
      <button className="button-save" onClick={(e) => submitInfo(e)}>
        <strong>Save</strong>
      </button>
    </form>
  )
}
