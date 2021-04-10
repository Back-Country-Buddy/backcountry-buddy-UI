import React from 'react'
import { isChecked } from '../../util'

interface SectionTitleProps {
  title: string,
  fields: string[],
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title, fields}) => {
  return (
    <div className='section-title'>
      <input
        type='checkbox'
        checked={isChecked(fields)}
        readOnly={true}
      />
      <h3>{title}</h3>
    </div>
  )
}
