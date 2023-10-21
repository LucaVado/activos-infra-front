import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";

const VerActivoCctv = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`http://172.16.14.127:8080/activos/get-activo?id=${id}`, {method: 'POST'});
  // console.log(data.proyecto.nombre);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.activo) {
    return <p>Activo no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Activo {data.activo.nombre}</h1>
      </div>
      <div className="content">
      <h1>{data.activo.id}</h1>
        <h1>{data.activo.nombre}</h1>
        <h1>{data.activo.fechaEntrada}</h1>
      </div>
    </div>
  );
};

export default VerActivoCctv;