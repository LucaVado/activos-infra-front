
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import EquipoCctv from "./pages/EquipoCctv";
import EquipoAlarma from "./pages/EquipoAlarma";
import EnTransitoPage from "./pages/EnTransitoPage";
import EntradasPage from "./pages/EntradasPage";
import PorRevisarLlegadaPage from "./pages/PorRevisarLlegadaPage";
import ProyectosPage from "./pages/ProyectosPage";
import SucursalesPage from "./pages/SucursalesPage";
import UsersPage from "./pages/UsersPage";
import Navbar from "./components/Navbar";
import NuevoProyecto from "./pages/proyecto/NuevoProyecto";
import VerProyecto from "./pages/proyecto/VerProyecto";
import EditarProyecto from "./pages/proyecto/EditarProyecto";
import VerActivoCctv from "./pages/equipocctv/VerActivoCctv";
import NuevoActivoCctv from "./pages/equipocctv/NuevoActivoCctv";
import EditarActivoCctv from "./pages/equipocctv/EditarActivoCctv";
import VerActivoAlarma from "./pages/equipoAlarma/VerActivoAlarma";
import NuevoActivoAlarma from './pages/equipoAlarma/NuevoActivoAlarma';
import EditarActivoAlarma from './pages/equipoAlarma/EditarActivoAlarma';
import VerSucursal from "./pages/sucursales/VerSucursal";
import NuevaSucursal from "./pages/sucursales/NuevaSucural";
import EditarSucursal from "./pages/sucursales/EditarSucursal";
import VerUser from "./pages/user/VerUser";
import NuevoUser from "./pages/user/NuevoUser";
import EditarUser from "./pages/user/EditarUser";
import NuevoModeloActivo from "./pages/modeloActivo/NuevoModelo";
import NuevoActivo from "./pages/activo/NuevoActivo";
import EditarActivo from "./pages/activo/EditarActivo";
import VerActivo from "./pages/activo/VerActivo";

const App = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario ha iniciado sesión

  // Si el usuario ha iniciado sesión, muestra el panel de control; de lo contrario, muestra el formulario de inicio de sesión
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/equipoCctv" element={<EquipoCctv />} />
              <Route path="/equipoAlarma" element={<EquipoAlarma/>} />
              <Route path="/transito" element={<EnTransitoPage/>} />
              <Route path="/entradas" element={<EntradasPage/>} />
              <Route path="/porRevisarLlegada" element={<PorRevisarLlegadaPage/>} />
              <Route path="/Proyectos" element={<ProyectosPage/>} />
              <Route path="/Sucursales" element={<SucursalesPage/>} />
              <Route path="/users" element={<UsersPage/>} />
              <Route path="/nuevo-proyecto" element={<NuevoProyecto/>} />
              <Route path="/ver-proyecto" element={<VerProyecto/>} />
              <Route path="/editar-proyecto" element={<EditarProyecto/>} />
              <Route path="/nuevo-activo" element={<NuevoActivo/>} />
              <Route path="/editar-activo" element={<EditarActivo/>} />
               <Route path="/ver-activo" element={<VerActivo/>} />
               <Route path="/ver-activo-cctv" element={<VerActivoCctv/>} />
              {/*<Route path="/nuevo-activo-cctv" element={<NuevoActivoCctv/>} />
              <Route path="/editar-activo-cctv" element={<EditarActivoCctv/>} />
              <Route path="/ver-activo-alarma" element={<VerActivoAlarma/>} />
              <Route path="/nuevo-activo-alarma" element={<NuevoActivoAlarma/>} />
              <Route path="/editar-activo-alarma" element={<EditarActivoAlarma/>} /> */}
              <Route path="/ver-sucursal" element={<VerSucursal/>} />
              <Route path="/nueva-sucursal" element={<NuevaSucursal/>} />
              <Route path="/editar-sucursal" element={<EditarSucursal/>} />
              <Route path="/ver-user" element={<VerUser/>} />
              <Route path="/nuevo-user" element={<NuevoUser/>} />
              <Route path="/editar-user" element={<EditarUser/>} />
              <Route path="/nuevo-modelo" element={<NuevoModeloActivo/>} />
            </Routes>
          </Sidebar>        
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;
