const Todo = require("../models/todoModel")

const getTodos = async (req, res) => {
    const todos = await Todo.find({user: req.user._id})
    res.json(todos)
}

const createTodo = (req, res) =>{
    const todo = new Todo({
        title: req.body.title,
        user: req.user._id
    })
    todo.save()
    res.json(todo)
}

const deleteTodo = async (req, res) =>{
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
    res.json(deletedTodo)
}

const toggleTodoStatus = async (req, res) =>{
    const todo = await Todo.findById(req.params.id)
    todo.complete = !todo.complete
    todo.save()
    res.json(todo)
}

exports.getTodos = getTodos
exports.createTodo = createTodo
exports.deleteTodo = deleteTodo
exports.toggleTodoStatus = toggleTodoStatus