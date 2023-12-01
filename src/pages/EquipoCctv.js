import React from "react";
import "../styles/content.css";
import { Link, useLocation } from "react-router-dom";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";
import PageTitle from "../components/PageTitle";

const EquipoCctv = () => {
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  console.log('location', location.state);
  console.log('origen', origen);
  const { data } = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=CCTV`);
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
        <PageTitle title= "Equipo CCTV" origen={origen}/>
        <div className="content">
        <p className="loading-label">Cargando...</p>
        </div>
      </div>
    ); 
  }

  if (data.activos.length === 0) {
    return(
      <div className="container-content">
        <PageTitle title= "Equipo CCTV" origen={origen}/>
        <div className="content">
        <p className="loading-label">No hay activos de tipo CCTV!</p>
        </div>
      </div>
    ); 
  }

  return (
    <div className="container-content">
      {/* <div className="title">
        <h1>Equipo CCTV</h1>
      </div> */}
      <PageTitle title= "Equipo CCTV" origen={origen}/>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos cctv' page='/nuevo-activo' button='+ Nuevo' />
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

export default EquipoCctv;