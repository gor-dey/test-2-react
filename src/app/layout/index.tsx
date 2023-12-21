import { Header } from '@widgets'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-grow p-4">{children}</main>
        </div>
    )
}
