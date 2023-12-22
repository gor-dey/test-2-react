import { emailValidation } from '@shared/utils'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
    setIsEmailValid: Dispatch<SetStateAction<boolean>>
}

export const FormInput = (props: Props) => {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        handleFormValidation(value)
    }

    const handleFormValidation = (email: string): void => {
        try {
            const isValidEmail: boolean = emailValidation(email)

            if (isValidEmail) {
                sessionStorage.setItem('validEmail', email)
                props.setIsEmailValid(true)
            } else {
                sessionStorage.removeItem('validEmail')
                props.setIsEmailValid(false)

                console.warn('Invalid email')
            }
        } catch (error) {
            console.error('Error during form validation:', error)
        }

        setValue('')
    }

    const placeholder: string = sessionStorage.getItem('validEmail') || 'Type here'

    return (
        <form onSubmit={handleSubmit} className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
                {value.length > 0 && <span className="label-text text-blue-400">Press Enter to save the changes!</span>}
            </div>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder={placeholder}
                className="input"
            />
        </form>
    )
}
