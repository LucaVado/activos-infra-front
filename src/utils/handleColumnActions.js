import React from "react";
import { Link } from "react-router-dom";

export const handleView = (data) => {
  console.log("Ver:", data);
  return <Link to={`/ver/${data}`} />;
};

export const handleEdit = (id) => {
  console.log(`Editando el registro con ID: ${id}`);
};

export const handleDelete = (id) => {
  console.log(`Eliminando el registro con ID: ${id}`);
};