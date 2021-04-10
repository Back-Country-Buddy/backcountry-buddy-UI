export const isChecked: (fields: string[]) => boolean {
  return fields.reduce((bool, field) => {
    return field.length > 0
  }, false)
}
