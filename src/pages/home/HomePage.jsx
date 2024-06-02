import { UseReport } from "../../hooks/useReport"
import { dataHome } from "./index"
import { Bancos, Ventas } from "./partials/index"

export const HomePage = () => {

    const {report} = UseReport()

    return (
        <div className="space-y-8">
            <p className="text-[1.2rem] font-semibold max-w-4xl mx-auto">
                {dataHome.home.descripcion}
            </p>
            <div className="space-y-14">
                <Bancos />
                <Ventas />
            </div>
        </div>
    )
}
