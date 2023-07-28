const express = require("express");
const historyRoute = express.Router();
const { historyModel } = require("../models/historymodel");

historyRoute.get("/:uid", async (req, res) => {
    const Uid = req.params.uid;
    try {
      const findcart = await historyModel.find({ uid: Uid, in_cart: false });
      res.send(findcart);
    } catch (err) {
      res.send({ msg: "eeerrreee" });
    }
  });

module.exports = historyRoute;