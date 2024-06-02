//import { useParams } from 'react-router'
import {UseReport} from './hooks/useReport'

const Report = ()=>{
    const {report} = UseReport()
    return ( 
    <> 
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-8/12 mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50">RUC</th>
                        <th className='px-6 py-3 bg-gray-50'>Razon Social</th>
                        <th className='px-6 py-3 bg-gray-50'>Periodo</th>
                        <th className='px-6 py-3 bg-gray-50'>Ejercicio</th>
                        <th className='px-6 py-3 bg-gray-50'>Total Ingresos</th>
                        <th className='px-6 py-3 bg-gray-50'>Proyeccion de Ventas</th>
                        <th className='px-6 py-3 bg-gray-50'>Proyeccion de Compras</th>
                        <th className='px-6 py-3 bg-gray-50'>Impuesto Total</th>
                    </tr>
                </thead>
                <tbody>
                {report.length !== 0 ? report.map((item)=>
                    <>
                    <tr className="border-b border-gray-200">
                        <td className="px-6 py-4">{item.company_ruc}</td>
                        <td className="px-6 py-4">{item.company_name}</td>
                        <td className="px-6 py-4">{item.period}</td>
                        <td className="px-6 py-4">{item.exercise}</td>
                        <td className="px-6 py-4">{item.icome_total}</td>
                        <td className="px-6 py-4">{item.projection_sales_total}</td>
                        <td className="px-6 py-4">{item.projection_shopping_total}</td>
                        <td className="px-6 py-4">{item.taxes_total}</td>
                    </tr> </>) : <p>Cargando datos ...</p>}
                </tbody>
            </table>
                
        </div>
    </>
    )}
export default Report