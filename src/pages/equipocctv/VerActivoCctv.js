import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import API_BASE_URL from "../../config";

const VerActivoCctv = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/activos/get-activo?id=${id}`, {method: 'POST'});
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
        <h1>nombre: {data.activo.nombre}</h1>
        <h1>numeroSerie: {data.activo.numeroSerie}</h1>
        <h1>numeroActivo: {data.activo.numeroActivo}</h1>
        <h1>fechaEntrada: {data.activo.fechaEntrada}</h1>
        <h1>fechaSalida: {data.activo.fechaSalida}</h1>
        <h1>razon: {data.activo.razon}</h1>
        <h1>estatus: {data.activo.estatus}</h1>
      </div>
    </div>
  );
};

export default VerActivoCctv;