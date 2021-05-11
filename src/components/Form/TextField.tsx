import React from "react"

interface TextFieldProps {
  value: string
  prompt: string | undefined
  updateForm: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  prompt,
  updateForm,
}) => {
  return (
    <section className="prompt-wrapper">
      <p className="prompt">{prompt}</p>
      <label htmlFor={prompt} className="hidden-label">
        {prompt}
      </label>
      <textarea id={prompt} name={prompt} value={value} onChange={updateForm} />
    </section>
  )
}
