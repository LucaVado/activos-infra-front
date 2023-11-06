import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { showNotification } from "../../utils/notification";
import { useState } from "react";
import { useEffect } from "react";
import API_BASE_URL from "../../config";
import "../../styles/inputForms.css";
import "../../styles/content.css";

const EditarProyecto = () => {

  const [nombre, setNombre] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [estatus, setEstatus] = useState("Entrada");
  const [guia, setGuia] = useState("");
  const [razon, setRazon] = useState("Incremento");
  const [sucursal, setSucursal] = useState("");
  const [userId, setUserId] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-proyecto?id=${id}`, { method: 'POST' });

  // nombre = setNombre(data.proyecto.nombre);
  // fechaEntrada = setFechaEntrada(data.proyecto.fechaEntrada);
  // fechaSalida = setFechaSalida(data.proyecto.fechaSalida);

  useEffect(() => {
    if (data && data.proyecto) {
      setNombre(data.proyecto.nombre);
      setFechaEntrada(data.proyecto.fechaEntrada);
      setFechaSalida(data.proyecto.fechaSalida);
      setSucursal(data.proyecto.sucursal);
      setEstatus(data.proyecto.estatus);
      setGuia(data.proyecto.guia);
      setRazon(data.proyecto.razon);
    }
  }, [data]);

  const handlePost = () => {
    const dataPost = { proyecto: { id: parseInt(id), nombre, fechaEntrada, fechaSalida, userId, sucursal, estatus, guia, razon } };
    console.log('nombre:', nombre);
    console.log('fechaEntrada:', fechaEntrada);
    console.log('fechaSalida:', fechaSalida);
    console.log('userId:', userId);
    console.log(dataPost);
    fetch(`${API_BASE_URL}/proyecto/post-edit-proyecto?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            showNotification(data.message, 'success');
            window.location.href = '/proyectos';
          });
        } else {
          response.json().then((data) => {
            showNotification(data.message, 'error');
          });
        }
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };

  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.proyecto) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Editar Proyecto</h1>
      </div>
      <div className="content">
        <form class="add-form" action="/" method="">
          <div class="form-control">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="sucursal">Sucursal  Destino</label>
            <input type="text" name="sucursal" id="sucursal" value={sucursal} onChange={(e) => setSucursal(e.target.value)} />
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
              <option value="Entrada" selected>Entrada</option>
              <option value="EnTransito" >en tránsito</option>
              <option value="PorRecibir" >Por recibir llegada</option>
            </select>
          </div>
          <div class="form-control">
            <label for="guia">guia</label>
            <input type="text" name="guia" id="guia" value={guia} onChange={(e) => setGuia(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="razon">razon</label>
            <select name="razon" id="razon" value={razon} onChange={(e) => setRazon(e.target.value)}>
              <option value="Incremento" selected>Incremento</option>
              <option value="Sustitucion" >Sustitucion</option>
              <option value="Apertura" >Apertura</option>
            </select>
          </div>

          <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Editar</button></div>
        </form>
      </div>
    </div>
  );
};

export default EditarProyecto;