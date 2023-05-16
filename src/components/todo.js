import { useState } from "react";

export default function Todo ({item,onUpdate,onDelete}) {
    const [isEdit,setIsEdit]=useState(false);

    function Formedit(){
        const [newValue,setNewValue]=useState(item.title); //FUNCION PARA EDITAR EL FOMRMULARIO
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){           //FUNCION PARA CAMBIAR EL VALOR DEL TITULO
            const value=e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(){   //FUNCION PARA ACTUALIZAR LA TAREA CON EL UPDATE
            onUpdate(item.id,newValue);
            setIsEdit(false);
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}> {/*ACA RETORNO UN FORMULARIO PARA EL EDIT */}
                <input type="text" className="todoInputEdit" onChange={handleChange} value={newValue}/>  
                <button className="button-Update" onClick={handleClickUpdateTodo}>Actualizar</button>
            </form>
        )
    }

    

    function TodoElement(){
        return(
            <div className="todoInfo">  {/*ACA RETORNO EL HTML DE LA TAREA*/}
                    <span>{item.title}</span>
                    <div className="botones">
                        <button className="button-edit-task" onClick={()=>setIsEdit(true)}>Editar</button>
                        <button className="button-delete-task" onClick={(e)=>onDelete(item.id)}>Borrar</button>
                    </div>
                </div>
        )
    }

    return(  //ACA SI SE ESTA EDITANDO ME RETORNA EL FORMULARIO, SINO LA TAREA
        <div className="todo">
            {isEdit ? <Formedit/>:<TodoElement/>}
        </div>

    );
}

