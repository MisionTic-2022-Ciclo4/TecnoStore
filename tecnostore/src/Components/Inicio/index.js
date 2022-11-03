import React from "react";
import Portada from  "../../images/images7.jpg";
import { Link } from "react-router-dom";

export const  Inicio = () => {
    return(
        <div className="inicio">
            <Link to ="/">
                <h1 className="tittle">Inicio</h1>
            </Link>

            <Link to ="/productos">
                <h1 className="tittle">Productos</h1>
            </Link>            
        </div>
    )
}