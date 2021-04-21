import React from 'react'
import buddy from '../../assets/buddy.png'

export const Error = ({ err, setErr }) => {
  return (
    <div className='sub-container'>
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
      <img src={buddy} alt='buddy'/>
      <button
        className='button-save'
        onClick={() => setErr(null)}
      >GO BACK!</button>
    </div>
  )
}
