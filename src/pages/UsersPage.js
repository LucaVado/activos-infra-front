import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import TitleTable from "../components/TitleTable";
import DataTable from "../components/DataTable";
import API_BASE_URL from "../config";

const Users = () => {
  const { data } = useFetch(`${API_BASE_URL}/users/get-all`);
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'tipoUsuario', 'correo'];
  const pages = {
    delete: 'users/delete-user',
    view: '/ver-user',
    edit: '/editar-user'
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Usuarios</h1>
      </div>
      <div className="content">
        <div className="title-table">
          <TitleTable tableName='Usuarios' page='/nuevo-user' button='+ Nuevo' />
        </div>
        <div>
          {data && data.users && data.users.length > 0 ? (
            <DataTable columns={columns} data={data.users} pages={pages} />
          ) : (
            <p>Cargando...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Users;