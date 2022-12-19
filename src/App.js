import { useContext } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Feed from "./components/Feed";
import TodosContext from "./context/todos";

function App() {
  const { todos} = useContext(TodosContext);

  return (
    <div className="App center">
      <h1>cht7eb nbidilik e5er si mohamed ?</h1>
      <AddItem />
      {todos ? <Feed items={todos} /> : <></>}
    </div>
  );
}

export default App;
