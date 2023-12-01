import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import TitleTable from "../components/TitleTable";
import PageTitle from "../components/PageTitle";
import DataTable from "../components/DataTable";
import { useLocation } from "react-router-dom";
import API_BASE_URL from "../config";

const Sucursales = () =>{
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

  const { data } = useFetch(`${API_BASE_URL}/sucursal/get-all`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id','iata', 'nombre', 'estado', 'latitud', 'longitud'];
  const pages = {
    delete: 'sucursal/delete-sucursal',
    view: '/ver-sucursal',
    edit: '/editar-sucursal'
}
if (!data) {
  return(
    <div className="container-content">
      <PageTitle title= "Sucursales" origen={origen}/>
      <div className="content">
      <p className="loading-label">Cargando...</p>
      </div>
    </div>
  ); 
}

if (data.sucursal.length === 0) {
  return(
    <div className="container-content">
      <PageTitle title= "Sucursales" origen={origen}/>
      <div className="content">
      <p className="loading-label">Agrega una sucursal</p>
      </div>
    </div>
  ); 
}
  return (
    <div className="container-content">
      <PageTitle title= "Sucursales" origen={origen}/>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Sucursales' page='/nueva-sucursal' button='+ Nuevo'/>
        </div>
        <div>
        {data && data.sucursal && data.sucursal.length > 0 ? (
          <DataTable columns={columns} data={data.sucursal} pages={pages}/>
        ) : (
          <p className="loading-label">Cargando...</p>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Sucursales;