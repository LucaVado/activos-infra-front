import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../config";

const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const params = useParams();

    useEffect(() => {
        conseguirActivos();
    }, [params]);

    const conseguirActivos = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/activos/buscar/${params.busqueda}`);
            if (!response.ok) {
                throw new Error('Error al obtener los activos');
            }
            const data = await response.json();
            setActivos(data.activos);
            setCargando(false);
        } catch (error) {
            console.error('Error:', error);
            setCargando(false);
        }
    };

    return (
        <div>
            {cargando ? (
                <div>Cargando...</div>
            ) : (
                <div>
                    <h2>Activos encontrados:</h2>
                    <ul>
                        {activos.map(activo => (
                            <li key={activo.id}>
                                <p>ID: {activo.id}</p>
                                <p>Nombre: {activo.nombre}</p>
                                <p>Número de serie: {activo.numeroSerie}</p>
                                <p>Número de activo: {activo.numeroActivo}</p>
                                <p>Fecha de entrada: {new Date(activo.fechaEntrada).toLocaleDateString()}</p>
                                <p>Fecha de salida: {new Date(activo.fechaSalida).toLocaleDateString()}</p>
                                <p>Folio: {activo.folio}</p>
                                <p>Guía: {activo.guia}</p>
                                <p>Estatus: {activo.estatus}</p>
                                <p>Razón: {activo.razon}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Busqueda;
