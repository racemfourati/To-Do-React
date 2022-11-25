import { useState, useEffect } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Feed from "./components/Feed";

function App() {
  const [todos, settodos] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  //function to add a new todo
  const addToDo = (todo) => {
    if (todo) {
      let oldTodos = [...todos];
      oldTodos.push({ id: lastId, todo: todo, done: false });
      setLastId(lastId + 1);
      settodos(oldTodos);
    }
  };
  return (
    <div className="App center">
      <h1>My todo</h1>
      <AddItem
        addTodo={(todo) => {
          addToDo(todo);
        }}
      />
      {todos ? <Feed items={todos} /> : <></>}
    </div>
  );
}

export default App;
