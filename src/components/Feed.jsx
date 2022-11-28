import React, {  } from "react";
import ToDoItem from "./ToDoItem";

const Feed = ({ items, deleteToDo }) => {
  return (
    <div className="items center">
      {items.map((item, index) => {
        return <ToDoItem key={index} deleteToDo={deleteToDo} item={item} />;
      })}
    </div>
  );
};

export default Feed;
