import React from "react";
import "../../styles/inputForms.css";
import "../../styles/content.css";
import { useState } from "react";
import API_BASE_URL from "../../config";
import { useFetch } from "../../fetch/useFetch";
import { useEffect } from "react";
import { showNotification } from "../../utils/notification";

const NuevoUser = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [numeroEmpleado, setNumeroEmpleado] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("Paquete2023.");
  const [tipoUsuario, setTipoUsuario] = useState("Usuario");
  const [sucursal, setSucursal] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [departamentos, setDepartamentos] = useState([{departamento: 'Selecciona un departamento'}]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/departamento/get-all`)
      .then((response) => response.json())
      .then((data) => {
        setDepartamentos(data);
      })
      .catch((error) => {
        console.error("Hubo un problema al obtener los departamentos:", error);
      });
  }, []);

  const handlePost = () => {
    const data = { content: { nombre, apellidoPaterno, apellidoMaterno, numeroEmpleado, correo, password, tipoUsuario, sucursal, departamento } };
    // console.log('nombre:', nombre);
    // console.log('fechaEntrada:', fechaEntrada);
    // console.log('fechaSalida:', fechaSalida);
    // console.log('userId:', userId);
    // var departamentos = [];
    console.log(data);
    fetch(`${API_BASE_URL}/users/post-users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      // .then((response) => {
      //   window.location.href = '/users';
      // })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            showNotification(data.message, 'success');
            window.location.href = '/users';
          });
        } else {
          response.json().then((data) => {
            showNotification(data.message, 'error');
          });
        }
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };
  return (
    <div className="container-content">
      <div className="title">
        <h1>Nuevo Usuario</h1>
      </div>
      <div className="content">
        <form class="add-form" action="/" method="">
          <div class="form-control">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="apellidoPaterno">Apellido Paterno</label>
            <input type="text" name="apellidoPaterno" id="apellidoPaterno" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="apellidoMaterno">Apellido Materno</label>
            <input type="text" name="apellidoMaterno" id="apellidoMaterno" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="numeroEmpleado">Numero de empleado</label>
            <input type="text" name="numeroEmpleado" id="numeroEmpleado" value={numeroEmpleado} onChange={(e) => setNumeroEmpleado(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="sucursal">Sucursal</label>
            <input type="text" name="sucursal" id="sucursal" value={sucursal} onChange={(e) => setSucursal(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="departamento">Departamento</label>
            <select value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
              {console.log('departamentos: ', departamentos)}
              {<option value='Selecciona un departamento' selected>
                Selecciona un departamento
                  </option>}
              {Array.isArray(departamentos.departamento) &&
                departamentos.departamento.map((depa, index) => (
                  <option key={index} value={depa.nombre}>
                    {depa.nombre}
                  </option>
                ))}
            </select>
          </div>
          <div class="form-control">
            <label for="correo">Correo</label>
            <input type="text" name="correo" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="password">password</label>
            <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div class="form-control">
            <label for="tipoUsuario">Tipo</label>
            <select name="tipoUsuario" id="tipoUsuario" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
              <option value="Administrador">Administrador</option>
              <option value="Usuario" selected>Usuario</option>
            </select>
          </div>

          <div className="form-button"><button class="btn" type="button" onClick={handlePost}>Crear</button></div>
        </form>
      </div>
    </div>
  );
};

export default NuevoUser;