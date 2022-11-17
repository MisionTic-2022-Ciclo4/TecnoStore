import React from 'react'
import JsonData from "../../DatabaseLocal/clientes.json"
import "../../styles/pagina3.css"

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.nombres}</td>
					<td>{info.apellidos}</td>
					<td>{info.direccion}</td>
					<td>{info.telefono}</td>
					<td>{info.correo}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead >
					<tr>
					<th>Codigo</th>
					<th>Nombres</th>
					<th>Apellidos</th>
					<th>Dirección</th>
					<th>Teléfono</th>
					<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
