import { Footer } from "../../ui/footer"
import { Navbar } from "../../ui/navbar"

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main className="container py-8">
                {children}
            </main>
            <Footer/>
        </>
    )
}
