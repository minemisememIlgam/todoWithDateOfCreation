import Context from "./Context";
import { useContext } from "react";

function BoxInput() {
  const {
    dateForTodo,
    setDateForTodo,
    array,
    setArray,
    textInput,
    setTextInput
  } = useContext(Context);

  const inputTextFunction = (event) => {
    setTextInput(event.target.value);
  };
  const pasteToArray = () => {
    setArray([...array, textInput]);
  };
  const inputDate = (event) => {
    setDateForTodo(event.target.value);
  };
  const pasteDateToArray = () => {
    setArray([...array, dateForTodo]);
  };
  return (
    <div>
      <form>
        <input
          onChange={inputTextFunction}
          type="text"
          placeholder="Type some tasks to get easier your life:)"
        />
        <button onClick={pasteToArray} type="button">
          Add
        </button>
        <input
          onChange={inputDate}
          type="time"
          placeholder="Type some date:)"
        />
        <button onClick={pasteToArray} type="button">
          Add
        </button>
      </form>
    </div>
  );
}
export default BoxInput;
