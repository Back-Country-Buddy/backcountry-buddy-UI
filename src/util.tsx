export const  isChecked: (fields: string[]) => boolean = (fields: string[]): any => {
  return fields.reduce((bool, field) => {
    return field.length > 0
  }, false)
}
