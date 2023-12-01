import React from "react";
import "../styles/dataTable.css";
import { NavLink } from "react-router-dom";
import API_BASE_URL from "../config";
import swal from 'sweetalert';
import { showNotification } from "../utils/notification";

const ColumnActions = ({ item, pages }) => {

  const mostrarAlerta = () =>{
    swal({
      title: "¿Seguro que quieres eliminar el registro?",
      text:"Este campo se eliminará permanentemente",
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar']
    }).then(respuesta =>{
      if(respuesta){
        handleDelete();
        swal({
          title: "Registro Eliminado",
          icon: 'success',
          timer: 200
        })
      }
    })
  }
  const handleDelete = () => {
    fetch(`${API_BASE_URL}/${pages.delete}?id=${item.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        console.log(`Eliminando el registro con ID: ${item.id}`);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };

  return (
    <div className="table-cell">
      <NavLink to={`${pages.view}?id=${item.id}`}>
        <button className="actions-button">
          <img src="/images/icons/icono-view.svg" alt="View" />
        </button></NavLink>
      <NavLink to={`${pages.edit}?id=${item.id}`}>
        <button className="actions-button">
          <img src="/images/icons/icono-edit.svg" alt="View" />
        </button></NavLink>
      <button className="actions-button" onClick={mostrarAlerta}>
        <img src="/images/icons/icono-delete.svg" alt="Delete" />
      </button>
    </div>
  );
};

export default ColumnActions;