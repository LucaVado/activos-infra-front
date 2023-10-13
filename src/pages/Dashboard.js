import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";

const Dashboard = () =>{

  const { data } = useFetch('http://192.168.1.67:8080/activos/get-all');
  console.log(data);

  return (
    <div className="container-content">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <h1>contenido</h1>
      </div>
    </div>
  );
};

export default Dashboard;