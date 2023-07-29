const express = require("express");
const historyRoute = express.Router();
const { historyModel } = require("../models/historymodel");

historyRoute.get("/cart:uid", async (req, res) => {
  const Uid = req.params.uid;
  try {
    const findcart = await historyModel.find({ uid: Uid, in_cart: true });
    res.send(findcart);
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

historyRoute.get("/history:uid", async (req, res) => {
  const Uid = req.params.uid;
  try {
    const findcart = await historyModel.find({ uid: Uid, in_cart: false });
    res.send(findcart);
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

historyRoute.post("/", async (req, res) => {
  const { pid, uid, in_cart, cost } = req.body;
  try {
    let cart = new historyModel({ pid, uid, in_cart, cost });
    await cart.save();
    res.send({ msg: "added to cart" });
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

historyRoute.patch("/:id", async (req, res) => {
  const data = req.body;
  const Id = req.params.id;
  try {
    await historyModel.findByIdAndUpdate(Id, data);
    res.send({ msg: "updated" });
  } catch (err) {
    res.send({ msg: "eeerrreee" });
  }
});

historyRoute.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  console.log("id"+Id);
  try {
    console.log(1);
    await historyModel.findByIdAndDelete(Id);
    res.send({ok : true})
  } catch (err) {
    res.send({ msg: err });
  }
});

module.exports = { historyRoute };
