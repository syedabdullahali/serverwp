const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
        },
        verified: {
            type: Boolean,
            default: false
        },
        otp: {
            type: String,
        },
        acceptedTermsAndConditions: {
            type: Boolean,
            default: true
        },
        accountType: {
            type: String,
            default: 'user',
            enum: ["user", "admin"], // Restrict values to "user" or "admin"
        },
    }
)

const User = mongoose.model("user", userModel);
module.exports = User;