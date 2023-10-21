import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/content.css";

const EditarActivoCctv = () =>{

  const [nombre, setNombre] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [userId, setUserId] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`http://172.16.14.127:8080/proyecto/get-proyecto?id=${id}`, {method: 'POST'});

  // nombre = setNombre(data.proyecto.nombre);
  // fechaEntrada = setFechaEntrada(data.proyecto.fechaEntrada);
  // fechaSalida = setFechaSalida(data.proyecto.fechaSalida);

  useEffect(() => {
    if (data && data.proyecto) {
      setNombre(data.proyecto.nombre);
      setFechaEntrada(data.proyecto.fechaEntrada.substring(0, 10));
      setFechaSalida(data.proyecto.fechaEntrada.substring(0, 10));
    }
  }, [data]);

  const handlePost = () => {
    const dataPost = { proyecto:{id:parseInt(id),nombre, fechaEntrada, fechaSalida, userId} };
    // console.log('nombre:', nombre);
    // console.log('fechaEntrada:', fechaEntrada);
    // console.log('fechaSalida:', fechaSalida);
    // console.log('userId:', userId);
    // console.log(dataPost);
    fetch(`http://172.16.14.127:8080/proyecto/post-edit-proyecto?id=${id}`, {
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
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaEntrada">Fecha de Entrada</label>
                <input type="date" name="fechaEntrada" id="fechaEntrada" value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaSalida">Fecha de Salida</label>
                <input type="date" name="fechaSalida" id="fechaSalida" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}/>
            </div>

            <button class="btn" type="button" onClick={handlePost}>Editar</button>
        </form>
      </div>
    </div>
  );
};

export default EditarActivoCctv;