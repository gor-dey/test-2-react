import { FormCheckbox, FormInput } from '@entities'
import { Button } from '@shared/components'
import { useEffect, useState } from 'react'

export const Login = () => {
    const [isValid, setIsValid] = useState<boolean>(true)
    const [data, setData] = useState<string>('')
    const [isChecked, setIsChecked] = useState<boolean>(false)

    useEffect(() => {
        console.log('isChecked', isChecked)
    }, [isChecked])

    useEffect(() => {
        console.log('data', data)
    }, [data])

    return (
        <div className="flex flex-col justify-between p-4 h-min-full">
            <div>
                <FormInput setIsValid={setIsValid} setData={setData} />
                {!isValid && (
                    <div className="label">
                        <span className="label-text-alt">Invalid email</span>
                    </div>
                )}
                <div className="p-1" />
                <FormCheckbox setIsChecked={setIsChecked} />
            </div>
            <Button className="" text="Hold to proceed" />
        </div>
    )
}
