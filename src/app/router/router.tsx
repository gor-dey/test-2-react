import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Loader } from '@shared/components'

type Props = {
    children: React.ReactNode
}

export const RouterLayout = ({ children }: Props) => {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<Loader />}>{children}</React.Suspense>
        </BrowserRouter>
    )
}
