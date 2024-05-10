import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

export const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const params = useParams();

    useEffect(() => {
        console.log(params)
    }, []);

    return (
        <div>Busqueda</div>
    )
}