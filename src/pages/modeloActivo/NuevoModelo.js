import React from "react";
import "../../styles/content.css";
import "../../styles/inputForms.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../fetch/useFetch";
import useBeforeUnload from "../../fetch/beforeUnload";
import PageTitle from "../../components/PageTitle";
import TitleTable from "../../components/TitleTable";
import DataTable from "../../components/DataTable";
import API_BASE_URL from "../../config";

const NuevoModeloActivo = () => {
    const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("CCTV");
    const [codigo, setCodigo] = useState("");
    const [modelo, setModelo] = useState("");
    const [userId, setUserId] = useState(1);

    const [formModified, setFormModified] = useState(false);
    useBeforeUnload(formModified);

    const columns = ['id', 'nombre', 'tipo', 'modelo', 'codigo'];
    const pages = {
        delete: "proyecto/delete-tipo",
        view: '/nuevo-modelo',
        edit: '/nuevo-modelo'
    }

    const modelosData = useFetch(`${API_BASE_URL}/tipo-activo/get-all`);
    console.log('modelo: ', modelosData);

    const handlePost = () => {
        const data = { content: { nombre, tipo, codigo, modelo, userId } };
        console.log(data);
        fetch(`${API_BASE_URL}/tipo-activo/post-tipo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    setFormModified(false);
                    window.location.href = '/nuevo-activo';
                } else {
                    console.error("Hubo un problema al crear el modelo", response);
                }
            })
            .catch((error) => {
                console.error("Hubo un problema al crear el modelo", error);
            });
    };
    return (
        <div className="container-content">
            {/* <div className="title">
                <h1>Nuevo Modelo Activo</h1>
            </div> */}
            <PageTitle title="Nuevo Modelo" origin={origen} />

            <div className="content">
                <form class="add-form" action="/" method="">
                    <div class="form-control">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                    </div>
                    <div class="form-control">
                        <label for="modelo">Modelo</label>
                        <div>
                            <input type="text" name="modelo" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="tipo">Tipo</label>
                        <select name="tipo" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="CCTV" selected>CCTV</option>
                            <option value="Alarma">Alarma</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="codigo">Codigo</label>
                        <input type="text" name="codigo" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
                    </div>
                    <div class="form-control"></div>

                    <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Crear</button></div>
                </form>
                <div className="title-table">
                    <TitleTable tableName='Modelos' page='/nuevo-modelo' button='+ Nuevo' />
                </div>
                <div>
                    {
                        modelosData.data && modelosData.data.tipos && modelosData.data.tipos.length > 0 ? (
                            <DataTable columns={columns} data={modelosData.data.tipos} pages={pages} />
                        ) : (
                            <p>Cargando...</p>
                        )}
                </div>
            </div>
        </div>
    );
};

export default NuevoModeloActivo;