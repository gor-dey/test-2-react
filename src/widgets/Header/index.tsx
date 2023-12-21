import { useLocation } from 'react-router'

export const Header = () => {
    const pathname: string = useLocation().pathname

    return (
        <header className="h-20 bg-primary flex items-center p-4">
            <h1 className="text-3xl text-black">{pathname}</h1>
        </header>
    )
}
