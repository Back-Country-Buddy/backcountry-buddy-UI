export const  isChecked = (fields: string[]) => {
  return fields.reduce((bool, field) => {
    return field.length > 0
  }, false)
}
