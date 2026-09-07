const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,       // lowercase 'type'
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog"
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;