import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import { useLocation } from "react-router-dom";
import TitleTable from "../components/TitleTable";
import PageTitle from "../components/PageTitle";
import DataTable from "../components/DataTable";
import API_BASE_URL from "../config";

const Users = () => {
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  
  const { data } = useFetch(`${API_BASE_URL}/users/get-all`);
  // console.log(data.users);
  // console.log(data.proyecto);

  const columns = ['numeroEmpleado', 'nombreCompleto', 'correo','sucursal', 'tipoUsuario'];
  const pages = {
    delete: 'users/delete-user',
    view: '/ver-user',
    edit: '/editar-user'
  }
  if (!data) {
    return(
      <div className="container-content">
        <PageTitle title= "Usuarios" origen={origen}/>
        <div className="content">
        <p className="loading-label">Cargando...</p>
        </div>
      </div>
    ); 
  }

  if (data.users.length === 0) {
    return(
      <div className="container-content">
        <PageTitle title= "Usuarios" origen={origen}/>
        <div className="content">
        <p className="loading-label">Agrega un usuario!</p>
        </div>
      </div>
    ); 
  }
  return (
    <div className="container-content">
      <PageTitle title= "Usuarios" origen={origen}/>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Usuarios' page='/nuevo-user' button='+ Nuevo' />
        </div>
        <div>
          {data && data.users && data.users.length > 0 ? (
            <DataTable columns={columns} data={data.users} pages={pages} />
          ) : (
            <p className="loading-label">Cargando...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Users;