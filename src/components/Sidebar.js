import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Sidebar = ({ children }) => {

    const { isAdmin } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            iconActive: "/images/icons/icono-inicio-active.svg",
            icon: "/images/icons/icono-inicio.svg"
        },
        {
            path: "/equipoCctv",
            name: "Equipo CCTV",
            iconActive: "/images/icons/icono-equipocctv-active.svg",
            icon: "/images/icons/icono-equipocctv.svg"
        },
        {
            path: "/equipoAlarma",
            name: "Equipo Alarma",
            iconActive: "/images/icons/icono-equipoalarma-active.svg",
            icon: "/images/icons/icono-equipoalarma.svg"
        },
        {
            path: "/transito",
            name: "En transito",
            iconActive: "/images/icons/icono-entransito-active.svg",
            icon: "/images/icons/icono-entransito.svg"
        },
        {
            path: "/entradas",
            name: "Entradas",
            iconActive: "/images/icons/icono-entradas-active.svg",
            icon: "/images/icons/icono-entradas.svg"
        },
        {
            path: "/porRevisarLLegada",
            name: "Por revisar llegada",
            iconActive: "/images/icons/icono-revisarllegada-active.svg",
            icon: "/images/icons/icono-revisarllegada.svg"
        },
        {
            path: "/proyectos",
            name: "Proyectos",
            iconActive: "/images/icons/icono-proyectos-active.svg",
            icon: "/images/icons/icono-proyectos.svg"
        },
        {
            path: "/sucursales",
            name: "Sucursales",
            iconActive: "/images/icons/icono-sucursales-active.svg",
            icon: "/images/icons/icono-sucursales.svg"
        },
        {
            path: "/users",
            name: "Usuarios",
            iconActive: "/images/icons/icono-users-active.svg",
            icon: "/images/icons/icono-users.svg"
        },
    ]

    const location = useLocation();

    return (
        <div className="container" style={{
            gridTemplateColumns: isOpen ? "270px minmax(0, 1fr)" : "65px minmax(0, 1fr)"
        }}>
            <div /*style={{ width: isOpen ? "100%" : "60px" }}*/ className="sidebar">
                {/**/}
                <div className="top-section"></div>
                <div style={{ marginLeft: isOpen ? "20px" : "20px" }} className="bars">
                    <FaBars onClick={toggle} />
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Menu</div>
                </div>
                <div>
                    {menuItem.map(
                        (item, index) =>
                            !(item.path === "/users" && !isAdmin) && (
                                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                    <div className="icon">
                                        <img src={item.path === window.location.pathname ? item.iconActive : item.icon} alt={item.name} />
                                    </div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                        {item.name}
                                    </div>
                                </NavLink>
                            )
                    )}
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;