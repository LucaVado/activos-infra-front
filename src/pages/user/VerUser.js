import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import API_BASE_URL from "../../config";

const VerUser = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/users/get-user?id=${id}`, {method: 'POST'});
//   console.log(data.user);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.user) {
    return <p>Activo no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Usuario {data.user.nombre}</h1>
      </div>
      <div className="content">
      <h1>{data.user.id}</h1>
        <h1>nombre: {data.user.nombre}</h1>
        <h1>Apellidos: {data.user.apellidoPaterno} {data.user.apellidoMaterno}</h1>
        <h1>correo: {data.user.correo}</h1>
        <h1>numero empleado: {data.user.numeroEmpleado}</h1>
        <h1>tipo: {data.user.tipoUsuario}</h1>
      </div>
    </div>
  );
};

export default VerUser;