import { emailValidation } from '@shared/utils'
import { useState } from 'react'

export const FormInput = () => {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
    const [isFormSuccess, setIsFormSuccess] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        handleFormValidation(value)
    }

    const handleFormValidation = (email: string): void => {
        try {
            const isValidEmail: boolean = emailValidation(email)

            if (isValidEmail) {
                handleFormSuccess(email)
            } else {
                handleInvalidEmail()
            }
        } catch (error) {
            console.error('Error during form validation:', error)
        }

        setValue('')
    }

    const handleFormSuccess = (email: string): void => {
        sessionStorage.setItem('validEmail', email)
        setIsFormSuccess(true)
        setTimeout(() => {
            setIsFormSuccess(false)
        }, 1200)
    }

    const handleInvalidEmail = (): void => {
        sessionStorage.removeItem('validEmail')
        setIsEmailValid(false)
        setTimeout(() => {
            setIsEmailValid(true)
        }, 1200)

        console.warn('Invalid email')
    }

    return (
        <form onSubmit={handleSubmit} className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Type here"
                className="input"
            />
            {!isEmailValid && <span className="label label-text-alt text-red-500">Invalid email</span>}
            {isFormSuccess && <span className="label label-text-alt text-green-500">Email success</span>}
        </form>
    )
}
