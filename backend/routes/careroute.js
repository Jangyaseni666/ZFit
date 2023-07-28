const express = require("express");
const careRoute = express.Router();
const { careModel } = require("../models/caremodel");

careRoute.get("/", async (req, res) => {
  try {
    const findcare = await careModel.find({});
    res.send(findcare);
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

careRoute.get("/product:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const findcare = await careModel.find({ _id: Id });
    res.send(findcare);
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

careRoute.patch("/update/:id", async (req, res) => {
  const Id = req.params.id;
  const data = req.body;
  try {
    await careModel.findByIdAndUpdate(Id, data);
    res.send({ msg: "Updated Care!" });
  } catch (error) {
    res.send({ msg: error });
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

module.exports = { careRoute };
