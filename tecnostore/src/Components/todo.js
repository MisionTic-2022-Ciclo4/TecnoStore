import { useState } from "react";
export default function Todo({item}){


    const[isEdit, setIsEdit] = useState(false);


    function FormEdit(){
        function handleSubmit(e){
            e.preventDefault();
        }

        const[newValue, setNewValue] =  useState(item.title);
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
        return <form className="todoUptadeForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange}  value= {newValue}/>
            <button className="">Update</button>
        </form>
    }

    

    function TodoElement(){
        return <div className="todoInfo">
        {item.title} <button onClick={() => setIsEdit(true)}>Editar</button>
        <button>Eliminar</button>
    </div>
    }
    return(
     <div className="todo">
        {isEdit ? <FormEdit /> : <TodoElement /> }</div>
     

    );
}