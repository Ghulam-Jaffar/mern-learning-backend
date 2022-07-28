const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        rrequired: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", TodoSchema)
module.exports = Todo