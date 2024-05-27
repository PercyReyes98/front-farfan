const API_URL_ALL ="http://localhost:3000/report"

const getAll = ()=>{
    return fetch(API_URL_ALL)
            .then(res => res.json())
            .then(data => { return data })
}
const getAllRuc = (company_ruc)=>{
    return fetch(`${API_URL_ALL}/${company_ruc}`)
            .then(res => res.json())
            .then(data => { return data })
}

export default {getAll, getAllRuc}