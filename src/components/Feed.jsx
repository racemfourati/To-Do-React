import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";

const Feed = ({ items }) => {
  useEffect(()=>{
    console.log('feed',items)
  })
    
  return (
    <div className="items center">
      {items.map((item) => {
        return <ToDoItem item={item} />;
      })}
    </div>
  );
};

export default Feed;
