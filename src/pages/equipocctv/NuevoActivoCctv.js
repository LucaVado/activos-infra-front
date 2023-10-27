import React from "react";
import "../../styles/content.css";
import "../../styles/inputForms.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import API_BASE_URL from "../../config";

const NuevoActivoCctv = () => {
    const [nombre, setNombre] = useState("");
    const [numeroSerie, setNumeroSerie] = useState("");
    const [numeroActivo, setNumeroActivo] = useState("");
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [estatus, setEstatus] = useState("Entrada");
    const [folio, setFolio] = useState("");
    const [guia, setGuia] = useState("");
    const [razon, setRazon] = useState("Incremento");
    const [userId, setUserId] = useState(1);
    const [tipoActivoId, setTipoActivoId] = useState(5);
    const [proyectoId, setProyectoId] = useState(2);
    const [modelo, setModelo] = useState("");

    const handlePost = () => {
        const data = { content: { nombre, numeroSerie, numeroActivo, fechaEntrada, fechaSalida, estatus, folio, guia, razon, userId, tipoActivoId, proyectoId } };
        console.log('nombre:', nombre);
        console.log('fechaEntrada:', fechaEntrada);
        console.log('fechaSalida:', fechaSalida);
        console.log('userId:', userId);
        console.log(data);
        fetch(`${API_BASE_URL}/activos/post-activo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                window.location.href = '/equipoCctv';
            })
            .catch((error) => {
                console.error("Hubo un problema al eliminar el registro:", error);
            });
    };
    return (
        <div className="container-content">
            <div className="title">
                <h1>Nuevo Activo CCTV</h1>
            </div>
            <div className="content">
                <div className="new-link" style={{paddingLeft: '22px'}}>
                    <NavLink to='/nuevo-modelo' className="button">
                        <span><h4>+Agregar modelo</h4></span>
                    </NavLink>
                </div>
                <form class="add-form" action="/" method="">
                <div class="form-control">
                        <label for="modelo">Modelo</label>
                        <div>
                        <input type="text" name="modelo" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                        <button class="btn-buscar-modelo" type="button" onClick="">Buscar modelo</button>
                        </div>
                    </div>
                    <div class="form-control">
                        <label for="numeroSerie">Numero de serie</label>
                        <input type="text" name="numeroSerie" id="numeroSerie" value={numeroSerie} onChange={(e) => setNumeroSerie(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="numeroActivo">Numero de Activo</label>
                        <input type="text" name="numeroActivo" id="numeroActivo" value={numeroActivo} onChange={(e) => setNumeroActivo(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="fechaEntrada">Fecha de Entrada</label>
                        <input type="date" name="fechaEntrada" id="fechaEntrada" value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="fechaSalida">Fecha de Salida</label>
                        <input type="date" name="fechaSalida" id="fechaSalida" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="estatus">Estatus</label>
                        <select name="estatus" id="estatus" value={estatus} onChange={(e) => setEstatus(e.target.value)}>
                            <option value="Entrada">Entrada</option>
                            <option value="EnTransito" selected>en tránsito</option>
                            <option value="PorRecibir" >Por recibir llegada</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label for="folio">folio</label>
                        <input type="text" name="folio" id="folio" value={folio} onChange={(e) => setFolio(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="guia">guia</label>
                        <input type="text" name="guia" id="guia" value={guia} onChange={(e) => setGuia(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <label for="razon">razon</label>
                        <select name="razon" id="razon" value={razon} onChange={(e) => setRazon(e.target.value)}>
                            <option value="Incremento">Incremento</option>
                            <option value="Sustitucion" selected>Sustitucion</option>
                            <option value="Apertura" >Apertura</option>
                        </select>
                    </div>
                    <div class="form-control"></div>

                    <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Crear</button></div>
                </form>
            </div>
        </div>
    );
};

export default NuevoActivoCctv;