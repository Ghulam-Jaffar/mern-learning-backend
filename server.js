const express = require("express")
const cors = require("cors")

const connectDB = require("./mongodb")
const todoRoute = require("./routes/todoRoute")

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

const port = process.env.PORT || 5000

app.use("/home", (req, res) => {res.send('Welcome to Todo App')})
app.use("/api", todoRoute)

app.listen(port, () => { console.log(`Server is running on port ${port}`) })