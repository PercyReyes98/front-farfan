import { useState, useEffect } from "react"
const FormReport = ()=>{
    const [formData, setFormData] = useState({
        company:{
            ruc:"",
            name:""
            },
                period:"",
                exercise: "",
                icome:[{
            financeCompany:{
                name: "BCP",
                ruc: "20553321488"
            },
            amount:0
        },
        {
            financeCompany:{
                name: "Interbank",
                ruc: "20558869123"
            },
            amount: 0
        },{
            financeCompany:{
                name: "BBVA",
                ruc: "2085789632"
            },
            amount: 0
        }],
        projections: {
            sales:{
            total: 0,
            worth:0,
            igv: 0 
        },
            shopping:{
            total: 0,
            worth: 0,
            igv: 0
        }
        },
        taxes:{
        of_the_period:0,
        credit_in_favor:0,
        to_return:0,
        monthly_rent:0 ,
        total:0
        }
        })
        const handleChange = (event) => {
            const { name, value } = event.target
            setFormData({
                ...formData,
                [name]:value
            })
          }
        
          const handleSubmit = async (event) => {
            event.preventDefault();
        
            try {
              const response = await fetch('http://localhost:3000/report', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Empresa</legend>
                <label>RUC</label>
                <input type="text" name="ruc"  id="ruc" value={formData.company.ruc} onChange={handleChange} placeholder="ruc"/><br />
                <label>Razon Social</label>
                <input type="text" name="name"  id="razonSocial" value={formData.company.name} onChange={handleChange} placeholder="razonSocial"/><br />
                <label>Periodo</label>
                <input type="text" name="period"  id="periodo" value={formData.period} onChange={handleChange} placeholder="periodo"/><br />
                <label>Ejercicio</label>
                <input type="text" name="exercise"  id="ejercicio" value={formData.exercise} onChange={handleChange} placeholder="ejercicio"/><br />
            </fieldset>
            <fieldset>
                <legend>Ingresos</legend>
                <label>BCP</label>
                <input type="number" name="amount"  id="bcp" value={formData.icome[0].amount} onChange={handleChange} placeholder="monto"/><br />
                <label>Interbak</label>
                <input type="number" name="amount"  id="interbank" value={formData.icome[1].amount} onChange={handleChange} placeholder="monto"/><br />
                <label>BBVA</label>
                <input type="number" name="amount"  id="bbva" value={formData.icome[2].amount} onChange={handleChange} placeholder="monto"/><br />
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
                    <td><input  type="number" name="worth" id="" value={formData.projections.sales.worth} onChange={handleChange} /></td>
                    <td><input  type="number" name="igv" id="" value={formData.projections.sales.igv} onChange={handleChange} /></td>
                    <td><input type="number" name="total" id=""  value={formData.projections.sales.total} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Compras adquiridas</th>
                    <td><input  type="number" name="worth" id="" value={formData.projections.shopping.worth} onChange={handleChange} /></td>
                    <td><input  type="number" name="igv" id="" value={formData.projections.shopping.igv} onChange={handleChange}/></td>
                    <td><input type="number" name="total" id="" value={formData.projections.shopping.total} onChange={handleChange}/></td>
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
                    <td><input  type="number" name="of_the_period" id="" value={formData.taxes.of_the_period} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Credito a favor anterior</th>
                    <td><input type="number" name="credit_in_favor" id="" value={formData.taxes.credit_in_favor} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                    <th scope="row">IGV por devolver</th>
                    <td><input  type="number" name="to_return" id="" value={formData.taxes.to_return} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Impuesto a la renta mensual(1%)</th>
                    <td><input  type="number" name="monthly_rent" id="" value={formData.taxes.monthly_rent} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                    <th scope="row">Total impuestos mensual</th>
                    <td><input  type="number" name="total" id="" value={formData.taxes.total} onChange={handleChange} /></td>
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