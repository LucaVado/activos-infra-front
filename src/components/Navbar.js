import React, {useState} from "react";
import swal from 'sweetalert';
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

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

    const [buscar, setBuscar] = useState("");
    const navegar = useNavigate();

   const hacerBusqueda = (e) => {
       e.preventDefault()
       let mi_busqueda = e.target.search_field.value;
       navegar("/buscar/" + mi_busqueda);


   }




    return (
        <div className="navbar">

            <div className="logo-navbar"><img src="/images/icons/paquetexpress-logo-navbar.svg" alt={"logo"}></img></div>
            <div className="search">
                <form className="inputG" onSubmit={hacerBusqueda}>
                    <input type="text" name="search_field" id="searchField" className="search-input" placeholder="Buscar..."/>
                        <input type="submit" id="searchButton" className="search-button" value="Buscar"/>
                </form>
            </div>
            <div className="logout-navbar">
                <button className="logout-button" onClick={handleLogout}>
                    <img className="logout-img" src="/images/icons/icono-logout2.svg" title="Cerrar Sesión" alt="View" />
                </button>
            </div>

        </div>
    );
}

export default Navbar;