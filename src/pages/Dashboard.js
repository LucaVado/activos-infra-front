import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable.js";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";

const Dashboard = () => {

  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'folio', 'guia', 'razon', 'userId'];
  const pages = {
    delete: "proyecto/delete-proyecto",
    view: '/ver-proyecto',
    edit: '/editar-proyecto'
  }
  
  return (
    <div className="container-content">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Proyectos recientes' page='/Proyectos' button='Ir a proyectos' />
        </div>
        <div>
          {
          data && data.proyecto && data.proyecto.length > 0 ? (
            <DataTable columns={columns} data={data.proyecto} pages={pages} />
          ) : (
            <p>Cargando...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;