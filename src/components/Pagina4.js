
import { Fragment, useState } from "react";
import clientBD from "../DatabaseLocal/clientes.json"
import "../styles/pagina3.css"
import JsonDataDisplay from "./Tablepag3/TableClientes";

//import {Phonebook}from "./CrudPagina3Cliente/Phonebook";

const Pagina4 = (props) => {
  
     const [users, setUsers] = useState([])
     
     const handleSubmit=(e)=>{

      
      e.preventDefault();
      const firstadd=e.target.fname.value;
      const lastadd=e.target.lname.value;
      const adressadd=e.target.laddress.value;
      const telephoneadd=e.target.ltelephone.value;
      const lcorreoadd=e.target.lcorreo.value;

      console.log ("Nombres :" + firstadd, 
      ",", "Apellidos :" + lastadd,
      ",", "Direccion :" + adressadd,
      ",", "Telefono :" + telephoneadd,
      ",", "Correo :" + lcorreoadd,
      )
      e.target.reset();










      
     }


     
    
  //muestra la based de datos de clientes en la consola de la pagina clientes
  console.log(clientBD)
  return (
  
  <>

  {/* se importa <fragment> para meter mas de dos lineas*/}
      
    
  <Fragment>

  <h2 id="final">Clientes - CRUD</h2>

<br></br>
<br></br>

<div id = "caja1" >
   
<div className="add-contact">
         <form onSubmit={handleSubmit} >
       

       <br></br>
        <br></br>

        <label id = "input"> Nombres del cliente: </label>
        <input type="text" name="fname" placeholder="Nombres del cliente"></input>
        <br></br>
        <br></br>
        <label id = "input"> Apellidos del cliente: </label>
        <input type="text" name="lname" placeholder="Apellidos del cliente" ></input>
        <br></br>
        <br></br>
        <label id = "input"> Dirección del cliente: </label>
        <input type="text" name="laddress" placeholder="Dirección del cliente" ></input>
        <br></br>
        <br></br>
        <label id = "input">Teléfono del cliente: </label>
        <input type="text" name="ltelephone" placeholder="Teléfono del cliente" ></input>
        <br></br>
        <br></br>
        <label id = "input"> Correo del cliente: </label>
        <input id = "input" type="text" name="lcorreo" placeholder="Correo del cliente"></input>
        
         <br></br>
        <br></br>
        <br></br>




        <br></br>
        <input id = "input"    type="submit" name="save_contact" value="Cargar usuario a Consola (BD local)B1" />
       
       <br></br>
        <br></br>
        
      
    
        <input id = "input" onClick = {saveUsers(users, setUsers)} type="button" name="save_contact" value="Cargar contactos a Consola del Explorador (BD local) b2" />
        <br></br>
        <br></br>
       

        <hr id="lineaa"></hr>
        <br></br>
        
        <input id = "input"  type="submit" name="save_contact" value="Cargar usuario a Consola (Json) (BD local)" />
        </form>

        </div>
        
</div>


<div id = "caja1" >
<div className="add-contact"></div>
   <div className="App">
      <h3 id="letracaja">Clientes - TecnoStore</h3>
      <JsonDataDisplay/>
 
    </div>
    </div>
    



    </Fragment>
  



      


      

        <div>
      
        {/* <Phonebook/>  Failed attempt*/}  


        </div>
  </>



  );


}

export default Pagina4;


function saveUsers (users, setUsers){
   return( )=> {
    setUsers(clientBD)
   }

}

