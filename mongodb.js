const mongoose = require("mongoose")

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://Casper:gjaffar1214@cluster0.atkv0.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log("MongoDB Connected"))
        .catch(console.error)
}

module.exports = connectDB 