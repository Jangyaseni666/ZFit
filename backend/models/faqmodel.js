const mongoose = require("mongoose");

const faqSchema = mongoose.Schema({
  question: String,
  answer: String,
});

const faqModel = mongoose.model("faq", faqSchema);

module.exports = { faqModel };
