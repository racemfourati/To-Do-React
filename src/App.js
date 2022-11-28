import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Feed from "./components/Feed";

function App() {
  const [todos, settodos] = useState([]);
  const [lastId, setLastId] = useState(0);

  //function to add a new todo
  const addToDo = (todo) => {
    if (todo) {
      let oldTodos = [...todos];
      oldTodos.push({ id: lastId, todo: todo, done: false });
      setLastId(lastId + 1);
      settodos(oldTodos);
    }
  };
  const deleteToDo = (id) => {
    let stateCopy = [...todos];
    stateCopy.forEach((el, index) => {
      if (el.id === Number(id)) {
        stateCopy.splice(index, 1);
        settodos(stateCopy);
      }
      return "nothing";
    });
  };
  return (
    <div className="App center">
      <h1>My Todo List</h1>
      <AddItem
        addTodo={(todo) => {
          addToDo(todo);
        }}
      />
      {todos ? <Feed deleteToDo={deleteToDo} items={todos} /> : <></>}
    </div>
  );
}

export default App;
