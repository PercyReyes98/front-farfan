import { useEffect, useState } from "react";
import { useParams } from "react-router";
import  ReportApi from '../../services/report'

export function UseStateAcount(){
    const {ruc} = useParams()
    const [stateAcount, setStateAcount] = useState([])

    useEffect(()=>{
        ReportApi.getAllRuc(ruc)
        .then(response =>{
            setStateAcount(response)
        })
    },[])

    return {
        stateAcount,
        setStateAcount
    }
}