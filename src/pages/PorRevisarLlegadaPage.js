import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const PorRevisarLlegada = () => {
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

  const { data } = useFetch(`${API_BASE_URL}/activos/get-all-estatus?estatus=PorRecibir`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'tipo',  'modelo', 'codigo', 'fechaEntrada', 'fechaSalida', 'guia', 'estatus', 'razon'];
  const pages = {
    delete: 'activos/delete-activo',
    view: '/ver-activo',
    edit: '/editar-activo'
  }
  if (!data) {
    return(
      <div className="container-content">
        <PageTitle title= "Activos por revisar Llegada" origen={origen}/>
        <div className="content">
        <p className="loading-label">Cargando...</p>
        </div>
      </div>
    ); 
  }

  if (data.activos.length === 0) {
    return(
      <div className="container-content">
        <PageTitle title= "Activos por revisar llegada" origen={origen}/>
        <div className="content">
        <p className="loading-label">No hay activos pendientes por recibir!</p>
        </div>
      </div>
    ); 
  }
  return (
    <div className="container-content">
      <PageTitle title= "Activos por revisar llegada" origen={origen}/>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos en transito' page='/nuevo-activo' button='+ Nuevo' />
        </div>
        <div>
          {data && data.activos && data.activos.length > 0 ? (
            <DataTable columns={columns} data={data.activos} pages={pages} />
          ) : (
            <p className="loading-label">Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PorRevisarLlegada;