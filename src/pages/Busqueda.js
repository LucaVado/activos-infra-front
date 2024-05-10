import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

export const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const params = useParams();

    useEffect(() => {
        conseguirActivos();
    }, []);
    useEffect(() => {
        console.log(params)
    }, [params]);

    const conseguirActivos = async () => {



    }


    return (
        <div>Busqueda</div>
    )
}