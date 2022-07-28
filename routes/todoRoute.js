const express = require('express');
const router = express.Router();

const {getTodos, createTodo, deleteTodo, toggleTodoStatus} = require('../controllers/todoController');

router.get('/todos', getTodos);
router.post("/todo/new", createTodo)
router.delete( "/todo/delete/:id", deleteTodo)
router.put("/todo/toggleStatus/:id", toggleTodoStatus)

module.exports = router;