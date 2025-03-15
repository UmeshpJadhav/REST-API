const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/apidev")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const userSchema = mongoose.Schema({
    name : String,
    username : String,

})

module.exports = mongoose.model("user", userSchema );