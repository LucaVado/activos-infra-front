import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable";
import TitleTable from "../components/TitleTable";

const EquipoCctv = () =>{
  const { data } = useFetch("http://172.16.14.127:8080/activos/get-all");
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'razon', 'userId','Actions'];
  const pages = {
    delete: '/delete-activo',
    view: '/ver-activo-cctv',
    edit: '/editar-activo-cctv'
}
  return (
    <div className="container-content">
      <div className="title">
        <h1>Equipo CCTV</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos cctv' page='/nuevo-activo-cctv' button='+ Nuevo'/>
        </div>
        <div>
        {data && data.activos && data.activos.length > 0 ? (
          <DataTable columns={columns} data={data.activos} pages={pages}/>
        ) : (
          <p>Cargando...</p>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default EquipoCctv;