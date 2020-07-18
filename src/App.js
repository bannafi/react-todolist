import React from "react";
import "./styles.css";

import Paper from "./components/paper";

export default function App() {
  return (
    <Paper>
      <section class="header">
        <button class="header-btn main-black-color">Add</button>
        <h1 class="header-title">Todo List</h1>
        <button class="header-btn main-red-color">Clear</button>
      </section>

      <section class="add">
        <form class="add-form">
          <input type="text" class="add-input" />
          <button class="add-btn main-black-color">Add</button>
        </form>
      </section>

      <section class="todos">
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
        <div class="todo">
          <span class="todo-text">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}
