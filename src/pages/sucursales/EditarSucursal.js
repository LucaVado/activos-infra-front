import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/content.css";
import API_BASE_URL from "../../config";

const EditarSucursal = () => {

    const [nombre, setNombre] = useState("");
    const [iata, setIata] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [estado, setEstado] = useState("");
    const [userId, setUserId] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/sucursal/get-sucursal?id=${id}`, { method: 'POST' });

  useEffect(() => {
    console.log(data);
    if (data && data.sucursal) {
      setNombre(data.sucursal.nombre);
      setIata(data.sucursal.iata);
      setLatitud(data.sucursal.latitud);
      setLongitud(data.sucursal.longitud);
      setEstado(data.sucursal.estado);
    }
  }, [data]);

  const handlePost = () => {
    const dataPost = { sucursal: { id: parseInt(data.sucursal.id), nombre, iata, latitud, longitud, estado } };

    fetch(`${API_BASE_URL}/sucursal/post-edit-sucursal?id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => {
        window.location.href = '/sucursales';
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };

  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.sucursal) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Nueva Sucursal</h1>
      </div>
      <div className="content">
      <form class="add-form" action="/" method="">
            <div class="form-control">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="iata">IATA</label>
                <input type="text" name="iata" id="iata" value={iata} onChange={(e) => setIata(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="latitud">Latitud</label>
                <input type="text" name="latitud" id="latitud" value={latitud} onChange={(e) => setLatitud(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="longitud">Longitud</label>
                <input type="text" name="longitud" id="longitud" value={longitud} onChange={(e) => setLongitud(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="estado">Estado</label>
                <input type="text" name="estado" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)}/>
            </div>

            <button class="btn" type="button" onClick={handlePost}>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default EditarSucursal;