import React from "react";
import { Link } from "react-router-dom";
import '../styles/content.css';

const PageTitle = ({ title, origen }) => {
  return (
    <div className="page-title-container">
      <div className="back-button-container">
        <Link to={origen} className="back-button">
          <span><img src="/images/icons/icono-regresar.svg" alt="regresar"></img></span>
        </Link>
      </div>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
