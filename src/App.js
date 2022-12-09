import {  useContext } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Feed from "./components/Feed";
import TodosContext from "./context/todos";

function App() {
  const { todos, addToDo, deleteToDo } = useContext(TodosContext);

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
