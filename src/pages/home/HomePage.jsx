import { UseReport } from "../../hooks/useReport"
import { dataHome } from "./index"
import { Bancos, Impuestos, Ventas } from "./partials/index"

export const HomePage = () => {

    const {report} = UseReport()

    return (
        <div className="space-y-8">
            <p className="text-[1rem] lg:ext-[1.2rem] font-semibold max-w-4xl mx-auto">
                {dataHome.home.descripcion}
            </p>
            <div className="space-y-10 lg:space-y-14">
                <Bancos />
                <Ventas />
                <Impuestos />
            </div>
        </div>
    )
}
