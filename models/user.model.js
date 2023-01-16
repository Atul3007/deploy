const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    gender:String
})
const usermodel=mongoose.model("user",userschema);
module.exports={
    usermodel
}