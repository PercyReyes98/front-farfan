import { Footer } from "../../ui/footer"
import { Navbar } from "../../ui/navbar"

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main className="container py-5 px-3 lg:px-0">
                {children}
            </main>
            <Footer/>
        </>
    )
}
