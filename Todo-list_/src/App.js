import React from "react";

import App from './Components/Header';
import Todolist from "./Components/Todolist";
import Button from "./Components/Button";
import './style.css';


const app = () => {

  return (
    <div className="todo-container">
      <App />
      <Todolist />
      <Todolist />
      <Todolist />
      <Todolist />
      <Todolist />
      <Button />
    </div>

  );
};


export default app;

