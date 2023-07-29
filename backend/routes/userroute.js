const express = require("express");
const userRoute = express.Router();
const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.get("/", (req,res) => {
    res.send({msg: "USERSS"});
})

userRoute.get("/profile/:id",async(req,res)=>{
  // const userId=req.body.userID;
  // console.log(req.body);
  const Id=req.params.id;
  console.log(Id);
  // console.log(1);
  // const allProfiles=await ProfileModel.find({});
  // res.send(allProfiles);
  try {
      const allProfiles = await userModel.find({ _id: Id});
      res.send(allProfiles);
    } catch (err) {
      res.send({ msg: "err" });
    }
});

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
              udata["isAdmin"]=false;
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
          res.send({ msg: "User logged in", token: token, userId: findUser._id,imgsrc:findUser.imgsrc,isAdmin: findUser.isAdmin });
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

module.exports = {userRoute};