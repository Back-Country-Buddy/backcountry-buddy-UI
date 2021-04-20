import React from 'react'

export const Error = ({ err, setErr }) => {
  return (
    <>
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
      <button onClick={() => setErr(null)}>GO BACK!</button>
    </>
  )
}
