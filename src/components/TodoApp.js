import {useState} from "react";
import Todo from "./todo";

const TodoApp=()=>{
    const [title,setTitle]=useState(""); //TITULO DE MIS TAREAS INCIALES
    const [todos,setTodos]=useState([]); //TAREAS ALMACENADAS

    function handeChange(event){
        const value=event.target.value;     //Obtengo el valor del input        
        setTitle(value)  //SETEO EL TITULO DE LA TAREA
    
    }

    function handleSumbmit(e){   //FUNCION PARA PUBLICAR UNA TAREA
        e.preventDefault();
        const newTodo={   //CREACION DE LA TAREA CON SUS PARAMETROS
            id:crypto.randomUUID(),
            title: title,
            completed:false
        };

        const temp=[...todos];  //COPIA DEL ARRAY DE TAREAS PARA ASIGNARLO MAS TARDE COMO UNA LISTA TEMPORAL
        temp.unshift(newTodo);

        setTodos(temp);
        setTitle("")
    }

    function handleUpdate(id,value){  //FUNCION PARA ACTUALIZAR EL TITULO DE LAS TAREAS
        const temp=[...todos];
        const item=temp.find(item => item.id === id);
        item.title=value
        setTodos(temp)
    }

    function handleDelete(id){    //BUSCO EL ELEMENTO DEL ARRAY PARA BORRARLO POR SU ID
        const temp=todos.filter(item=> item.id!==id);
        setTodos(temp)
    }

    return(
        <div className="todoContainer">  {/*ELEMENTO CON EL INPUT PARA LA CREACION DE LA TAREA */}
            <div className="inputTareas">
                <span>📝 Lista de Tareas 📝</span>
                <form onSubmit={handleSumbmit}>
                    <input onChange={handeChange} className="todoInput" value={title} placeholder="Añade una tarea "/>
                    <input 
                        onClick={handleSumbmit}
                        type="submit" 
                        value="Añadir Tarea" 
                        className="buttonCreate"/>
                </form>
            </div>

            <div className="todosContainer">  {/*ARRAY CON LA TAREAS QUE TENGO ALMACENADAS */}
                {
                    todos.map(item=>(
                        <Todo item={item}  
                            onUpdate={handleUpdate} 
                            onDelete={handleDelete} 
                        />  //ahora todo vive dentro del todo
                    ))
                }
            </div>

        </div>
    )
}

export default TodoApp;