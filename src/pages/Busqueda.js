import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../config";

export const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const params = useParams();

    useEffect(() => {
        conseguirActivos();
    }, [params]);

    const conseguirActivos = async () => {
        try {
            // Realizar la solicitud a tu API para obtener los activos
            const response = await fetch(`${API_BASE_URL}/activos/buscar/${params.busqueda}`);

            if (!response.ok) {
                throw new Error('Error al obtener los activos');
            }
            const data = await response.json();
            console.log(data);
            setActivos(data);
            setCargando(false);
        } catch (error) {
            console.error('Error:', error);
            // Manejar el error, podrías mostrar un mensaje al usuario
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
                        {Array.isArray(activos) && activos.map((activo) => (
                            <li key={activo.id}>{/* Mostrar información del activo */}</li>
                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
};
