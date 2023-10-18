import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable";

const EquipoCctv = () =>{
  const { data } = useFetch("http://172.16.14.127:8080/activos/get-all");
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'folio', 'guia', 'razon', 'createdAt', 'updatedAt', 'userId'];

  return (
    <div className="container-content">
      <div className="title">
        <h1>Equipo CCTV</h1>
      </div>
      <div className="content">
      {data && data.activos && data.activos.length > 0 ? (
          <DataTable columns={columns} data={data.activos} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default EquipoCctv;