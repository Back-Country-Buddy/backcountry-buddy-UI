import React, { useState } from 'react'
import Debrief from './Debrief'
import Ride from './Ride'
import Plan from './Plan'

interface TourFormProps {
  userId: number,
}

interface TourFormState {

}

export const TourForm: React.FC<TourFormProps> = ({ userId }) => {
  const [state, setState] = useState<TourFormState>({

  })

  return (
    <div>

    </div>
  )
}
