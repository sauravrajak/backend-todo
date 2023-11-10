const express = require("express");
const {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

const todoRoute = express.Router();

todoRoute.get("/", getToDo);
todoRoute.post("/save", saveToDo);
todoRoute.post("/update", updateTodo);
todoRoute.post("/delete", deleteTodo);

module.exports = todoRoute;
