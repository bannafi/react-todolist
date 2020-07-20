import React from "react";
import Todo from "./todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar hooks React!"
    },
    {
      text: "Belajar state React!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar hooks React!"
    },
    {
      text: "Belajar state React!"
    },
    {
      text: "Belajar React!"
    }
  ];

  return (
    <section class="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
