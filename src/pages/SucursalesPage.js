import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import TitleTable from "../components/TitleTable";
import DataTable from "../components/DataTable";

const Sucursales = () =>{
  const { data } = useFetch("http://172.16.14.127:8080/sucursal/get-all");
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id','iata', 'nombre', 'estado','Actions'];
  const pages = {
    delete: '/delete-activo',
    view: '/ver-activo',
    edit: '/editar-activo'
}
  return (
    <div className="container-content">
      <div className="title">
        <h1>Sucursales</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos alarma' page='/nuevo-activo-alarma' button='+ Nuevo'/>
        </div>
        <div>
        {data && data.sucursal && data.sucursal.length > 0 ? (
          <DataTable columns={columns} data={data.sucursal} pages={pages}/>
        ) : (
          <p>Cargando...</p>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Sucursales;