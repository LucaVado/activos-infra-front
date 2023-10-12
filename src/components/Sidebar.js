import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/",
            name: "dashboard",
            iconActive: "/images/icons/icono-inicio-active.svg",
            icon:"/images/icons/icono-inicio.svg"
        },
        {
            path:"/equipoCctv",
            name: "Equipo CCTV",
            iconActive: "/images/icons/icono-equipocctv-active.svg",
            icon:"/images/icons/icono-equipocctv.svg"
        },
        {
            path:"/equipoAlarma",
            name: "Equipo Alarma",
            iconActive: "/images/icons/icono-equipoalarma-active.svg",
            icon:"/images/icons/icono-equipoalarma.svg"
        },
        {
            path:"/transito",
            name: "En transito",
            iconActive: "/images/icons/icono-entransito-active.svg",
            icon:"/images/icons/icono-entransito.svg"
        },
        {
            path:"/entradas",
            name: "Entradas",
            iconActive: "/images/icons/icono-entradas-active.svg",
            icon:"/images/icons/icono-entradas.svg"
        },
        {
            path:"/porRevisarLLegada",
            name: "Por revisar llegada",
            iconActive: "/images/icons/icono-revisarllegada-active.svg",
            icon:"/images/icons/icono-revisarllegada.svg"
        },
        {
            path:"/proyectos",
            name: "Proyectos",
            iconActive: "/images/icons/icono-proyectos-active.svg",
            icon:"/images/icons/icono-proyectos.svg"
        },
        {
            path:"/sucursales",
            name: "Sucursales",
            iconActive: "/images/icons/icono-sucursales-active.svg",
            icon:"/images/icons/icono-sucursales.svg"
        },
        {
            path:"/users",
            name: "Usuarios",
            iconActive: "/images/icons/icono-users-active.svg",
            icon:"/images/icons/icono-users.svg"
        },
    ]

    const location = useLocation();

    return (
        <div className="container">
            <div className="sidebar">
                <div className="bars"></div>
                <div>
                {
                    menuItem.map((item, index) =>(                        
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon"><img src={item.path === window.location.pathname ? item.iconActive : item.icon}></img></div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;