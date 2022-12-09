import { createContext, useState } from "react";

const TodosContext = createContext();

const Provider = ({ children }) => {
  const [todos, settodos] = useState([]);
  const [lastId, setLastId] = useState(0);

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
    stateCopy.filter((el, index) => {
      if (el.id === Number(id)) {
        stateCopy.splice(index, 1);
        settodos(stateCopy);
      }
      return "nothing";
    });
  };

  const share = {
    todos,
    addToDo,
    deleteToDo,
  };

  return (
    <TodosContext.Provider value={share}>{children}</TodosContext.Provider>
  );
};


export {Provider}
export default TodosContext;
