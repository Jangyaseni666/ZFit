const mongoose = require("mongoose");

const mindSchema = mongoose.Schema({
    styleprefix: String,
    imgsrc: String,
    title: String,
    description: String,
    packs: String,
});

const mindModel = mongoose.model("mind", mindSchema);

module.exports = { mindModel };