import { Link } from "react-router-dom"

export const ErrorPage = ({ mensajeerror }) => {
    return (
        <section className="grid pt-20 place-content-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-400">404</h1>
                <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-800">{mensajeerror}</p>
                <Link to="/" className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white hover:opacity-80">
                    Vuelve al Inicio
                </Link>
            </div>
        </section>
    )
}
