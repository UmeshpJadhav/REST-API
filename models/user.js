const mongoose = require("mongoose");

mongoose.coonnect('mongodb://127.0.0.1:27017/apidev');


const userSchema = mongoose.schema({
    name : String,
    username : String,

})

module.exports = mongoose.model("user", userSchema );