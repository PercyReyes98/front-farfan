import "./triangle.css"

export const Subtitle = ({ children }) => {
    return (
        <h2 className="triangle relative flex py-2 pl-8 pr-10 uppercase font-bold items-center justify-center overflow-hidden bg-secondary text-center">
            {children}
        </h2>
    )
}
