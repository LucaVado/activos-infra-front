import React, {useState} from "react";
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

    const [buscar, setBuscar] = useState("");

   const hacerBusqueda = (e) => {
       e.preventDefault()
       console.log(e.target.search_field.value)
   }

    return (
        <div className="navbar">

            <div className="logo-navbar"><img src="/images/icons/paquetexpress-logo-navbar.svg"></img></div>
            <div className="search">
                <form onSubmit={hacerBusqueda}>
                    <input type="text" name="search_field"/>
                    <input type="submit" id="serach" value="Buscar"/>
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