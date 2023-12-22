import { capitalizeFirstLetter } from '@shared/utils'
import { useLocation } from 'react-router-dom'

export const Header = () => {
    const pathname = useLocation().pathname
    const title = capitalizeFirstLetter(pathname.slice(1))

    return (
        <header className="h-20 bg-primary flex items-center p-4">
            <h1 className="text-3xl text-black">{title}</h1>
        </header>
    )
}
