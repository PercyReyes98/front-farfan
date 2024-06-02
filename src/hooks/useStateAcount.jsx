import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllRuc } from "../services/report.service";

export function UseStateAcount(){
    const {ruc} = useParams()
    const [stateAcount, setStateAcount] = useState([])

    useEffect(()=>{
        getAllRuc(ruc)
        .then(response =>{
            setStateAcount(response)
        })
    },[])

    return {
        stateAcount,
        setStateAcount
    }
}
