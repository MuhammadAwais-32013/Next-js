"use client";
import { useState } from "react";
import Todo from "@/components/Todo";
export default function page() {
  const [todos, setTodos]: any = useState([]);
  const [inputData, setinputData] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputData]);
    setinputData("");
  };
  const removeTodo = (task: any) => {
    setTodos(todos.filter((todo: any) => todo !== task));
  };
  return (
    <div>
      <input
        className="border border-black m-5 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputData}
        onChange={(e) => setinputData(e.target.value)}
        type="text"
        placeholder="Enter your task"
      />

      <button
        onClick={addTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      {
  todos.map((todo: any, index: number) => {
    return  <Todo key={index} todo={todo} removeTodo={removeTodo} />;
  })
}

    </div>
  );
}
