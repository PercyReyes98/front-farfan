import { Link } from "react-router-dom"
import { itemsMenu } from "./items"
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <section className="py-2 border-b-2 bg-white z-50 sticky top-0 md:relative">
                <nav className="container px-3 xl:px-0 flex items-center justify-between">
                    <Link to={"/"}>
                        <img src="/images/Logo.webp" alt="logo-farfan" className="h-[65px] md:h-[80px]" draggable="false" />
                    </Link>
                    <button onClick={handleOpen} className="md:hidden">
                        <CiMenuFries className={`h-[40px] w-[40px] ${isOpen ? "hidden" : "block"}`} />
                        <IoMdClose className={`h-[40px] w-[40px] ${isOpen ? "block" : "hidden"}`} />
                    </button>
                    <ul className="hidden md:flex items-center gap-4">
                        {itemsMenu.map(({ href, name }, index) => (
                            <li key={index}>
                                <Link to={href} className="transition-colors duration-500 text-black hover:text-primary font-medium uppercase text-[0.95rem]">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
            <section className={`z-30 shadow-lg top-[85px] fixed bg-white w-full transition-all duration-700 ${isOpen ? "translate-y-0" : "-translate-y-full opacity-0"} `}>
                <nav className="flex flex-col gap-10 py-5 items-start px-8 md:px-24 lg:hidden">
                    {itemsMenu.map(({ href, name }, index) => (
                        <Link to={href} key={index} className="w-full font-medium uppercase relative text-[1rem] hover:text-primary ">
                            {name}
                        </Link>
                    ))}
                </nav>
            </section>
        </>
    )
}
