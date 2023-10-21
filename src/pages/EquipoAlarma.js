import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import TitleTable from "../components/TitleTable";
import DataTable from "../components/DataTable";

const EquipoAlarma = () =>{
  const { data } = useFetch("http://172.16.14.127:8080/activos/get-all");
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'razon', 'userId','Actions'];
  const pages = {
    delete: '/delete-activo',
    view: '/ver-activo',
    edit: '/editar-activo'
}
  return (
    <div className="container-content">
      <div className="title">
        <h1>Equipo Alarma</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Activos alarma' page='/nuevo-activo-alarma' button='+ Nuevo'/>
        </div>
        <div>
        {data && data.activos && data.activos.length > 0 ? (
          <DataTable columns={columns} data={data.activos} pages={pages}/>
        ) : (
          <p>Cargando...</p>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default EquipoAlarma;