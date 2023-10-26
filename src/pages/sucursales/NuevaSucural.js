import React from "react";
import "../../styles/inputForms.css";
import "../../styles/content.css";
import { useState } from "react";
import API_BASE_URL from "../../config";

const NuevaSucursal = () =>{
    const [nombre, setNombre] = useState("");
    const [iata, setIata] = useState("");
    const [latitud, setLatitud] = useState("");
    const [longitud, setLongitud] = useState("");
    const [estado, setEstado] = useState("");
    const [userId, setUserId] = useState(1);

    const handlePost = () => {
        const data = { content:{nombre, iata, latitud,longitud, estado, userId} };

        fetch(`${API_BASE_URL}/sucursal/post-sucursal`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            window.location.href = '/sucursales';
          })
          .catch((error) => {
            console.error("Hubo un problema al eliminar el registro:", error);
          });
    };
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

            <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Crear</button></div>
        </form>
      </div>
    </div>
  );
};

export default NuevaSucursal;