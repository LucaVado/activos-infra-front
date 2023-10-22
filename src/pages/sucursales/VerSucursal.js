import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import API_BASE_URL from "../../config";

const VerSucursal = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/sucursal/get-sucursal?id=${id}`, {method: 'POST'});
  // console.log(data.proyecto.nombre);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.sucursal) {
    return <p>Sucursal no encontrada</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Sucursal {data.sucursal.nombre}</h1>
      </div>
      <div className="content">
      <h1>{data.sucursal.id}</h1>
        <h1>nombre: {data.sucursal.nombre}</h1>
        <h1>numeroSerie: {data.sucursal.iata}</h1>
        <h1>numeroActivo: {data.sucursal.estado}</h1>
      </div>
    </div>
  );
};

export default VerSucursal;