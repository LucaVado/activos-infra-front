import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import DataTable from "../components/DataTable";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";

const Entradas = () => {
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

  const { data } = useFetch(`${API_BASE_URL}/activos/get-all-estatus?estatus=Entrada`);
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
        <PageTitle title= "Activos con entrada" origen={origen}/>
        <p className="loading-label">Cargando...</p>;
      </div>
    ); 
  }

  if (data.activos.keys()) {
    return(
        <div className="container-content">
            <PageTitle title="Activos con entrada" origen={origen}/>
            <div className="content">
            <div className="title-table">
                <TitleTable tableName='Activos' page='/nuevo-activo' button='+ Nuevo'/>
            </div>
            <p className="loading-label">Agrega un activo!</p>
            </div>
        </div>
    );
  }
    return (
        <div className="container-content">
            <PageTitle title="Activos con entrada" origen={origen}/>
            <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos' page='/nuevo-activo' button='+ Nuevo' />
        </div>
        <div>
          {data.activos.length > 0 ? (
            <DataTable columns={columns} data={data.activos} pages={pages} />
          ) : (
            <p className="loading-label">Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entradas;