import React from 'react'
import './Form.css'

interface SectionTitleProps {
  title: string,
  fields: string[],
  isChecked: (fields: string[]) => boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title, fields, isChecked}) => {
  return (
    <div className='section-title'>
      <input
        type='checkbox'
        checked={isChecked(fields)}
        readOnly={true}
      />
      <h3 className='form-title'>{title}</h3>
    </div>
  )
}
