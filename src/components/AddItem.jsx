import React, { useState } from "react";

const AddItem = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmit = () => {
    if (text && text !== "") {
      addTodo(text);
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
