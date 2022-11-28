import React, {  } from "react";
import close from "../assets/close.svg";

const ToDoItem = ({ item, deleteToDo }) => {

  
  return (
    <div className="item" id={item.id}>
      <input  className='checkbox' type="checkbox" id={item.id} name={item.todo} value={item.todo} />
      <h3>{item.todo}</h3>
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
