const mongoose=require("mongoose");
const notesschema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
    userid:String
})
const notesmodel=mongoose.model("note",notesschema);
module.exports={
    notesmodel
}