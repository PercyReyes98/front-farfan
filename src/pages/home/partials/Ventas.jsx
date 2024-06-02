import { Subtitle } from "../../../components/custom/subtitle"
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
        <section className="flex flex-col items-start max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-5 items-center">
                <article className="space-y-4 text-justify flex flex-col items-start text-[1.2rem]">
                    <Subtitle>
                        Proyeccion de Ventas
                    </Subtitle>
                    <p>Las Proyecciones de ventas se determinan por los siguientes criterios</p>
                    <ul className="text-start">
                        <li>✅Por la capacidad de adquision (compras).</li>
                        <li>✅Por la recaudación de bancos.</li>
                        <li>✅Por los gastos fijos del negocio (planilla, alquileres, entre otros).</li>
                    </ul>
                </article>
                <section>
                    <div className="w-full h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                layout="vertical"
                                width={500}
                                height={400}
                                data={data}
                                margin={{
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
                                    scale="band"
                                    style={{ fontSize: "0.75rem", display : "none" }}
                                />
                                <Tooltip
                                    cursor={{ fill: "transparent" }}
                                />
                                <Bar dataKey="venta" barSize={25} fill="#FE6449" radius={[0, 5, 5, 0]} />
                                <Bar dataKey="igv" barSize={25} fill="#364E55" radius={[0, 5, 5, 0]} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="pl-16">
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
                                        <div className="h-5 w-5 bg-[#FE6449]"></div>
                                        Compras adquiridas
                                    </td>
                                    <td className="p-1">S/1,525.42</td>
                                    <td className="p-1">S/10,000.00</td>
                                </tr>
                                <tr>
                                    <td className="p-1 flex items-center gap-2 justify-center">
                                        <div className="h-5 w-5 bg-[#364E55] "></div>
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
