import React from 'react'

interface RideProps {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>,
  isChecked: boolean
}

export const Ride: React.FC<RideProps> = ({ setChecked, isChecked }) => {
  return (
    <form>
      <div>
        <input
          type='checkbox'
          checked={isChecked}
          readOnly={true}
        />
        <button
          onClick={() => setChecked(!isChecked)}
          className={isChecked? 'checked' : ''}
        > DEPARTURE CHECK</button>
      </div>
      <img src='../../assets/placeholderChartAsset.png'/>
    </form>
  )
}
