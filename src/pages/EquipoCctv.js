import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";

const EquipoCctv = () => {
  const { data } = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=CCTV`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'tipo',  'modelo', 'codigo', 'fechaEntrada', 'fechaSalida', 'estatus', 'razon'];
  const pages = {
    delete: 'activos/delete-activo',
    view: '/ver-activo',
    edit: '/editar-activo'
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Equipo CCTV</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos cctv' page='/nuevo-activo' button='+ Nuevo' />
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

export default EquipoCctv;