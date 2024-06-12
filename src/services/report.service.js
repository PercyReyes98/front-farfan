import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getReportAll = async () => {
    try {
        const res = await axios.get(`${API_URL}/report/get`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const getRucReport = async (ruc) => {
    try {
        const res = await axios.get(`${API_URL}/report/get/${ruc}`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const createReport = async (data) => {
    try {
        const res = await axios.post(`${API_URL}/report/create`, data)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const updateReport = async (id, data) => {
    try {
        const res = await axios.patch(`${API_URL}/report/update/${id}`, data)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteReport = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/report/delete/${id}`)
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}
