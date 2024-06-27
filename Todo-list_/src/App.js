import React from "react";

import App from './Components/Header';
import Todolist from "./Components/Todolist";
import Button from "./Components/Button";
import './style.css';


const app = () => {

  return (
    <div className="todo-container">
      <App Header="Todo list" />
      <Todolist text="Eat" />
      <Todolist text="Code" />
      <Todolist text="Repeat" />
      <Todolist text="Sleep" />
      <Todolist text="Gym" />
      <Button />
    </div>

  );
};


export default app;

