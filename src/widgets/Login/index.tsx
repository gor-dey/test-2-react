import { FormCheckbox, FormInput, HoldButton } from '@entities'
import { useState } from 'react'

export const Login = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    const handleClick = () => console.log({ isChecked, formData: sessionStorage.getItem('validEmail') || '' })

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex-1">
                <FormInput />
                <div className="p-1" />
                <FormCheckbox setIsChecked={setIsChecked} />
            </div>

            <HoldButton disabled={isChecked} onClick={handleClick} />
        </div>
    )
}
