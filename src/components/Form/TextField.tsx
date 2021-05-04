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
      <label htmlFor={value} className="hidden-label">
        Completed
      </label>
      <textarea id={value} value={value} onChange={updateForm} />
    </>
  )
}
