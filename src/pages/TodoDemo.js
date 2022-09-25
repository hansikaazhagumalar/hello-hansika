import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const TodoDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [task, setTask] = useState("");

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount ((c) => c - 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, task]);
  };      
return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>

      <div>
        <input type="text" name="task" id="task" onChange={(e) => setTask(e.target.value)}></input>
        <button onClick={addTodo}> Add Todo</button>
      </div>
    </>
  );
};

export default TodoDemo;