import React from 'react'
import { TourFormState } from './TourForm'


interface TextFieldProps {
  field: string,
  value: string,
  updateForm: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void
}

export const TextField: React.FC<TextFieldProps> = ({field, value, updateForm}) => {
  return(
    <>
      <input
        type='text'
        value={value}
        onChange={e => updateForm(e, field)}
      />
    </>
  )
}
