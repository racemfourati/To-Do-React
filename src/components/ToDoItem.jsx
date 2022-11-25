import React, { useState } from "react";

const ToDoItem = ({ item }) => {
  return <div className="item" id={item.id}>
    <input type="checkbox" id={item.id} name={item.todo} value={item.todo}   />
    <h3>{item.todo}</h3>
  </div>;
};

export default ToDoItem;
