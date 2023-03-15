import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const style = {
  row: `flex`,
  li: `flex justify-between bg-gray-300 p-6 my-4 uppercase`,
  text: `text-black ml-2 cursor-pointer`,
  btnText: "text-black",
};

export const TodoList = () => {
  return (
    <ul>
      <li className={style.li}>
        <div className={style.row}>
          <input type="checkbox" />
          <p class={style.text}>Todo</p>
        </div>
        <button className={style.btnText}>
          <FaRegTrashAlt />
        </button>
      </li>
    </ul>
  );
};
