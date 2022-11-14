import React from 'react'
import { Link } from "react-router-dom";
import Computed from "../../images/images.jpg";

export const Header = () => {
    return(
        <header>
            <Link to="/">
                <div className='logo'>
                    <img src={Computed} alt='logo' width="150"></img>
                </div>
            </Link>
             <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/producto">PRODUCTOS</Link>                
                </li>
                <li>
                    <Link to="/asministrador">ADMINISTRADOR</Link>                
                </li>
             </ul>
             <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
             </div>
        </header>
    )
}