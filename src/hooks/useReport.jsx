import { createReport, deleteReport, getReportAll, updateReport } from "@/services/report.service"
import { useEffect, useState } from "react"

export const useReport = () => {

    const [ report, setReport ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const data = await getReportAll()
                setReport(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchReport()
    }, [])

    const addReport = async (data) => {
        try {
            const response = await createReport(data)
            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const editReport = async (id, data) => {
        try {
            const response = await updateReport(id, data)
            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const killReport = async (id) => {
        try {
            const response = await deleteReport(id)
            return response
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return { report, loading, error, addReport, editReport, killReport }
}
