import { Dispatch, SetStateAction } from 'react'

type Props = {
    setIsChecked: Dispatch<SetStateAction<boolean>>
}

export const FormCheckbox = (props: Props) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input
                    onChange={() => props.setIsChecked((prev) => !prev)}
                    type="checkbox"
                    className="checkbox checkbox-primary"
                />
                <span className="label-text">I agree</span>
            </label>
        </div>
    )
}
