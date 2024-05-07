import React from "react";
import {UseReport} from './hooks/useReport'
/*
            <p>Compañia: {report.company.name}</p>
            <p>Ejercicio: {report.exercise}</p>
            <p>Periodo: {report.period} </p>
            <p>Ingresos</p>
            <p>--------------------</p>
            <p>Banco: {report.icome[0].financeCompany.name}</p>
            <p>Monto: {report.icome[0].amount}</p>
            <p>Banco: {report.icome[1].financeCompany.name}</p>
            <p>Monto: {report.icome[1].amount}</p>
            <p>Banco: {report.icome[2].financeCompany.name}</p>
            <p>Monto: {report.icome[2].amount}</p>
            <p>Proyecciones</p>
            <p>---------------------</p>
            <p>Ventas</p>
            <p>Monto: {report.projections.sales.worth}</p>
            <p>IGV: {report.projections.sales.igv}</p>
            <p>Total: {report.projections.sales.total}</p>
            <p>----------------------</p>
            <p>Compras</p>
            <p>Monto: {report.projections.shopping.worth}</p>
            <p>IGV: {report.projections.shopping.igv}</p>
            <p>Total: {report.projections.shopping.total}</p>
            <p>Impuestos</p>
            <p>IGV del periodo: {report.taxes.of_the_period}</p>
            <p>Creditos a favor anterior: {report.taxes.credit_in_favor}</p>
            <p>IGV por devolver: {report.taxes.to_return}</p>
            <p>Impuesto a la Renta: {report.taxes.monthly_rent}</p>
            <p>Total: {report.taxes.total}</p> 
*/
const Report = ()=>{
    const {report} = UseReport()
    console.log(report)
    return (   
        <>
            {report.length !== 0 ?(
                <>
                <p>Compañia: {report.company.name}</p>
            <p>Ejercicio: {report.exercise}</p>
            <p>Periodo: {report.period} </p>
            <p>Ingresos</p>
            <p>--------------------</p>
            <p>Banco: {report.icome[0].financeCompany.name}</p>
            <p>Monto: {report.icome[0].amount}</p>
            <p>Banco: {report.icome[1].financeCompany.name}</p>
            <p>Monto: {report.icome[1].amount}</p>
            <p>Banco: {report.icome[2].financeCompany.name}</p>
            <p>Monto: {report.icome[2].amount}</p>
            <p>Proyecciones</p>
            <p>---------------------</p>
            <p>Ventas</p>
            <p>Monto: {report.projections.sales.worth}</p>
            <p>IGV: {report.projections.sales.igv}</p>
            <p>Total: {report.projections.sales.total}</p>
            <p>----------------------</p>
            <p>Compras</p>
            <p>Monto: {report.projections.shopping.worth}</p>
            <p>IGV: {report.projections.shopping.igv}</p>
            <p>Total: {report.projections.shopping.total}</p>
            <p>Impuestos</p>
            <p>IGV del periodo: {report.taxes.of_the_period}</p>
            <p>Creditos a favor anterior: {report.taxes.credit_in_favor}</p>
            <p>IGV por devolver: {report.taxes.to_return}</p>
            <p>Impuesto a la Renta: {report.taxes.monthly_rent}</p>
            <p>Total: {report.taxes.total}</p>
                </>): null }
        </>
    )}
export default Report