const express = require("express");
const {
  createTodo,
  getTodoList,
  updateTodoist,
  deleteTodoist,
} = require("../controllers/todo");
const verifyToken = require("../authMiddleware/Middleware");

const todoRouter = express.Router();

todoRouter.route("/").post(createTodo).get(getTodoList);
todoRouter.route("/:id").put(updateTodoist).delete(deleteTodoist);

module.exports = todoRouter;
