const mongoose = require("mongoose");

const careSchema = mongoose.Schema({
  img_src: String,
  price: String,
  offer_price: String,
  img_src_full: String,
  title: String,
  desc: String,
  test_no: Number,
  test_time: Number,
});

const careModel = mongoose.model("care", careSchema);

module.exports = { careModel };
