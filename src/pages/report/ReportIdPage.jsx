import { Loader } from "@/components/ui/loader"
import { getRucReport } from "@/services/report.service"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ErrorPage } from ".."
import { dataHome } from "."
import { Bancos, Impuestos, Ventas } from "./partials"

export const ReportIdPage = () => {

    const params = useParams()
    const [report, setReport] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchReport = async () => {
            try {
                setLoading(true)
                const data = await getRucReport(params.ruc)
                setReport(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchReport()
    }, [params.ruc])

    const dataBancos = [
        {
            name: 'BCP',
            dinero: report?.bcp_amount
        },
        {
            name: 'BBVA',
            dinero: report?.bbva_amount
        },
        {
            name: 'INTERBANK',
            dinero: report?.interbank_amount
        }
    ]

    if (loading) return <Loader/>

    if (error) return <ErrorPage mensajeerror={"Ruc no encontrado o no valido!"}/>

    console.log(report);

    return (
        <>
            <article className="space-y-8">
                <p className="text-[1rem] lg:ext-[1.2rem] font-semibold max-w-4xl mx-auto">
                    {dataHome.home.descripcion}
                </p>
            <div className="space-y-10 lg:space-y-14">
                <Bancos  data={dataBancos}/>
                <Ventas />
                <Impuestos />
            </div>
        </article>
        </>
    )
}
