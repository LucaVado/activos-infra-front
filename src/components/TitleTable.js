import React from "react";
import ColumnActions from "./ColumnActions";
import "../styles/dataTable.css";
import { NavLink } from "react-router-dom";

const TitleTable = ({ tableName, page }) => {

  return (
    <div>
        <div>
            <h3>{tableName}</h3>
        </div>
        <div>
            <NavLink to={page}>
            <div>Nuevo</div>
            </NavLink>
        </div>
    </div>
  );
};

export default TitleTable;