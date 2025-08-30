const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String
    },            
    isVerified: {
        type: Boolean,
        default: false
    }, 
    googleId: {
        type: String
    }         
});

module.exports = mongoose.model("User", UserSchema);
