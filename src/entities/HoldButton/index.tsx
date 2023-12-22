import { Button } from '@shared/components'
import { ButtonProps } from '@shared/types'
import { useCallback, useEffect, useState } from 'react'

type Props = {
    handleClick: () => void
}

const timerConfig = {
    max: 500,
    step: 100,
}

export const HoldButton = ({ handleClick, ...props }: Props & ButtonProps) => {
    const [timer, setTimer] = useState<number>(timerConfig.max)
    const [isButtonHeld, setIsButtonHeld] = useState<boolean>(false)
    const [isMouseUp, setIsMouseUp] = useState<boolean>(false)
    const [actionTriggered, setActionTriggered] = useState<boolean>(false)

    useEffect(() => {
        let intervalId: NodeJS.Timeout

        const decreaseTimer = () => {
            setTimer((prevTimer): number => Math.max(0, prevTimer - timerConfig.step))
        }
        const increaseTimer = () => {
            setTimer((prevTimer): number => Math.max(0, prevTimer + timerConfig.step))
        }

        if (isButtonHeld && !actionTriggered) {
            intervalId = setInterval(() => {
                decreaseTimer()

                if (timer <= 0) {
                    setActionTriggered(true)
                    handleClick()
                }
            }, timerConfig.step)
        }
        if (isMouseUp && !actionTriggered) {
            intervalId = setInterval(() => {
                increaseTimer()

                if (timer >= timerConfig.max) {
                    setActionTriggered(true)
                    setTimer(timerConfig.max)
                }
            }, timerConfig.step)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [isButtonHeld, timer, actionTriggered, isMouseUp])

    const handleMouseDown = useCallback(() => {
        setTimer(timerConfig.max)
        setIsMouseUp(false)
        setActionTriggered(false)
        setIsButtonHeld(true)
    }, [])

    const handleMouseUp = useCallback(() => {
        if (isButtonHeld) {
            setIsButtonHeld(false)
            setActionTriggered(false)
            setIsMouseUp(true)
        }
    }, [isButtonHeld])

    let buttonText

    if (timer <= 0) {
        buttonText = `Button held for ${timerConfig.max} milliseconds!`
    } else if (timer >= timerConfig.max) {
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
