const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    FName: String,
    imgsrc: String,
    email: String,
    gender: String,
    pass: String,
    isAdmin:Boolean
});


module.exports = userModel = mongoose.model("user", userSchema);