import { Button } from '@shared/components'
import { ButtonProps, HoldType } from '@shared/types'
import { useCallback, useEffect, useState } from 'react'

type Props = {
    handleClick: () => void
}

const timerConfig = {
    max: 500,
    step: 100,
}
const holdOptions: { [key: string]: HoldType } = {
    up: 'up',
    down: 'down',
}

export const HoldButton = ({ handleClick, ...props }: Props & ButtonProps) => {
    const [timer, setTimer] = useState<number>(timerConfig.max)
    const [isActionTriggered, setIsActionTriggered] = useState<boolean>(false)
    const [holdType, setHoldType] = useState<HoldType>(holdOptions.up)

    useEffect(() => {
        let intervalId: NodeJS.Timeout

        const decreaseTimer = () => {
            setTimer((prevTimer): number => Math.max(0, prevTimer - timerConfig.step))
        }
        const increaseTimer = () => {
            setTimer((prevTimer): number => Math.max(0, prevTimer + timerConfig.step))
        }

        if (holdType === holdOptions.down && !isActionTriggered) {
            intervalId = setInterval(() => {
                decreaseTimer()

                if (timer <= 0) {
                    setIsActionTriggered(true)
                    handleClick()
                }
            }, timerConfig.step)
        }
        if (holdType === holdOptions.up && !isActionTriggered) {
            intervalId = setInterval(() => {
                increaseTimer()

                if (timer >= timerConfig.max) {
                    setIsActionTriggered(true)
                    setTimer(timerConfig.max)
                }
            }, timerConfig.step)
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [timer, isActionTriggered, holdType])

    const handleMouseDown = useCallback(() => {
        setTimer(timerConfig.max)
        setIsActionTriggered(false)
        setHoldType(holdOptions.down)
    }, [])

    const handleMouseUp = useCallback(() => {
        setIsActionTriggered(false)
        setHoldType(holdOptions.up)
    }, [])

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
