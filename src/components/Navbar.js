import React, { Component } from "react"
import '../styles/navbar.css'



export default class Navbar extends Component {
render (){
return (


<div className="topnav" id="myTopnav">
      <div>

      
        <div>



          <a href="/Home" className="active">Inicio</a>
          <a href="/Pagina1">Nuestros productos</a>
          <a href="/Pagina3">Gaming Laptops</a>
          <a href="/Pagina4">Clientes</a>

          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>

        )
    }
  } 
