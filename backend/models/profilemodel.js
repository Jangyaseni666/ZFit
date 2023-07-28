const mongoose=require("mongoose");

const profileSchema=mongoose.Schema({
    FName:String,
    email:String,
    gender:String,
    userID:String
});

const ProfileModel=mongoose.model("profile",profileSchema);
module.exports={ ProfileModel };