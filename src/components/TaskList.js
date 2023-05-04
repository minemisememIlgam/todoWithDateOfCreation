import React from "react";
import Context from "./Context";
import { useContext } from "react";

function TaskList() {
  const { dateForTodo, textInput, array, setArray } = useContext(Context);

  const editTodo = (index) => {
    const newArray = [...array]; //мы создаем новый массив скопировав массив array
    newArray.splice(index, 1, textInput); //метод сплайс находит элемент по индексу, (первый аргумент), удаляет его (только его из-за числа 1 и третий необязательный аргумент это замена для удаленного элемента в массиве в нашем случае это инпут)
    setArray(newArray);
  };

  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  const deleteTodo = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1); //индекс элемента для удаления первым аргументом и количество элементов для удаления (а данном случае лишь тот самый индекс)
    setArray(newArray);
  };
  return (
    <div>
      {array.map((todos, index) => (
        <ul>
          <li>
            <span>{todos} </span>
            <h6> {formattedDate} </h6>
            <h6> {dateForTodo} </h6>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default TaskList;
