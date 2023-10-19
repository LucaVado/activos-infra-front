import React from "react";
import { useFetch } from "../fetch/useFetch";
import { useState } from "react";

const ColumnActions = ({ item }) => {

    const handleView = () => {
      console.log("Ver:", item);
    };
  
    const handleEdit = () => {
      console.log(`Editando el registro con ID: ${item.id}`);
    };
  
    const useDelete = () => {
        const { data } = useFetch(`http://172.16.14.127:8080/proyecto/delete-proyecto?id= ${item.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(`Eliminando el registro con ID: ${item.id}`);
    };
  
    return (
      <div className="table-cell">
        <button onClick={handleView}>
          <img src="/images/icons/icono-view.svg" alt="View" />
        </button>
        <button onClick={handleEdit}>
          <img src="/images/icons/icono-edit.svg" alt="Edit" />
        </button>
        <button onClick={useDelete}>
          <img src="/images/icons/icono-delete.svg" alt="Delete" />
        </button>
      </div>
    );
  };
  
  export default ColumnActions;