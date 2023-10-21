import React from "react";
import ColumnActions from "./ColumnActions";
import "../styles/titleTable.css";
import { NavLink } from "react-router-dom";

const TitleTable = ({ tableName, page, button }) => {
  return (
    <div className="title-table-container">
      <div className="table-title">
        <h3>{tableName}</h3>
      </div>
      <div className="new-link">
        <NavLink to={page} className="button">
          <span><h4>{button}</h4></span>
        </NavLink>
      </div>
    </div>
  );
};

export default TitleTable;