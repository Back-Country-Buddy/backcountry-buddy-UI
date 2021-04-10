import React from 'react'


interface TextFieldProps {
  value: string,
  updateForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({value, updateForm}) => {
  return(
    <>
      <input
        type='text'
        value={value}
        onChange={updateForm}
      />
    </>
  )
}
