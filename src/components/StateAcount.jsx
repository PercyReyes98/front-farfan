
import {UseStateAcount} from './hooks/useStateAcount'

function StateAcount (){
    const{ stateAcount} = UseStateAcount([]);

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
                {stateAcount.length !== 0 ? stateAcount.map((item)=>
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
export default StateAcount