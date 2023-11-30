import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import PageTitle from "../../components/PageTitle";
import API_BASE_URL from "../../config";

const VerActivo = () => {
  // const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const origen = location.state ? location.state.origen : "/";

  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/activos/get-activo?id=${id}`, { method: 'POST' });
  // console.log(data.proyecto.nombre);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.activo) {
    return <p>Activo no encontrado</p>;
  }
  return (
    <div className="container-content">

      <PageTitle title={`Activo ${data.activo.nombre}`} origin={origen} />

      <div className="content">
        <div className="add-form">
          <div class="form-control">
            <label className="VerActivolabel" for="nombre">Nombre</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.nombre}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="modelo">Modelo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.modelo}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="numeroSerie">Número de serie</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.numeroSerie}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="tipo">Tipo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.tipo}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="codigo">Codigo</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.codigo}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="estatus">Estatus</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.estatus}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="razon">Razón</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.razon}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="proyecto">Proyecto</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.proyecto}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="fechaEntrada">Fecha de Entrada</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.fechaEntrada}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="fechaSalida">Fecha de Salida</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.fechaSalida}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="user">Creado por</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.activo.user}</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VerActivo;