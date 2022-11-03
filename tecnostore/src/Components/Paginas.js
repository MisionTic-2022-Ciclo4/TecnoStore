import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";


export const Paginas = () => {
    return(
        <section>
        <Switch>
            <Route path="/" exact component={Inicio} /> 
            <Route path="/producto" exact component={ProductosLista}/>
        </Switch>
        </section>
    )
}