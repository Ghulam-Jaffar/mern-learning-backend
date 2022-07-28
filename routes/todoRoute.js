const express = require('express');
const router = express.Router();

const { getTodos, createTodo, deleteTodo, toggleTodoStatus } = require('../controllers/todoController');
const { protect } = require('../middleware/authMiddleware');

router.get('/todos', protect, getTodos);
router.post("/todo/new", protect, createTodo)
router.delete("/todo/delete/:id", protect, deleteTodo)
router.put("/todo/toggleStatus/:id", protect, toggleTodoStatus)

module.exports = router;