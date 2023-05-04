import React from "react";
import { useState } from "react";
import BoxInput from "./components/BoxInput";
import Context from "./components/Context";
import TaskList from "./components/TaskList";

import "./styles.css";

function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [array, setArray] = useState([]);
  const [dateForTodo, setDateForTodo] = useState([]);
  const value = {
    setDateForTodo,
    dateForTodo,
    array,
    setTextInput,
    textInput,
    setArray
  };

  return (
    <Context.Provider value={value}>
      <div className="wrapper">
        <BoxInput />
        <TaskList />
      </div>
    </Context.Provider>
  );
}

export default TodoList;
