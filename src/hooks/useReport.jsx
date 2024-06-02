import { useEffect, useState } from "react";
import { getAll } from "../services/report.service";

export function UseReport(){
    const [report, setReport] = useState([])

    useEffect(()=>{
        getAll()
        .then(response =>{
            setReport(response)
        })
    },[])

    return {
        report,
        setReport
    }
}
