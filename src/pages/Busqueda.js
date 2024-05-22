import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../config";

const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const columns = ['ID', 'Nombre', 'Número de serie', 'Número de activo', 'Fecha de entrada', 'Fecha de salida', 'Folio', 'Guía', 'Estatus', 'Razón'];

    useEffect(() => {
        conseguirActivos();
    }, [params]);

    const conseguirActivos = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/activos/buscar/${params.busqueda}`);
            if (!response.ok) {
                throw new Error('No se encontraron activos');
            }
            const data = await response.json();
            setActivos(data.activos);
            setCargando(false);
            setError(null);
        } catch (error) {
            console.error('Error:', error.message);
            setError('No se encontraron activos');
            setCargando(false);
            setActivos([]);
        }
    };

    return (
        <div>
            {cargando ? (
                <div>Cargando...</div>
            ) : error ? (
                <div>{error}</div>
            ) : activos.length === 0 ? (
                <div>No se encontraron activos.</div>
            ) : (
                <div>
                    <h2>Activos encontrados:</h2>
                    <div className="table-container">
                        <table className="responsive-table">
                            <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th key={col}>{col}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {activos.map(activo => (
                                <tr key={activo.id}>
                                    <td data-label="ID">{activo.id}</td>
                                    <td data-label="Nombre">{activo.nombre}</td>
                                    <td data-label="Número de serie">{activo.numeroSerie}</td>
                                    <td data-label="Número de activo">{activo.numeroActivo}</td>
                                    <td data-label="Fecha de entrada">{new Date(activo.fechaEntrada).toLocaleDateString()}</td>
                                    <td data-label="Fecha de salida">{new Date(activo.fechaSalida).toLocaleDateString()}</td>
                                    <td data-label="Folio">{activo.folio}</td>
                                    <td data-label="Guía">{activo.guia}</td>
                                    <td data-label="Estatus">{activo.estatus}</td>
                                    <td data-label="Razón">{activo.razon}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Busqueda;
