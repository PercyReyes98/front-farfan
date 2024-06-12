import { dataHome } from ".."
import { Subtitle } from "../../../components/custom/subtitle"
import { Bar, YAxis, CartesianGrid, ResponsiveContainer, BarChart } from 'recharts'

const Databanco = ({ banco, plata }) => {
    return (
        <div className="flex flex-col items-center">
            <p className="font-semibold text-[0.8rem] lg:text-[0.9rem]">{banco}</p>
            <p className="text-[0.8rem]">{plata}</p>
        </div>
    )
}

export const Bancos = ( { data }) => {
    return (
        <section className="flex flex-col items-start max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <article className="space-y-4 text-justify flex flex-col items-start text-[1rem] lg:text-[1.2rem]">
                    <Subtitle>
                        Recaudacion de Bancos
                    </Subtitle>
                    <p>{dataHome.home.bancos.descripcionone}</p>
                    <p>
                        {dataHome.home.bancos.descripciontwo}
                    </p>
                </article>
                <div className="w-full h-52 lg:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}
                            margin={{
                                bottom: 8,
                                top: 5,
                                left: 11,
                            }}
                        >
                            <CartesianGrid stroke="#cccc" />
                            <YAxis
                                tickLine={false}
                                tickFormatter={(dinero) =>
                                    `s/${dinero / 1000}K`
                                }
                                style={{ fontSize: "0.75rem" }}
                            />
                            <Bar dataKey="dinero" barSize={50} fill="#FE6449" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="md:pl-[70px]">
                        <div className="py-1 bg-gray-300 flex items-center justify-around md:pl-4 pl-[70px]">
                            {data.map((item, index) => (
                                <Databanco key={index} banco={item.name} plata={`s/${item.dinero}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
