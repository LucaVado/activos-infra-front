import React from "react";
import { useAuth } from "./AuthContext";

import '../App.css'

const Navbar = () => {
    const {logout} = useAuth();
    return (
        <div className="navbar">
            <div className="logo-navbar"><img src="/images/icons/paquetexpress-logo-navbar.svg"></img></div>
            <div className="logout-navbar">
                <button className="logout-button" onClick={logout}>
                    <img className="logout-img" src="/images/icons/icono-logout2.svg" title="Cerrar Sesión" alt="View" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;