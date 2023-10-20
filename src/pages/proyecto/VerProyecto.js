import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";

const VerProyecto = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`http://172.16.14.127:8080/proyecto/get-proyecto?id=${id}`, {method: 'POST'});
  // console.log(data.proyecto.nombre);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.proyecto) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Ver Proyecto</h1>
      </div>
      <div className="content">
      <h1>{data.proyecto.id}</h1>
        <h1>{data.proyecto.nombre}</h1>
        <h1>{data.proyecto.fechaEntrada}</h1>
      </div>
    </div>
  );
};

export default VerProyecto;