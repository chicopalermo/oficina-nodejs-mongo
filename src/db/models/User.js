import mongoose from "mongoose";
import { encrypt } from "../../utils/crypt.js";

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String
    },
    password: {
        type:String,
        required:true,
        minLen:5,
    }
});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    this.password = encrypt(this.password);
    next();
});

export default mongoose.model("User", UserSchema);