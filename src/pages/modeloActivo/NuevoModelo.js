import React from "react";
import "../../styles/content.css";
import "../../styles/inputForms.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import API_BASE_URL from "../../config";

const NuevoModeloActivo = () => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [codigo, setCodigo] = useState("");
    const [modelo, setModelo] = useState("");
    const [userId, setUserId] = useState(1);

    const handlePost = () => {
        const data = { content: { nombre, tipo, codigo, modelo, userId} };
        console.log(data);
        fetch(`${API_BASE_URL}/tipo-activo/post-tipo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                window.location.href = '/nuevo-activo-cctv';
            })
            .catch((error) => {
                console.error("Hubo un problema al eliminar el registro:", error);
            });
    };
    return (
        <div className="container-content">
            <div className="title">
                <h1>Nuevo Modelo Activo</h1>
            </div>
            <div className="content">
                <form class="add-form" action="/" method="">
                <div class="form-control">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                <div class="form-control">
                        <label for="modelo">Modelo</label>
                        <div>
                        <input type="text" name="modelo" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
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
                        <input type="text" name="codigo" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </div>
                    <div class="form-control"></div>

                    <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Crear</button></div>
                </form>
            </div>
        </div>
    );
};

export default NuevoModeloActivo;