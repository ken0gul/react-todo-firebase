import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoList } from "./TodoList";

// Import firestore
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Read all the data from firebase db
  useEffect(() => {
    // Create your query
    const q = query(collection(db, "todos"));

    const unsubscribe = onSnapshot(q, (querySS) => {
      let todoArr = [];
      querySS.forEach((item) => {
        todoArr.push({ ...item.data(), id: item.id });
      });
      setTodos(todoArr);
    });

    return () => unsubscribe();
  }, []);

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

  // toggleComplete

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteToDo = async (id) => {
    deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className=" w-full h-80 bg-blue-100 m-auto my-10 rounded-md max-w-[500px] p-4 overflow-scroll shadow-2xl">
      <h2 className="text-center text-xl font-bold mb-2">Todo List</h2>
      <form onSubmit={createTask} className={"flex gap-2 justify-center"}>
        <input
          type="text"
          placeholder="Add some tasks"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="text-xl p-2"
        />
        <button className="text-red-500">
          <IoIosAddCircle size={45} />
        </button>
      </form>

      {todos.map((todo, index) => (
        <TodoList
          key={index}
          todos={todo}
          deleteTask={deleteToDo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoApp;
