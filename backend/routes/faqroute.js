const express = require("express");
const faqRoute = express.Router();
const { faqModel } = require("../models/faqmodel");

faqRoute.get("/", async (req, res) => {
  try {
    const findfaq = await faqModel.find({});
    res.send(findfaq);
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

// todoRoute.delete("/delete/:id", async (req, res) => {
//   const userID = req.body.userID;
//   const Id = req.params.id;
//   try {
//     const findTodo = await todoModel.find({ _id:Id });
//     if (findTodo[0].userID === userID) {
//       await todoModel.findByIdAndDelete(Id);
//       res.send({ msg: "todo deleted" });
//     } else {
//       res.send({ msg: "you are not authorised" });
//     }
//   } catch (err) {
//     res.send({ msg: "eeerrreee" });
//   }
// });

module.exports = { faqRoute };
