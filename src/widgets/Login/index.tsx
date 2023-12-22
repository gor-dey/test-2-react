import { FormCheckbox, FormInput, HoldButton } from '@entities'
import { useState } from 'react'
import { useHistory } from 'react-router'

export const Login = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(!!sessionStorage.getItem('validEmail') || false)
    const history = useHistory()

    const handleClick = (): void => {
        history.push('/login/step-2')
    }

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex-1">
                <FormInput setIsEmailValid={setIsEmailValid} />
                <div className="p-1" />
                <FormCheckbox setIsChecked={setIsChecked} />
            </div>

            <HoldButton disabled={!isChecked || !isEmailValid} handleClick={handleClick} />
        </div>
    )
}
