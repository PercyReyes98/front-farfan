import { useEffect, useState } from "react";
import  ReportApi from '../../services/report'

export function UseReport(){
    const [report, setReport] = useState([])

    useEffect(()=>{
        ReportApi.getAll()
        .then(response =>{
            setReport(response)
        })
    },[])

    return {
        report,
        setReport
    }
}
