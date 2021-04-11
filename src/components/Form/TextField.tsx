import React from 'react'


interface TextFieldProps {
  value: string,
  prompt: string | null,
  updateForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({value, prompt, updateForm}) => {
  return(
    <>
      <p>{prompt}</p>
      <input
        type='text'
        value={value}
        onChange={updateForm}
      />
    </>
  )
}
