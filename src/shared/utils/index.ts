export const emailValidation = (value: string) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
