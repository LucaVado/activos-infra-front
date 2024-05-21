import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../config";
import PageTitle from "../components/PageTitle";
import TitleTable from "../components/TitleTable";
import DataTable from "../components/DataTable";

const Busqueda = () => {
    const [activos, setActivos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const columns = ['id', 'nombre', 'tipo',  'modelo', 'codigo', 'fechaEntrada', 'fechaSalida', 'guia', 'estatus', 'razon'];
    const pages = {
        delete: 'activos/delete-activo',
        view: '/ver-activo',
        edit: '/editar-activo'
    }

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
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Número de serie</th>
                            <th>Número de activo</th>
                            <th>Fecha de entrada</th>
                            <th>Fecha de salida</th>
                            <th>Folio</th>
                            <th>Guía</th>
                            <th>Estatus</th>
                            <th>Razón</th>
                        </tr>
                        </thead>
                        <tbody>
                        {activos.map(activo => (
                            <tr key={activo.id}>
                                <td>{activo.id}</td>
                                <td>{activo.nombre}</td>
                                <td>{activo.numeroSerie}</td>
                                <td>{activo.numeroActivo}</td>
                                <td>{new Date(activo.fechaEntrada).toLocaleDateString()}</td>
                                <td>{new Date(activo.fechaSalida).toLocaleDateString()}</td>
                                <td>{activo.folio}</td>
                                <td>{activo.guia}</td>
                                <td>{activo.estatus}</td>
                                <td>{activo.razon}</td>
                                {/* Agrega más propiedades de activo según sea necesario */}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Busqueda;
