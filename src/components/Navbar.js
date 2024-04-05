import React from "react";
import swal from 'sweetalert';
import { useAuth } from "./AuthContext";

import '../App.css'

const Navbar = () => {
    const {logout} = useAuth();

    const handleLogout = () =>{
        swal({
            title: "¿Seguro que quieres cerrar sesion?",
            text:"La sesion se cerrará",
            icon: 'warning',
            buttons: ['Cancelar', 'Aceptar']
          }).then(respuesta =>{
            if(respuesta){
              logout();
            }
          })
    }
    return (
        <div className="navbar">

            <div className="logo-navbar"><img src="/images/icons/paquetexpress-logo-navbar.svg"></img></div>
            <div className="logout-navbar">
                <button className="logout-button" onClick={handleLogout}>
                    <img className="logout-img" src="/images/icons/icono-logout2.svg" title="Cerrar Sesión" alt="View" />
                </button>
            </div>

        </div>
    );
}

export default Navbar;