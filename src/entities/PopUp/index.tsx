import { useEffect, useRef } from 'react'
import { Button } from '@shared/components'
import { Return } from '@shared/types'

type Props = {
    data: Return
    onClose: () => void
}

export const PopUp = ({ data, onClose }: Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal()
        }
    }, [])

    return (
        <dialog className="modal" ref={modalRef}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{data}</h3>
                <div className="modal-action">
                    <Button className="rounded-full" text="<" onClick={onClose} />
                </div>
            </div>
        </dialog>
    )
}
