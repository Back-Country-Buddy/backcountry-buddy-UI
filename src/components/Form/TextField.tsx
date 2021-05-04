import React from "react"

interface TextFieldProps {
  value: string
  prompt: string | null
  updateForm: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  prompt,
  updateForm,
}) => {
  return (
    <>
      <p>{prompt}</p>
      <textarea value={value} onChange={updateForm} />
    </>
  )
}
