import React from "react";
import { useFetch } from "../fetch/useFetch";
import "../styles/dataTable.css";
import { NavLink } from "react-router-dom";

const ColumnActions = ({ item, pages }) => {

    const handleView = () => {
      console.log("Ver:", item);
    };
  
    const handleEdit = () => {
      console.log(`Editando el registro con ID: ${item.id}`);
    };
  
    const handleDelete = () => {
      fetch(`http://localhost:8080/proyecto/delete-proyecto?id=${item.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        <NavLink to={`/ver-proyecto`}><button>
          <img src="/images/icons/icono-view.svg" alt="View" />
        </button></NavLink>
        <NavLink to={`/editar-proyecto`}><button>
          <img src="/images/icons/icono-edit.svg" alt="View" />
        </button></NavLink>
        <button onClick={handleDelete}>
          <img src="/images/icons/icono-delete.svg" alt="Delete" />
        </button>
      </div>
    );
  };
  
  export default ColumnActions;