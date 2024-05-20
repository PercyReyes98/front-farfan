const API_URL_ALL ="http://localhost:3000/report"
//const API_URL_RUC =`http://localhost:3000/report/${company_ruc}`

const getAll = ()=>{
    return fetch(API_URL_ALL)
            .then(res => res.json())
            .then(data => { return data })
}

export default {getAll}