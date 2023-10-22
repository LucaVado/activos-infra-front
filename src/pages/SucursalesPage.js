import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import TitleTable from "../components/TitleTable";
import DataTable from "../components/DataTable";
import API_BASE_URL from "../config";

const Sucursales = () =>{
  const { data } = useFetch(`${API_BASE_URL}/sucursal/get-all`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id','iata', 'nombre', 'estado'];
  const pages = {
    delete: 'sucursal/delete-sucursal',
    view: '/ver-sucursal',
    edit: '/editar-sucursal'
}
  return (
    <div className="container-content">
      <div className="title">
        <h1>Sucursales</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Sucursales' page='/nueva-sucursal' button='+ Nuevo'/>
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