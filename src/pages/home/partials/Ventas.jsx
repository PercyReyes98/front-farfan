import { dataHome } from ".."
import { Subtitle } from "../../../components/custom/subtitle"
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: 'banco1',
        venta: 10000.00,
        igv: 15000.00
    },
    {
        name: 'banco1',
        venta: 1525.42,
        igv: 2288.24
    }
]

export const Ventas = () => {
    return (
        <section className="flex flex-col items-start max-w-4xl mx-auto pt-10 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <article className="space-y-4 text-justify flex flex-col items-start text-[1rem] lg:text-[1.2rem]">
                    <Subtitle>
                        Proyeccion de Ventas
                    </Subtitle>
                    <p>{dataHome.home.ventas.descripcion}</p>
                    <ul className="text-start">
                        <li>✅Por la capacidad de adquision (compras).</li>
                        <li>✅Por la recaudación de bancos.</li>
                        <li>✅Por los gastos fijos del negocio (planilla, alquileres, entre otros).</li>
                    </ul>
                </article>
                <section>
                    <div className="w-full h-52 lg:h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                layout="vertical"
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    right: 20,
                                    bottom: 5
                                }}
                            >
                                <XAxis
                                    axisLine={false}
                                    tickLine={false}
                                    type="number"
                                    tickFormatter={(dinero1) =>
                                        `s/${dinero1 / 1000}K`
                                    }
                                />
                                <YAxis
                                    axisLine={true}
                                    tickLine={false}
                                    type="category"
                                    scale="auto"
                                    style={{ fontSize: "0.75rem", display: "none" }}
                                />
                                <Tooltip
                                    cursor={{ fill: "transparent" }}
                                />
                                <Bar dataKey="venta" barSize={25} fill="#FE6449" radius={[0, 5, 5, 0]} />
                                <Bar dataKey="igv" barSize={25} fill="#364E55" radius={[0, 5, 5, 0]} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="md:pl-4">
                        <table className="w-full text-xs">
                            <thead className="bg-red-200">
                                <tr className="space-x-5">
                                    <th className="bg-white"></th>
                                    <th className="p-1">IGV</th>
                                    <th className="p-1">Precio de venta</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-200 text-center">
                                <tr>
                                    <td className="p-1 flex items-center gap-2 justify-center">
                                        <div className="h-4 w-4 bg-[#FE6449]"></div>
                                        Compras adquiridas
                                    </td>
                                    <td className="p-1">S/1,525.42</td>
                                    <td className="p-1">S/10,000.00</td>
                                </tr>
                                <tr>
                                    <td className="p-1 flex items-center gap-2 justify-center">
                                        <div className="h-4 w-4 bg-[#364E55] "></div>
                                        Ventas Proyectadas
                                    </td>
                                    <td className="p-1">S/22,88.24</td>
                                    <td className="p-1">S/15,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </section>
    )
}
