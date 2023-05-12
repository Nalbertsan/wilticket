import ComplexNavbar from '../../Navbar/Consumer'

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main>
            <div className="flex min-h-[10vh] items-center justify-center">
                <ComplexNavbar />
            </div>
            <div className="flex min-h-[90vh] items-center justify-center">
                {children}
            </div>
        </main>
    )
}

export default MainLayout;