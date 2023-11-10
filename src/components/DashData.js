import React from "react";
import "../styles/content.css";
import { NavLink } from "react-router-dom";
import API_BASE_URL from "../config";

const DashData = ({ dashData }) => {

  return (
    <div className="dashboard">
          {dashData.map((item, index) => (
            <div key={index} className="dashboard-item">
              <h1>{item.titulo}</h1>
              <div className="conteo">{item.cantidad}</div>
            </div>
          ))}
        </div>
  );
};

export default DashData;