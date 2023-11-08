import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import TitleTable from "../../components/TitleTable";
import DataTable from "../../components/DataTable";
import API_BASE_URL from "../../config";

const VerProyecto = () => {
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-proyecto?id=${id}`, { method: 'POST' });
  const activosData = useFetch(`${API_BASE_URL}/activos/get-all-proyecto?id=${id}`);
  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'razon', 'tipo', 'user'];
  const pages = {
    delete: 'activos/delete-activo',
    view: '/ver-activo-cctv',
    edit: '/editar-activo-cctv'
  }

  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.proyecto) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Proyecto {data.proyecto.nombre}</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName={`Activos ${data.proyecto.nombre}`} page={`/nuevo-activo?dataProyecto=${encodeURIComponent(JSON.stringify(data.proyecto))}`} button='+ Agregar Activo' />
          {/* dataProyecto=${encodeURIComponent(JSON.stringify(data.proyecto)) 
            proyectoId=${id}&nombre=${data.proyecto.nombre}*/}
        </div>
        <div>
          {activosData.data && activosData.data.activos && activosData.data.activos.length > 0 ? (
            <DataTable columns={columns} data={activosData.data.activos} pages={pages} />
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="button-container">
          <div>
            <button class="button-proyect" type="button">Generar Excel</button>
          </div>
          <div>
            <button class="button-proyect" type="button">Enviar a destino</button>
            <button class="button-proyect" type="button">Revisar llegada</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerProyecto;