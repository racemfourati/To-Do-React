import { useContext } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Feed from "./components/Feed";
import TodosContext from "./context/todos";

function App() {
  const { todos} = useContext(TodosContext);

  return (
    <div className="App center">
      <h1>My Todo List</h1>
      <AddItem />
      {todos ? <Feed items={todos} /> : <></>}
    </div>
  );
}

export default App;
