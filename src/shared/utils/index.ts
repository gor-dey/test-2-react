export const emailValidation = (value: string) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)

export const extractStepFromPath = (pathname: string) => {
    const pathArray = pathname.split('/')
    const step = pathArray[pathArray.length - 1]
    return step.charAt(0).toUpperCase() + step.slice(1)
}
