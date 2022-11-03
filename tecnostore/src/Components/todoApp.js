import React, { useState } from "react";
import Todo from "/Instalaciones/MINTIC2022/ejercicios/app/src/components/todo";

export default function TodoApp(){
    const [title, setTitle] = useState('Hola'); 
    const [todos, setTodos] = useState([]);

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title:title,
            completed : false
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    return (
     <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
           <input onChange={handleChange} className="TodoInput" value={title}/>
           <input onClick={handleSubmit} type="submit" value="Crear Producto" className="buttonCreate"/>

        </form>

        <div className="todosContainer">
            {
                todos.map(item => (
                   <Todo key={item.id} item={item} />
                ))
            }
        </div>
     </div>
    );
}