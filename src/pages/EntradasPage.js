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

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'razon', 'tipo', 'user'];
  const pages = {
    delete: 'activos/delete-activo',
    view: '/ver-activo',
    edit: '/editar-activo'
  }
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.activos) {
    return <p>No hay activos con entrada</p>;
  }
  return (
    <div className="container-content">
      <PageTitle title= "Activos con entrada" origin={origen}/>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos en transito' page='/nuevo-activo-cctv' button='+ Nuevo' />
        </div>
        <div>
          {data && data.activos && data.activos.length > 0 ? (
            <DataTable columns={columns} data={data.activos} pages={pages} />
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entradas;