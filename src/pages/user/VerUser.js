import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import PageTitle from "../../components/PageTitle";
import API_BASE_URL from "../../config";

const VerUser = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/users/get-user?id=${id}`, {method: 'POST'});
  // console.log(data.user);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.user) {
    return <p>Activo no encontrado</p>;
  }
  if(data) console.log(data);
  return (
    <div className="container-content">

      <PageTitle title={`Usuario ${data.user.nombre}`} origen={origen} />

      <div className="content">
        <div className="add-form">
          <div class="form-control">
            <label className="VerActivolabel" for="numeroEmpleado">Numero de Empleado</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.numeroEmpleado}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="nombreCompleto">Nombre Completo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.nombre}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="apellidoPaterno">Apellido paterno</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.apellidoPaterno}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="apellidoMaterno">Apellido materno</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.apellidoMaterno}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="correo">Correo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.correo}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="correo">Tipo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.correo}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="sucursal">Sucursal</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
               <h4>{data.user.sucursal.nombre}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="departamento">Departamento</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.departamento.nombre}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="tipoUsuario">Tipo de usuario</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.user.tipoUsuario}</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VerUser;