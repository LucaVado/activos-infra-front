import React from "react";
import "../../styles/content.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import PageTitle from "../../components/PageTitle";
import API_BASE_URL from "../../config";

const VerSucursal = () =>{
  // const { id } = useParams();
  const location = useLocation();
  const origen = location.state ? location.state.origen : "/";
  
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`${API_BASE_URL}/sucursal/get-sucursal?id=${id}`, {method: 'POST'});
  // console.log(data.proyecto.nombre);
  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.sucursal) {
    return <p>Sucursal no encontrada</p>;
  }
  return (
    <div className="container-content">

      <PageTitle title={`${data.sucursal.nombre}`} origen={origen} />

      <div className="content">
        <div className="add-form">
          <div class="form-control">
            <label className="VerActivolabel" for="nombre">Nombre</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.sucursal.nombre}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="iata">IATA</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.sucursal.iata}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="estado">Estado</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.sucursal.estado}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="latitud">Latitud</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.sucursal.latitud}</h4>
            </div>
          </div>
          <div class="form-control">
            <label className="VerActivolabel" for="longitud">Longitud</label>
            <div className="hContainer">
              {/* <h3>nombre:</h3> */}
              <h4>{data.sucursal.longitud}</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VerSucursal;