import React from "react";
import { IoIosAddCircle } from "react-icons/io";
const TodoApp = () => {
  return (
    <div className=" w-full m-auto rounded-md max-w-[500px] shadow-xl p-4">
      <h2>My To-Dos</h2>
      <form>
        <input type="text" placeholder="Add some task" />
        <button>
          <IoIosAddCircle size={25} />
        </button>
      </form>
    </div>
  );
};

export default TodoApp;
