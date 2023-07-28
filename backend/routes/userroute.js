const express = require("express");
const userRoute = express.Router();
const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req,res) => {
    res.send({msg: "USERSS"});
})

userRoute.post("/register", async (req,res) => {
    const udata =req.body;
    // try {
        const findUser = await userModel.find({email: udata.email});
        console.log(findUser);
        if (findUser.length === 0) {
          bcrypt.hash(udata.pass, 3, async (err, hashed) => {
            if(err){
              res.send({msg: "Error occured while hashing"});
            } else{
              console.log(udata);
              udata['pass'] = hashed;
              let user = new userModel(udata);
              await user.save();
              res.send({ msg: "User Registered" });
            }
          })
        } else {
          res.send({ msg: "User already registered" });
        }
    // } catch (err) {
    //     res.send({msg: err});
    // }
})

userRoute.post("/login", async (req,res) => {
  const {email,pass} =  req.body;
  try {
    const findUser = await userModel.findOne({email});
    if(findUser){
      bcrypt.compare(pass, findUser.pass, (err, hashed) => {
        if(hashed){
          const token = jwt.sign({ userId: findUser._id }, "zfit");
          res.send({ msg: "User logged in", token: token, userId: findUser._id });
        }else{
          res.send({msg: "Invalid credentials!"});
        }
      })
    }else{
      res.send({msg: "Error occured"});
    }
  } catch (err) {
    res.send({msg: err});
  }
})

module.exports = userRoute;