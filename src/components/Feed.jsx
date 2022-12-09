import React, {  } from "react";
import ToDoItem from "./ToDoItem";

const Feed = ({ items }) => {
  return (
    <div className="items center">
      {items.map((item, index) => {
        return <ToDoItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Feed;
