import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import "../../styles/content.css";
import "../../styles/inputForms.css";
import API_BASE_URL from "../../config";

const EditarActivoCctv = () => {

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
  const [tipoActivoId, setTipoActivoId] = useState(1);
  const [proyectoId, setProyectoId] = useState(1);

  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/activos/get-activo?id=${id}`, { method: 'POST' });

  useEffect(() => {
    console.log(data);
    if (data && data.activo) {
      setNombre(data.activo.nombre);
      setNumeroSerie(data.activo.numeroSerie);
      setNumeroActivo(data.activo.numeroActivo);
      setFechaEntrada(data.activo.fechaEntrada.substring(0, 10));
      setFechaSalida(data.activo.fechaEntrada.substring(0, 10));
      setEstatus(data.activo.estatus);
      setFolio(data.activo.folio);
      setGuia(data.activo.guia);
      setRazon(data.activo.razon);
    }
  }, [data]);

  const handlePost = () => {
    const dataPost = { activo: { id: parseInt(data.activo.id), nombre, numeroSerie, numeroActivo, fechaEntrada, fechaSalida, estatus, folio, guia, razon, userId, tipoActivoId, proyectoId } };

    fetch(`${API_BASE_URL}/activos/post-edit-activo?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => {
        window.location.href = '/equipoCctv';
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };

  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.activo) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <PageTitle title= {`Editar ${nombre}`} origen={origen}/>

      <div className="content">
        <form class="add-form" action="/" method="">
          <div class="form-control">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="numeroSerie">Numero de serie</label>
            <input type="text" name="numeroSerie" id="numeroSerie" value={numeroSerie} onChange={(e) => setNumeroSerie(e.target.value)} />
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
            </select>
          </div>

          <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Editar</button></div>
        </form>
      </div>
    </div>
  );
};

export default EditarActivoCctv;