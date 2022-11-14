import React from 'react'
import Computed from "../../images/index.jpg";
import index1 from "../../images/index1.jpg";
import index2 from "../../images/images.jpg";
import index3 from "../../images/images1.jpg";

export const ProductosLista = () => {
    return(
        <>
        <h1 className='title'>Productos</h1>
        
        <div className='productos'>
          <div className='producto'>
            <a>
              <div className='producto__img'>
              <img src={Computed} alt='logo' width="150"></img>
              </div>
            </a>
        
        
          <div className='producto__footer'>
                  <h1> Title </h1>
                  <p> Categoria </p>
                  <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>Añadir al carrito</button>
            <div>
                <a href='#' className='btn'>
                    Vista
                </a>
            </div>
          </div>
        </div>

        <div className='producto'>
            <a>
              <div className='producto__img'>
              <img src={index1} alt='logo' width="150"></img>
              </div>
            </a>
        
        
          <div className='producto__footer'>
                  <h1> Title </h1>
                  <p> Categoria </p>
                  <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>Añadir al carrito</button>
            <div>
                <a href='#' className='btn'>
                    Vista
                </a>
            </div>
          </div>
        </div>
        <div className='producto'>
            <a>
              <div className='producto__img'>
              <img src={index2} alt='logo' width="150"></img>
              </div>
            </a>
        
        
          <div className='producto__footer'>
                  <h1> Title </h1>
                  <p> Categoria </p>
                  <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>Añadir al carrito</button>
            <div>
                <a href='#' className='btn'>
                    Vista
                </a>
            </div>
          </div>
        </div>
        <div className='producto'>
            <a>
              <div className='producto__img'>
              <img src={index3} alt='logo' width="150"></img>
              </div>
            </a>
        
        
          <div className='producto__footer'>
                  <h1> Title </h1>
                  <p> Categoria </p>
                  <p className='price'>$320</p>
          </div>
          <div className='buttom'>
            <button className='btn'>Añadir al carrito</button>
            <div>
                <a href='#' className='btn'>
                    Vista
                </a>
            </div>
          </div>
        </div>
       </div>
       </>
    )
}