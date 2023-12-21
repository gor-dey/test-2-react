import { Header } from '@widgets'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="h-full">{children}</main>
        </>
    )
}
