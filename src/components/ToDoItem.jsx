import React, { useContext } from "react";
import close from "../assets/close.svg";
import editIcon from "../assets/edit-icon.svg"
import TodosContext from "../context/todos";

const ToDoItem = ({ item,}) => {
  const { deleteToDo,editToDo } = useContext(TodosContext);


  
  return (
    <div className="item" id={item.id}>
      <input  className='checkbox' type="checkbox" id={item.id} name={item.todo} value={item.todo} />
      <h3>{item.todo}</h3>
      <img
      alt="edit-icon"
        className="edit-icon"
        onClick={(e) => {
         let newTodo= prompt("You want to edit your todo ?", item.todo);
         if(newTodo){
          editToDo(e.target.id,newTodo)
         }
        }}
        id={item.id}
        src={editIcon}
      />
      <img
      alt="close-icon"
        className="close-icon"
        onClick={(e) => {
          deleteToDo(e.target.id);
        }}
        id={item.id}
        src={close}
      />
    </div>
  );
};

export default ToDoItem;
