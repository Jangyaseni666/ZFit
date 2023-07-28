const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    pid: String,
    uid: String,
    in_cart: Boolean,
    cost: String,
});

const historyModel = mongoose.model("history", historySchema);

module.exports = { historyModel };