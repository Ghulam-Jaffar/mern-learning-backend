const express = require("express")
const cors = require("cors")

const connectDB = require("./mongodb")
const todoRoute = require("./routes/todoRoute")

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use("/api", todoRoute)
 
app.listen(5000, () => { console.log("Server is running on port 5000") })