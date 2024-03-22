const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true, 
        required: true
    },
    phone_number:{
        type: Number,
        required: true
    },
    priority:{
        type: Number,
        enum: [0,1,2],
        default: 1
    }
})

const EduResource = mongoose.model("user", UserSchema);
module.exports = EduResource;