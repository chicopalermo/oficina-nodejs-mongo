import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required:true,
        minLen:5,
    }
});

export default mongoose.model("User", UserSchema);