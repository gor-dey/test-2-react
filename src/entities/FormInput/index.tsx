import { emailValidation } from '@shared/utils'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
    setIsValid: Dispatch<SetStateAction<boolean>>
    setData: Dispatch<SetStateAction<string>>
}

export const FormInput = (props: Props) => {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        try {
            const isEmail: boolean = emailValidation(value)
            if (isEmail) {
                props.setData(value)
            } else {
                props.setIsValid(false)
                setTimeout(() => {
                    props.setIsValid(true)
                }, 1000)

                console.warn('Invalid email')
            }
        } catch (error) {
            console.log(error)
        }
        setValue('')
    }

    return (
        <form onSubmit={(e): void => handleSubmit(e)} className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input
                onChange={(e): void => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Type here"
                className="input"
            />
        </form>
    )
}
