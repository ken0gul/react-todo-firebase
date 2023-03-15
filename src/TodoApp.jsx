import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoList } from "./TodoList";

// Import firestore
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const TodoApp = () => {
  const [task, setTask] = useState([]);

  // Add some items
  const createTask = async (e) => {
    e.preventDefault();

    if (task === "") {
      alert("Invalid input");
      return;
    }

    await addDoc(collection(db, "todos"), {
      task: task,
      completed: false,
    });

    setTask("");
  };
  return (
    <div className=" w-full bg-gray-300 m-auto rounded-md max-w-[500px] shadow-xl p-4">
      <h2>My To-Dos</h2>
      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Add some task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>
          <IoIosAddCircle size={25} />
        </button>
      </form>

      <TodoList />
    </div>
  );
};

export default TodoApp;
