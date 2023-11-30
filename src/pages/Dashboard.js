import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import PageTitle from "../components/PageTitle.js";
import DashData from "../components/DashData";
import DataTable from "../components/DataTable.js";
import TitleTable from "../components/TitleTable";
import API_BASE_URL from "../config";
import { useLocation } from "react-router-dom";
import { useAuth } from "../components/AuthContext.js";

const Dashboard = () => {

  // const [cantidadProyectosPorConfigurar, setCantidadProyectosPorConfigurar] = useState("...");
  // const [cantidadEntransito, setCantidadEntransito] = useState("...");
  // const [cantidadProyectosEnTransito, setCantidadProyectosEnTransito] = useState("...");
  // const [cantidadEquipoCCTV, setCantidadEquipoCCTV] = useState("...");
  // const [cantidadEquipoAlarma, setCantidadEquipoAlarma] = useState("...");
  // const [cantidadTotalActivos, setCantidadTotalActivos] = useState("...");
  var {user} = useAuth();
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  var nombreBienvenida = "";

  console.log(location);
  console.log(user);

  const { data } = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  const dataProyectosPorConfigurar = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  const dataEntransito  = useFetch(`${API_BASE_URL}/activos/get-all-estatus?estatus=Entransito`);
  const dataProyectosEnTransito = useFetch(`${API_BASE_URL}/proyecto/get-all`);
  const dataEquipoCCTV = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=CCTV`);
  const dataEquipoAlarma = useFetch(`${API_BASE_URL}/activos/get-all-tipo?tipo=Alarma`);
  const dataTotalActivos = useFetch(`${API_BASE_URL}/activos/get-all`);

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
  console.log(dataProyectosPorConfigurar.data);
  if(dataProyectosPorConfigurar.data && dataProyectosPorConfigurar.data.proyecto && dataProyectosPorConfigurar.data.proyecto.length){
    dashData[0].cantidad = dataProyectosPorConfigurar.data.proyecto.length;
  }
  if(dataEntransito.data && dataEntransito.data.activos && dataEntransito.data.activos.length){
    dashData[1].cantidad = dataEntransito.data.proyecto.length;
  }
  if(dataProyectosEnTransito.data && dataProyectosEnTransito.data.proyecto && dataProyectosEnTransito.data.proyecto.length){
    dashData[2].cantidad = dataProyectosEnTransito.data.proyecto.length;
  }
  if(dataEquipoCCTV.data && dataEquipoCCTV.data.activos && dataEquipoCCTV.data.activos.length){
    dashData[3].cantidad = dataEquipoCCTV.data.activos.length;
  }
  if(dataEquipoAlarma.data && dataEquipoAlarma.data.activos && dataEquipoAlarma.data.activos.length){
    dashData[4].cantidad = dataEquipoAlarma.data.activos.length;
  }
  if(dataTotalActivos.data && dataTotalActivos.data.activos && dataTotalActivos.data.activos.length){
    dashData[5].cantidad = dataTotalActivos.data.activos.length;
  }
  if(user && user.nombre){
    nombreBienvenida = user.nombre;
  }

  return (
    <div className="container-content">
      <PageTitle title= {`Bienvenido ${nombreBienvenida}`} origen={origen}/>
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