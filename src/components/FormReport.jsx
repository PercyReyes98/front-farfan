import { useState} from "react"
const FormReport = ()=>{
    const [ company, setCompany] = useState({
        ruc:'',
        name:''
    })
    const [bcp, setBcp] = useState({
        name: "BCP",
        ruc: "20553321488",
        amount: null
    })
    const [interbank, setInterbank] = useState({
        name: "Interbank",
        ruc: "20558869123",
        amount: null
    })
    const [bbva, setBbva] = useState({
        name: "BBVA",
        ruc: "2085789632",
        amount: null
    })
    const [sales, setSales] = useState({
        total: null,
        worth:null,
        igv: null
    })
    const [shopping, setShopping] = useState({
        total: null,
        worth:null,
        igv: null
    })
    const [taxes, setTaxes] = useState({
        of_the_period:null,
        credit_in_favor:null,
        to_return:null,
        monthly_rent:null,
        total:null
    })
    
    const [rang, setRang] = useState({
        period: '',
        exercise:''
    })
    const handleChangeCompany = (event)=>{
        const {name,value} = event.target
        setCompany({
            ...company,
            [name]: value
        })
    }
    const handleChangeBCP = (event)=>{
        const {name,value} = event.target
        setBcp({
            ...bcp,
            [name]: value
        })
    }
    const handleChangeINTERBANK = (event)=>{
        const {name,value} = event.target
        setInterbank({
            ...interbank,
            [name]: value
        })
    }
    const handleChangeBBVA = (event)=>{
        const {name,value} = event.target
        setBbva({
            ...bbva,
            [name]: value
        })
    }
    const handleChangeSales = (event)=>{
        const {name,value} = event.target
        setSales({
            ...sales,
            [name]: value
        })
    }
    const handleChangeShoppping = (event)=>{
        const {name,value} = event.target
        setShopping({
            ...shopping,
            [name]: value
        })
    }
    const handleChangeTaxes = (event)=>{
        const {name,value} = event.target
        setTaxes({
            ...taxes,
            [name]: value
        })
    } 
    const handleChange = (event)=>{
        const {name,value} = event.target
        setRang({
            ...rang,
            [name]: value
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
                body: JSON.stringify({company,
                    period: rang.period,
                    exercise:rang.exercise,
                    icome:[
                        {financeCompany:{bcp}},
                        {financeCompany:{interbank}},
                        {financeCompany:{bbva}}],
                    projections:{
                        sales,
                        shopping},
                        taxes})
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
                <input type="text" name="ruc"  id="ruc" value={company.ruc} onChange={handleChangeCompany} placeholder="ruc"/><br />
                <label>Razon Social</label>
                <input type="text" name="name"  id="razonSocial" value={company.name} onChange={handleChangeCompany} placeholder="razonSocial"/><br />
                <label>Periodo</label>
                <input type="text" name="period"  id="periodo" value={rang.period} onChange={handleChange} placeholder="periodo"/><br />
                <label>Ejercicio</label>
                <input type="text" name="exercise"  id="ejercicio" value={rang.exercise} onChange={handleChange} placeholder="ejercicio"/><br />
            </fieldset>
            <fieldset>
                <legend>Ingresos</legend>
                <label>BCP</label>
                <input type="number" name="amount"  id="bcp" value={bcp.amount} onChange={handleChangeBCP} placeholder="monto"/><br />
                <label>Interbak</label>
                <input type="number" name="amount"  id="interbank" value={interbank.amount} onChange={handleChangeINTERBANK} placeholder="monto"/><br />
                <label>BBVA</label>
                <input type="number" name="amount"  id="bbva" value={bbva.amount} onChange={handleChangeBBVA} placeholder="monto"/><br />
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
                    <td><input  type="number" name="worth" id="" value={sales.worth} onChange={handleChangeSales} /></td>
                    <td><input  type="number" name="igv" id="" value={sales.igv} onChange={handleChangeSales} /></td>
                    <td><input type="number" name="total" id=""  value={sales.total} onChange={handleChangeSales}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Compras adquiridas</th>
                    <td><input  type="number" name="worth" id="" value={shopping.worth} onChange={handleChangeShoppping} /></td>
                    <td><input  type="number" name="igv" id="" value={shopping.igv} onChange={handleChangeShoppping}/></td>
                    <td><input type="number" name="total" id="" value={shopping.total} onChange={handleChangeShoppping}/></td>
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
                    <td><input  type="number" name="of_the_period" id="" value={taxes.of_the_period} onChange={handleChangeTaxes}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Credito a favor anterior</th>
                    <td><input type="number" name="credit_in_favor" id="" value={taxes.credit_in_favor} onChange={handleChangeTaxes}/></td>
                    </tr>
                    <tr>
                    <th scope="row">IGV por devolver</th>
                    <td><input  type="number" name="to_return" id="" value={taxes.to_return} onChange={handleChangeTaxes}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Impuesto a la renta mensual(1%)</th>
                    <td><input  type="number" name="monthly_rent" id="" value={taxes.monthly_rent} onChange={handleChangeTaxes} /></td>
                    </tr>
                    <tr>
                    <th scope="row">Total impuestos mensual</th>
                    <td><input  type="number" name="total" id="" value={taxes.total} onChange={handleChangeTaxes} /></td>
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