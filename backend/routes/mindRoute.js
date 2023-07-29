const express = require("express");
const mindRoute = express.Router();
const {mindModel} = require('../models/mindmodel');

mindRoute.get("/", async (req,res) => {
    try {
        const findMind = await mindModel.find({});
        res.send(findMind);
    } catch (err) {
        res.send(err);
    }
});

module.exports = {mindRoute};