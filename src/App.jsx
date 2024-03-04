import { useState } from "react";
import React from "react";
/* import "./Button";
import "./TodoList"; */
import "./App.css";

function App() {
  const [lists, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const obj = {
      title: inputValue,
      done: false,
    };

    setList([...lists, obj]);
    setInputValue("");
  }
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleDelete(index) {
    const newTodos = [...lists];
    newTodos.splice(index, 1);
    setList(newTodos);
  }

  function toggleCompleted(index) {
    setList((prevLists) =>
      prevLists.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="todoList">
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button className="Add" type="submit">
          Add
        </button>
      </form>
      <ol className="orderList">
        {lists.map((item, index) => (
          <li key={index}>
            <div>{index + 1}</div>
            <div
              style={{ textDecoration: item.done ? "line-through" : "none" }}>
              {item.title}
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => toggleCompleted(index)}>
              {" "}
              {item.done ? "Undone" : "Done"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
