const express=require("express");
const profileroute=express.Router();
const {ProfileModel}=require("../models/profilemodel");

profileroute.get("/:id",async(req,res)=>{
    // const userId=req.body.userID;
    // console.log(req.body);
    const Id=req.params.id;
    // console.log(1);
    // const allProfiles=await ProfileModel.find({});
    // res.send(allProfiles);
    try {
        const allProfiles = await ProfileModel.find({ _id: Id});
        res.send(allProfiles);
      } catch (err) {
        res.send({ msg: "eeerrreee" });
      }
});
profileroute.post("/createprofile",async(req,res)=>{
    const profile_data=req.body;
    const userId=req.body.userID;
    try{
        const newProfiledata=new ProfileModel(profile_data,userId);
        await newProfiledata.save();
        res.send({msg:"Updated Profile successfully"});
    }
    catch(error){
        res.send(msg.error);
    }
});
profileroute.patch("/update/:id", async (req, res) => {
    const Id = req.params.id;
    const data = req.body;
    const userID = req.body.userID;
    try {
      const findProfile = await ProfileModel.find({ _id: Id });
      console.log(findProfile[0]);
      if (findProfile[0].userID === userID) {
        await ProfileModel.findByIdAndUpdate(Id, data);
        res.send({ msg: "Updated Todo!" });
      } else {
        res.send({ msg: "You are not authorized" });
      }
    } catch (error) {
      res.send({ msg: error });
    }
  });
  
  profileroute.delete("/delete/:id", async (req, res) => {
    const Id = req.params.id;
    const userID = req.body.userID;
    try {
      const findProfile = await ProfileModel.find({ _id: Id });
      if (findProfile[0].userID === userID) {
        await ProfileModel.findByIdAndDelete(Id);
        res.send({ msg: "Successully deleted" });
      } else {
        res.send({ msg: "You are not authorized" });
      }
    } catch (error) {
      res.send({ msg: error });
    }
  });
module.exports= {profileroute} ;