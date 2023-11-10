import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DashData from "../components/DashData";
import DataTable from "../components/DataTable.js";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";

const Dashboard = () => {

  // const [cantidadProyectosPorConfigurar, setCantidadProyectosPorConfigurar] = useState("...");
  // const [cantidadEntransito, setCantidadEntransito] = useState("...");
  // const [cantidadProyectosEnTransito, setCantidadProyectosEnTransito] = useState("...");
  // const [cantidadEquipoCCTV, setCantidadEquipoCCTV] = useState("...");
  // const [cantidadEquipoAlarma, setCantidadEquipoAlarma] = useState("...");
  // const [cantidadTotalActivos, setCantidadTotalActivos] = useState("...");

  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  const { dataProyectosPorConfigurar } = useFetch(`${API_BASE_URL}/proyecto/get-all`, {options: {method:'no-cors'}});
  const { dataEntransito } = useFetch(`${API_BASE_URL}/activos/get-all-estatus?estatus=Entransito`);
  const { dataProyectosEnTransito } = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  const { dataEquipoCCTV } = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=CCTV`);
  const { dataEquipoAlarma } = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=Alarma`);
  const { dataTotalActivos } = useFetch(`${API_BASE_URL}/activos/get-all`);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'guia', 'razon', 'destino'];
  const pages = {
    delete: "proyecto/delete-proyecto",
    view: '/ver-proyecto',
    edit: '/editar-proyecto'
  }

  const dashData = [
    {
      titulo: "Proyectos por configurar",
      cantidad: 0
    },
    {
      titulo: "Equipos en tránsito",
      cantidad: 0
    },
    {
      titulo: "Proyectos en tránsito",
      cantidad: 0
    }, 
    {
      titulo: "Equipo CCTV",
      cantidad: 0
    }, 
    {
      titulo: "Equipos de Alarma",
      cantidad: 0
    }, 
    {
      titulo: "Total de activos",
      cantidad: 0
    }
  ];

  if(dataProyectosPorConfigurar && dataProyectosPorConfigurar.proyecto && dataProyectosPorConfigurar.proyecto.length){
    dashData[0].cantidad = data.proyecto.length;
  }
  if(dataEntransito && dataEntransito.activos && dataEntransito.activos.length){
    dashData[1].cantidad = dataEntransito.proyecto.length;
  }
  if(dataProyectosEnTransito && dataProyectosEnTransito.proyecto && dataProyectosEnTransito.proyecto.length){
    dashData[2].cantidad = dataProyectosEnTransito.proyecto.length;
  }
  if(dataEquipoCCTV && dataEquipoCCTV.activos && dataEquipoCCTV.activos.length){
    dashData[3].cantidad = dataEquipoCCTV.activos.length;
  }
  if(dataEquipoAlarma && dataEquipoAlarma.activos && dataEquipoAlarma.activos.length){
    dashData[4].cantidad = dataEntransito.activos.length;
  }
  if(dataTotalActivos && dataTotalActivos.activos && dataTotalActivos.activos.length){
    dashData[5].cantidad = dataEntransito.activos.length;
  }

  // if(data.proyecto){
  //   dashData[0].cantidad= data.proyecto.length;
  // }

  return (
    <div className="container-content">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
      <DashData dashData={dashData} />
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