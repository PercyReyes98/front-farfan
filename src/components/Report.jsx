
import {UseReport} from './hooks/useReport'
/*
            <p>RUC: {item.company_ruc}</p>
            <p>Empresa: {item.company_name}</p>
            <p>Periodo: {item.period}</p>
            <p>Ejercicio: {item.exercise} </p>
            <p>--------------------</p>
            <p>Ingresos</p>
            <p>BCP: {item.bcp_amount}</p>
            <p>INTERBANK: {item.interbanl_amount}</p>
            <p>BBVA: {item.bbva_amount}</p>
            <p>Total Ingresos: {item.icome_total}</p>
            <p>---------------------</p>
            <p>Projecciones Ventas</p>
            <p>Monto: {item.projection_sales_worth}</p>
            <p>igv: {item.projection_sales_igv}</p>
            <p>Total: {item.projection_sales_total}</p>
            <p>Proyecciones Compras</p>
            <p>Monto: {item.projection_shopping_worth}</p>
            <p>IGV: {item.projection_shopping_igv}</p>
            <p>Total: {item.projection_shopping_total}</p>
            <p>----------------------</p>
            <p>Impuestos</p>
            <p>IGV del periodo: {item.taxes_of_the_period}</p>
            <p>Creditos a favor anterior: {item.taxes_credit_in_favor}</p>
            <p>IGV por devolver: {item.taxes_to_return}</p>
            <p>Impuesto a la Renta: {item.taxes_monthly_rent}</p>
            <p>Total: {item.taxes_total}</p>
*/
const Report = ()=>{
    const {report} = UseReport()
    console.log(report)
    return (   
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>RUC</th>
                        <th>Razon Social</th>
                        <th>Periodo</th>
                        <th>Ejercicio</th>
                        <th>Total Ingresos</th>
                        <th>Proyeccion de Ventas</th>
                        <th>Proyeccion de Compras</th>
                        <th>Impuesto Total</th>
                    </tr>
                </thead>
                <tbody>
                {report.length !== 0 ? report.map((item)=>
                    <>
                    <tr>
                        <td>{item.company_ruc}</td>
                        <td>{item.company_name}</td>
                        <td>{item.period}</td>
                        <td>{item.exercise}</td>
                        <td>{item.icome_total}</td>
                        <td>{item.projection_sales_total}</td>
                        <td>{item.projection_shopping_total}</td>
                        <td>{item.taxes_total}</td>
                    </tr> </>) : <p>Cargando datos ...</p>}
                </tbody>
            </table>
                
        </>
    )}
export default Report