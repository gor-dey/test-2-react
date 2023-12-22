import { useState } from 'react'
import { PopUp } from '@entities'
import { sendEmailData } from '@shared/api'
import { Button } from '@shared/components'
import { ButtonProps, Return } from '@shared/types'

type Props = {
    email: string
}

export const ButtonConfirm = ({ email, ...props }: Props & ButtonProps) => {
    const [showPopup, setShowPopup] = useState(false)
    const [popupData, setPopupData] = useState<Return | null>(null)

    const handleConfirm = async () => {
        try {
            const result: Return | unknown = await sendEmailData(email)

            if (result) {
                setShowPopup(true)
                setPopupData(result as Return)
            }
        } catch (error) {
            console.error('Error in handleConfirm:', error)
        }
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <>
            {showPopup && popupData && <PopUp data={popupData} onClose={closePopup} />}
            <Button onClick={handleConfirm} {...props} />
        </>
    )
}
