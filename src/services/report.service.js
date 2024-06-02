import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getAll = async () => {
    try {
        const res = await axios.get(`${API_URL}/report`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const getAllRuc = async (company_ruc) => {
    try {
        const res = await axios.get(`${API_URL}/${company_ruc}`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}
