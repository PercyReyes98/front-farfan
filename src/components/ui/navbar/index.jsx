import { Link } from "react-router-dom"
import { itemsMenu } from "./items"

export const Navbar = () => {
    return (

        <div className="py-2 border-b-2">
            <nav className="container flex items-center justify-between">
                <Link to={"/"}>
                    <img src="/images/Logo.webp" alt="logo-farfan" className="h-[80px]" draggable="false" />
                </Link>
                <ul className="flex items-center gap-4">
                    {itemsMenu.map(({ href, name }, index) => (
                        <li key={index}>
                            <Link to={href} className="transition-colors duration-500 text-black hover:text-primary font-medium uppercase text-[0.95rem]">
                                {name}
                            </Link>
                        </li>

                    ))}
                </ul>
            </nav>
        </div>
    )
}
