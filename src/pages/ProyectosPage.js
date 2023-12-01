import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle.js";
import DataTable from "../components/DataTable.js";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";

const Proyectos = () =>{
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'guia', 'razon', 'destino'];
  const pages = {
    delete: 'proyecto/delete-proyecto',
    view: '/ver-proyecto',
    edit: '/editar-proyecto'
}
if (!data) {
  return(
    <div className="container-content">
      <PageTitle title= "Proyectos" origen={origen}/>
      <div className="content">
      <p className="loading-label">Cargando...</p>
      </div>
    </div>
  ); 
}

if (data.proyecto.length === 0) {
  return(
    <div className="container-content">
      <PageTitle title= "Proyectos" origen={origen}/>
      <div className="content">
      <p className="loading-label">Agrega un proyecto!</p>
      </div>
    </div>
  ); 
}
  return (
    <div className="container-content">
        <PageTitle title= "Proyectos" origen={origen}/>

      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Proyectos' page='/nuevo-proyecto' button='+ Nuevo'/>
        </div>
        <div>
        {data && data.proyecto && data.proyecto.length > 0 ? (
          <DataTable columns={columns} data={data.proyecto} pages={pages}/>
        ) : (
          <p className="loading-label">Cargando...</p>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default Proyectos;