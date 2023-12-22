import { ButtonConfirm } from '@entities'
import { Button } from '@shared/components'
import { useHistory } from 'react-router-dom'

export const FormStep2 = () => {
    const history = useHistory()

    const value = sessionStorage.getItem('validEmail') || ''

    return (
        <div className="flex flex-col h-full justify-between">
            <form className="form-control">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input value={value} type="text" placeholder="Type here" className="input" readOnly />
            </form>

            <div className="flex gap-4 mb-4">
                <Button className="flex-1 btn-neutral" text="Back" onClick={() => history.goBack()} />

                <ButtonConfirm email={value} className="flex-1" text="Confirm" />
            </div>
        </div>
    )
}
