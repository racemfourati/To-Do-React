import React, { useState ,useContext } from "react";
import TodosContext from "../context/todos";

const AddItem = () => {
  const [text, setText] = useState("");
  const { addToDo } = useContext(TodosContext);


  const onSubmit = () => {
    if (text && text !== "") {
      addToDo(text);
      setText('')
    }
  };

  return (
    <div>
      <input
      value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="add-input"
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        className="add-submit"
      >
        add
      </button>
    </div>
  );
};

export default AddItem;
