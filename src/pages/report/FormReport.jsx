import { useEffect, useState } from "react"
import { InputForm } from "../../components/custom/inputform"
import toast from "react-hot-toast"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"
import { useReport } from "@/hooks/useReport"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const FormReport = () => {

    const { addReport } = useReport()

    const initialReportState = {
        company_ruc: "",
        company_name: "",
        period: "",
        exercise: "",
        bcp_amount: 0,
        interbank_amount: 0,
        bbva_amount: 0,
        icome_total: 0,
        projection_sales_worth: 0,
        projection_sales_igv: 0,
        projection_sales_total: 0,
        projection_shopping_worth: 0,
        projection_shopping_igv: 0,
        projection_shopping_total: 0,
        taxes_of_the_period: 0,
        taxes_credit_in_favor: 0,
        taxes_to_return: 0,
        taxes_monthly_rent: 0,
        taxes_total: 0
    }

    const [report, setReport] = useState(initialReportState)

    const tableProyecciones = [
        {
            header: "",
        },
        {
            header: "Valor de Venta",
        },
        {
            header: "IGV",
        },
        {
            header: "Total",
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        let info = {
            company_ruc: report.company_ruc,
            company_name: report.company_name,
            period: report.period,
            exercise: report.exercise,
            bcp_amount: parseFloat(report.bcp_amount),
            interbank_amount: parseFloat(report.interbank_amount),
            bbva_amount: parseFloat(report.bbva_amount),
            projection_sales_worth: parseFloat(report.projection_sales_worth),
            projection_sales_igv: parseFloat(report.projection_sales_igv),
            projection_sales_total: parseFloat(report.projection_sales_total),
            projection_shopping_worth: parseFloat(report.projection_shopping_worth),
            projection_shopping_igv: parseFloat(report.projection_shopping_igv),
            projection_shopping_total: parseFloat(report.projection_shopping_total),
            taxes_of_the_period: parseFloat(report.taxes_of_the_period),
            taxes_credit_in_favor : parseFloat(report.taxes_credit_in_favor),
            taxes_to_return: parseFloat(report.taxes_to_return),
            taxes_monthly_rent: parseFloat(report.taxes_monthly_rent),
            taxes_total: parseFloat(report.taxes_total)
        }
        await addReport(info).then(() => {
            toast.success("Reporte Agregao con exito!")
            setReport(initialReportState)
        }).catch(() => {
            toast.error("Algo salio mal :C")
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setReport((prevReport) => ({
            ...prevReport,
            [name]: name.includes("amount") || name.includes("total") || name.includes("taxes") || name.includes("projection") ? parseFloat(value) : value,
        }))
    }

    useEffect(() => {
        const bcp = Number(report.bcp_amount)
        const interbank = Number(report.interbank_amount)
        const bbva = Number(report.bbva_amount)
        setReport((report) => ({
            ...report,
            totalbancos: bcp + interbank + bbva
        }))
    }, [report.bcp_amount, report.interbank_amount, report.bbva_amount])

    useEffect(() => {
        const projectionSalesTotal = Number(report.projection_sales_total)
        const projectionShoppingTotal = Number(report.projection_shopping_total)
        const projectionSalesWorth = (projectionSalesTotal / 1.18).toFixed(2)
        const projectionSalesIgv = (projectionSalesWorth * 0.18).toFixed(2)
        const projectionShoppingWorth = (projectionShoppingTotal / 1.18).toFixed(2)
        const projectionShoppingIgv = (projectionShoppingWorth * 0.18).toFixed(2)
        const taxesOfThePeriod = Number(projectionSalesIgv) - Number(projectionShoppingIgv)
        const taxesToReturn = Math.round(taxesOfThePeriod)
        const taxesMonthlyRent = (projectionSalesWorth * 0.01).toFixed(0)
        const taxesTotal = taxesToReturn <= 0 ? taxesMonthlyRent : Number(taxesToReturn) + Number(taxesMonthlyRent)

        setReport((report) => ({
            ...report,
            projection_sales_worth: projectionSalesWorth,
            projection_sales_igv: projectionSalesIgv,
            projection_shopping_worth: projectionShoppingWorth,
            projection_shopping_igv: projectionShoppingIgv,
            taxes_of_the_period: taxesOfThePeriod,
            taxes_to_return: taxesToReturn,
            taxes_monthly_rent: taxesMonthlyRent,
            taxes_total: taxesTotal,
        }));
    }, [report.projection_sales_total, report.projection_shopping_total])

    return (
        <>
            <div>
                <div className="pb-5 flex items-center justify-between">
                    <h2 className="uppercase text-[1.2rem] font-semibold">Formulario de Reporte</h2>
                    <Link to={"/"}>
                        <Button>
                            Volver al Inicio
                        </Button>
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <InputForm
                        id="ruc"
                        title="RUC"
                        name="company_ruc"
                        placeholder="Ingresa un ruc"
                        maxLength={11}
                        minLength={11}
                        required
                        onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }}
                        onChange={handleChange}
                    />
                    <InputForm
                        id="razonSocial"
                        title="Razon Social"
                        name="company_name"
                        required
                        placeholder="Ingresa una razon social"
                        onChange={handleChange}
                    />
                    <InputForm
                        id="periodo"
                        title="Periodo"
                        name="period"
                        required
                        placeholder="Ingresa un periodo"
                        onChange={handleChange}
                    />
                    <InputForm
                        id="ejercicio"
                        title="Ejercicio"
                        name="exercise"
                        required
                        placeholder="Ingresa un ejercicio"
                        onChange={handleChange}
                    />
                    <section className="col-span-full space-y-3">
                        <h3 className="uppercase font-semibold">Ingresos de Bancos</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <InputForm
                                id="bcp"
                                title="BCP"
                                name="bcp_amount"
                                required
                                placeholder="Ingrese monto BCP"
                                onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }}
                                onChange={handleChange}
                            />
                            <InputForm
                                id="interbank"
                                title="Interbank"
                                required
                                placeholder="Ingrese monto Interbank"
                                name="interbank_amount"
                                onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }}
                                onChange={handleChange}
                            />
                            <InputForm
                                id="bbva"
                                title="BBVA"
                                placeholder="Ingrese monto BBVA"
                                required
                                name="bbva_amount"
                                onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }}
                                onChange={handleChange}
                            />
                            <InputForm
                                id="total"
                                title="Total"
                                placeholder="Ingrese monto total"
                                name="icome_total"
                                onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }}
                                value={report.totalbancos}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                    </section>
                    <section className="col-span-full space-y-3">
                        <h3 className="uppercase font-semibold">Proyecciones</h3>
                        <Table className="cursor-pointer">
                            <TableHeader className="bg-red-600 hover:bg-red-600">
                                <TableRow>
                                    {tableProyecciones.map((item, index) => (
                                        <TableHead key={index} className="text-white uppercase">{item.header}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody className="w-full">
                                <TableRow>
                                    <TableCell>Proyeccion de ventas</TableCell>
                                    <TableCell><InputForm name="projection_sales_worth" disabled value={report.projection_sales_worth} onChange={handleChange} /></TableCell>
                                    <TableCell><InputForm name="projection_sales_igv" disabled value={report.projection_sales_igv} onChange={handleChange} /></TableCell>
                                    <TableCell><InputForm name="projection_sales_total" onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }} onChange={handleChange} required placeholder="Ingresa tu venta" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Compras adquiridas</TableCell>
                                    <TableCell><InputForm name="projection_shopping_worth" disabled value={report.projection_shopping_worth} onChange={handleChange} /></TableCell>
                                    <TableCell><InputForm name="projection_shopping_igv" disabled value={report.projection_shopping_igv} onChange={handleChange} /></TableCell>
                                    <TableCell><InputForm name="projection_shopping_total" onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }} placeholder="Ingresa tu venta" required onChange={handleChange} /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </section>
                    <section className="col-span-full space-y-3">
                        <h3 className="uppercase font-semibold">Determinacion de impuesto - Mensual / Proyeccion</h3>
                        <Table className="cursor-pointer">

                            <TableBody className="w-full">
                                <TableRow>
                                    <TableCell>IGV del periodo</TableCell>
                                    <TableCell><InputForm disabled name="taxes_of_the_period" value={report.taxes_of_the_period} onChange={handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Credito a favor anterior</TableCell>
                                    <TableCell><InputForm name="taxes_credit_in_favor" required onInput={(e) => { let value = (e.target).value; (e.target).value = value.replace(/\D/g, '') }} placeholder="Ingresa tu credito" onChange={handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>IGV por devolver</TableCell>
                                    <TableCell><InputForm disabled type="number" name="taxes_to_return" value={report.taxes_to_return} onChange={handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Impuesto ala renta mensual (1%)</TableCell>
                                    <TableCell><InputForm disabled name="taxes_monthly_rent" value={report.taxes_monthly_rent} onChange={handleChange} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Total de impuesto mensual</TableCell>
                                    <TableCell><InputForm disabled name="taxes_total" value={report.taxes_total}  onChange={handleChange} /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </section>
                    <Button className="col-span-full" type="submit">
                        Guardar
                    </Button>
                </form>
            </div>
        </>
    )
}
export default FormReport
