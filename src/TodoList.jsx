import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const style = {
  row: `flex`,
  li: `flex justify-between  bg-blue-100 p-6 my-4 uppercase rounded-lg `,
  liComplete: `flex justify-between bg-blue-800 p-6 my-4 uppercase bg-opacity-25 rounded-lg`,
  text: `text-black ml-2 cursor-pointer`,
  btnText: "text-black",
  completed: `line-through`,
};

export const TodoList = ({ todos, toggleComplete, deleteTask }) => {
  return (
    <ul>
      <li className={todos.completed ? style.liComplete : style.li}>
        <div onClick={() => toggleComplete(todos)} className={style.row}>
          <input
            type="checkbox"
            onChange={() => toggleComplete(todos)}
            checked={todos.completed ? "checked" : ""}
          />
          <p className={todos.completed ? style.completed : style.text}>
            {todos.task}
          </p>
        </div>
        <button className={style.btnText} onClick={() => deleteTask(todos.id)}>
          <FaRegTrashAlt />
        </button>
      </li>
    </ul>
  );
};
