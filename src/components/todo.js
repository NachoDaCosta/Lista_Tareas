import { useState } from "react";

export default function Todo ({item,onUpdate,onDelete}) {
    const [isEdit,setIsEdit]=useState(false);

    function Formedit(){
        const [newValue,setNewValue]=useState(item.title);
        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value=e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id,newValue);
            setIsEdit(false);
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInputEdit" onChange={handleChange} value={newValue}/>
                <button className="button-Update" onClick={handleClickUpdateTodo}>Actualizar</button>
            </form>
        )
    }

    

    function TodoElement(){
        return(
            <div className="todoInfo">
                    <span>{item.title}</span>
                    <div className="botones">
                        <button className="button-edit-task" onClick={()=>setIsEdit(true)}>Editar</button>
                        <button className="button-delete-task" onClick={(e)=>onDelete(item.id)}>Borrar</button>
                    </div>
                </div>
        )
    }

    return(
        <div className="todo">
            {isEdit ? <Formedit/>:<TodoElement/>}
        </div>

    );
}

