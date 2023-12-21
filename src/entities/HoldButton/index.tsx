import { Button } from '@shared/components'
import { ButtonProps } from '@shared/types'
import { useEffect, useState } from 'react'

export const HoldButton = (props: ButtonProps) => {
    const [timer, setTimer] = useState<number>(500)
    const [isButtonHeld, setIsButtonHeld] = useState<boolean>(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout

        if (isButtonHeld) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => Math.max(0, prevTimer - 10))
            }, 10)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [isButtonHeld])

    const handleMouseDown = () => {
        setIsButtonHeld(true)
    }

    const handleMouseUp = () => {
        if (isButtonHeld) {
            setIsButtonHeld(false)
            setTimer(500)
        }
    }

    let buttonText

    if (timer <= 0) {
        buttonText = 'Button held for 500 milliseconds!'
    } else if (timer === 500) {
        buttonText = 'Hold to proceed'
    } else {
        buttonText = `${timer / 1000}s`
    }

    return (
        <Button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            {...props}
            text={buttonText}
        />
    )
}
