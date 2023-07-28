const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL,{dbName:"z_fit"});

module.exports = { connection };