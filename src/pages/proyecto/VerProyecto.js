import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { NavLink } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import TitleTable from "../../components/TitleTable";
import DataTable from "../../components/DataTable";
import API_BASE_URL from "../../config";

const VerProyecto = () => {
  // const { id } = useParams();
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-proyecto?id=${id}`, { method: 'POST' });
  const activosData = useFetch(`${API_BASE_URL}/activos/get-all-proyecto?id=${id}`);
  const columns = ['id', 'nombre', 'tipo',  'modelo', 'codigo', 'fechaEntrada', 'fechaSalida','numeroSerie', 'estatus', 'razon'];
  const pages = {
    delete: 'activos/delete-activo',
    view: '/ver-activo-cctv',
    edit: '/editar-activo-cctv'
  }

  const handleGenerarReporte = () => {
    fetch(`${API_BASE_URL}/activos/generar-reporte-activos-excel?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al generar el reporte');
        }
        return response.blob();
      })
      .then(blob => {
        // Crear un objeto URL para el blob
        const url = window.URL.createObjectURL(blob);
        
        // Crear un enlace temporal y hacer clic en él para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = `reporte_activos_${data.proyecto.nombre}.xlsx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Liberar el objeto URL
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error al generar el reporte:', error.message);
      });
  }

  if (!data) {
    return (
      <div className="container-content">
        <div className="title">
          <h1>Proyecto</h1>
        </div>
        <div className="content">
          <p> Cargando</p>
        </div>
      </div>
    );
  }

  if (!data.proyecto) {
    return (
      <div className="container-content">
        <div className="title">
          <h1>Proyecto</h1>
        </div>
        <div className="content">
          <p> Proyecto no encontrado</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container-content">
    
      <PageTitle title= {`Proyecto ${data.proyecto.nombre}`} origin={origen}/>

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
            <button class="button-proyect" type="button" onClick={handleGenerarReporte}>Generar Excel</button>
          </div>
          <div>
            <button class="button-proyect" type="button">Enviar a destino</button>
            {/* <button class="button-proyect" onClick={ } type="button">Revisar llegada</button> */}
            <div class="button-proyect" >
              <NavLink to='/revisar-llegada' className="button">
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                  <h4 style={{ color: "#FFF", fontFamily: 'Roboto Flex' }}>Revisar Llegada</h4>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerProyecto;