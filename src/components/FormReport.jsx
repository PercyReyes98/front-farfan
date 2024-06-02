import { useEffect, useState } from "react"
import { InputForm } from "./custom/inputform"

const FormReport = () => {
    const [report, setReport] = useState({
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
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(name, value)
        setReport({
            ...report,
            [name]: value
        })
    }
    useEffect(() => {
        const bcpAmount = Number(report.bcp_amount) || 0;
        const interbankAmount = Number(report.interbank_amount) || 0;
        const bbvaAmount = Number(report.bbva_amount) || 0;

        setReport((report) => ({
            ...report,
            icome_total: bcpAmount + interbankAmount + bbvaAmount,
        }));
    }, [report.bcp_amount, report.bbva_amount, report.interbank_amount]);

    useEffect(() => {
        const projectionSalesTotal = Number(report.projection_sales_total) || 0;
        const projectionShoppingTotal = Number(report.projection_shopping_total) || 0;

        const projectionSalesWorth = (projectionSalesTotal / 1.18).toFixed(2);
        const projectionSalesIgv = (projectionSalesWorth * 0.18).toFixed(2);
        const projectionShoppingWorth = (projectionShoppingTotal / 1.18).toFixed(2);
        const projectionShoppingIgv = (projectionShoppingWorth * 0.18).toFixed(2);
        const taxesOfThePeriod = Number(projectionSalesIgv) - Number(projectionShoppingIgv);
        const taxesToReturn = Math.round(taxesOfThePeriod);
        const taxesMonthlyRent = (projectionSalesWorth * 0.01).toFixed(0);
        const taxesTotal = taxesToReturn <= 0 ? taxesMonthlyRent : Number(taxesToReturn) + Number(taxesMonthlyRent);

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
    }, [report.projection_sales_total, report.projection_shopping_total]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/report/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(report)
            });

            if (response.ok) {
                console.log('Formulario enviado exitosamente');
            } else {
                console.log('Error al enviar el formulario');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <form  onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Empresa</legend>
                        {/* ESTE ES UN EJEMPLO DE COMO DEBES DE USAR EL INPUT FORM SI TIENES DUDAS ME AVISAS */}
                        <InputForm
                            id="ruc"
                            title="RUC"
                            placeholder="Ingresa un ruc"
                            containerClassName="" // Aqui puedes agregar clases de tailwind digamos que si esta trabajando con grillas puedes agregar col-span-full para que ocupe todas las columnas
                            defaultValue={report.company_ruc}
                            onChange={handleChange}
                        />
                        {/* <label>RUC</label>
                        <input type="text" name="company_ruc" id="ruc" value={report.company_ruc} onChange={handleChange} placeholder="ruc" /><br /> */}
                        <label>Razon Social</label>
                        <input type="text" name="company_name" id="razonSocial" value={report.company_name} onChange={handleChange} placeholder="razonSocial" /><br />
                        <label>Periodo</label>
                        <input type="text" name="period" id="periodo" value={report.period} onChange={handleChange} placeholder="periodo" /><br />
                        <label>Ejercicio</label>
                        <input type="text" name="exercise" id="ejercicio" value={report.exercise} onChange={handleChange} placeholder="ejercicio" /><br />
                    </fieldset>
                    <fieldset>
                        <legend>Ingresos</legend>
                        <label>BCP</label>
                        <input type="number" name="bcp_amount" id="bcp" value={report.bcp_amount} onChange={handleChange} placeholder="monto" /><br />
                        <label>Interbak</label>
                        <input type="number" name="interbank_amount" id="interbank" value={report.interbank_amount} onChange={handleChange} placeholder="monto" /><br />
                        <label>BBVA</label>
                        <input type="number" name="bbva_amount" id="bbva" value={report.bbva_amount} onChange={handleChange} placeholder="monto" /><br />
                        <label>Total</label>
                        <input disabled type="number" name="icome_total" id="bbva" value={report.icome_total} onChange={handleChange} placeholder="monto" /><br />
                    </fieldset>
                    <table>
                        <caption>
                            Proyecciones
                        </caption>
                        <thead>
                            <tr>
                                <th scope="col">Proyecciones</th>
                                <th scope="col">Valor de Venta</th>
                                <th scope="col">IGV</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Proyeccion de ventas</th>
                                <td><input disabled type="number" name="projection_sales_worth" id="" value={report.projection_sales_worth} onChange={handleChange} /></td>
                                <td><input disabled type="number" name="projection_sales_igv" id="" value={report.projection_sales_igv} onChange={handleChange} /></td>
                                <td><input type="number" name="projection_sales_total" id="" value={report.projection_sales_total} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Compras adquiridas</th>
                                <td><input disabled type="number" name="projection_shopping_worth" id="" value={report.projection_shopping_worth} onChange={handleChange} /></td>
                                <td><input disabled type="number" name="projection_shopping_igv" id="" value={report.projection_shopping_igv} onChange={handleChange} /></td>
                                <td><input type="number" name="projection_shopping_total" id="" value={report.projection_shopping_total} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <caption>
                            DETERMINACION DE IMPUESTOS mensual-proyeccion
                        </caption>
                        <tbody>
                            <tr>
                                <th scope="row">IGV del periodo</th>
                                <td><input disabled type="number" name="taxes_of_the_period" id="" value={report.taxes_of_the_period} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Credito a favor anterior</th>
                                <td><input type="number" name="taxes_credit_in_favor" id="" value={report.taxes_credit_in_favor} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">IGV por devolver</th>
                                <td><input disabled type="number" name="taxes_to_return" id="" value={report.taxes_to_return} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Impuesto a la renta mensual(1%)</th>
                                <td><input disabled type="number" name="taxes_monthly_rent" id="" value={report.taxes_monthly_rent} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Total impuestos mensual</th>
                                <td><input disabled type="number" name="taxes_total" id="" value={report.taxes_total} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table><br />
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </>
    )
}
export default FormReport
