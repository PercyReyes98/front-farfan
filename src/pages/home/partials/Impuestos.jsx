import { dataHome } from ".."
import { Subtitle } from "../../../components/custom/subtitle"

export const Impuestos = () => {
    return (
        <section className="flex flex-col items-start max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <article className="space-y-4 text-justify flex flex-col items-start text-[1rem] lg:text-[1.2rem]">
                    <Subtitle>
                        Proyeccion de Impuestos
                    </Subtitle>
                    <p>{dataHome.home.impuestos.descripcion}</p>
                </article>
                <div className="md:pl-4">
                    <table className="w-full text-xs">
                        <thead className="bg-red-200">
                            <tr className="text-end">
                                <th className="py-1 pr-4">DETERMINACION DE IMPUESTOS mensual-proyección</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="flex gap-8 bg-white justify-end py-1 pr-3">
                                    <ul className="text-end">
                                        <li>IGV del periodo</li>
                                        <li>Crédito a favor anterior</li>
                                        <li>IGV por devolver</li>
                                        <li>Impuesto a la renta mensual(1%)</li>
                                    </ul>
                                    <ul className="text-end">
                                        <li>762.71</li>
                                        <li>0.00</li>
                                        <li>763.00</li>
                                        <li>127.00</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="bg-gray-300 flex items-center justify-end gap-8 pr-3 py-1">
                                    <p>Total impuestos mensual</p>
                                    <p>890.00</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
