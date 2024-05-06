const API_URL ="http://localhost:3000/report"

const getAll = ()=>{
    return fetch(API_URL)
            .then(res => res.json())
            .then(data => { return data[0] })
}
export default {getAll}