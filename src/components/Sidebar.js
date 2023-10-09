import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:"/",
            name: "dashboard",
            icon: ""
        },
        {
            path:"/equipoCctv",
            name: "Equipo CCTV",
            icon: ""
        },
        {
            path:"/equipoAlarma",
            name: "Equipo Alarma",
            icon: ""
        },
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="bars"></div>
                <div>
                {
                    menuItem.map((item, index) =>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
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